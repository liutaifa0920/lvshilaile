<template>
  <div class="serviceInfo">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>服务详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="topBox">
      <img :src="infoList.server.top_image" alt />
      <div class="topBoxRight">
        <div class="topBoxRightTop">
          <p>{{infoList.server.name}}</p>
          <p>{{infoList.server.describes}}</p>
        </div>
        <div class="topBoxRightjiage">
          <p>价格</p>
          <p>¥{{infoList.server.money}}</p>
        </div>
        <!-- <div class="topBoxRightlvshi">
          <p>服务律师</p>
          <div class="topBoxRightlvshiRight">
            <div
              v-show="infoList.lawyer"
              class="topBoxRightlvshiRightItem"
              v-for="(item, i) in infoList.lawyer"
              :key="i"
              @click="lawyerClick(item, i)"
            >
              <img :src="item.image" alt />
              <p
                :style="lawyerIndex == i ? 'background-color: #2971de;color: white;border: 1px solid #2971de;' : ''"
              >{{item.name}}</p>
            </div>
          </div>
        </div>-->
        <div class="topBoxRightlianxi">
          <!-- <p>
            <span>联系方式</span>
            <input v-model="payNum" type="text" />
          </p>-->
          <div v-show="isLogin" class="payBtn" @click="trueSeeClick">立即支付</div>
          <div v-show="!isLogin" class="noLoginPayBtn" @click="toLogin">未登陆, 请先登录</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottomleft">
        <div class="bottomleftT">相关产品推荐</div>
        <div
          v-show="infoList.ervertwo"
          v-for="(item, i) in infoList.ervertwo"
          :key="i"
          @click="leftItemClick(item.server_two_id)"
          class="bottomleftI"
        >{{item.name}}</div>
      </div>
      <div class="bottomRight">
        <div class="bottomRightTop">服务详情</div>
        <div>
          <img style="width: 100%;" :src="infoList.server.info_image" alt />
        </div>
      </div>
    </div>
    <el-dialog v-show="isPayFlag" title="提示" :visible.sync="isPayFlag" width="30%">
      <div class="payBox">
        <div id="code"></div>
        <canvas ref="canvas" id="canvas"></canvas>
        <div class="payBoxText">
          <p>请使用微信扫一扫</p>
          <p>扫描上方二维码支付</p>
        </div>
      </div>
    </el-dialog>
    <el-dialog v-show="isTrueFlag" title="填写并核对服务订单信息" :visible.sync="isTrueFlag" width="30%">
      <div class="trueBox">
        <div class="trueBoxItem">服务名称 : {{infoList.server.name}}</div>
        <div class="trueBoxItem">服务价格 : ¥{{infoList.server.money}}</div>
        <div class="trueBoxItem">
          <span>联系方式 :</span>
          <el-input v-model="payNum" type="text" placeholder="请输入手机号" />
        </div>
        <div class="trueBoxBtn">
          <el-button class="trueBoxBtnItem" @click="isNoTrueclick">取消</el-button>
          <el-button class="trueBoxBtnItem" @click="nowPayClick" type="primary">确认</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { ServiceArticleview, OrderAdd, orderlists } from "@/api/api";
import QRCode from "qrcode";
import axios from "axios";
import { Message } from "element-ui";
export default {
  data() {
    return {
      id: "",
      payNum: "",
      infoList: {
        server: {
          server_two_id: 14,
          server_one_id: 17,
          name: "纠纷处理",
          describes: "纠纷处理",
          money: "0.1",
          top_image: "http://tiandoulvshi.oss-cn.png",
          info_image: "http://tiandoulvshi.oss-cn8.png"
        },
        lawyer: [
          {
            lawyer_id: 1,
            name: "梁宏刚",
            image:
              "http://tiandoulvshi.oss-cn-beijing.aliyuncs.com/zjl/img/dd5f9c77528a927b2058409144083568.jpg"
          }
        ],
        ervertwo: [
          {
            server_two_id: 15,
            name: "股权设计"
          }
        ]
      },
      lawyerID: "",
      lawyerIndex: "",
      isPayFlag: true,
      order_sn: "",
      timer: null,
      isLogin: false,
      isTrueFlag: false
    };
  },
  mounted() {
    if (localStorage.getItem("isLogin") == 1) {
      this.isLogin = true;
    }
    console.log(this.isLogin);
    this.isPayFlag = false;
    this.queryParam();
  },
  methods: {
    queryParam() {
      this.id = this.$route.query.id;
      this.queryInfo();
    },
    queryInfo() {
      let data = {
        server_two_id: this.id
      };
      ServiceArticleview(data).then(res => {
        console.log(res.data);
        if (res.code == 200) {
          this.infoList = res.data;
          this.lawyerID = res.data.lawyer[0].lawyer_id;
        }
      });
    },
    lawyerClick(item, i) {
      console.log(item.lawyer_id);
      this.lawyerID = item.lawyer_id;
      this.lawyerIndex = i;
    },
    trueSeeClick() {
      this.isTrueFlag = true;
    },
    isNoTrueclick() {
      this.payNum = "";
      this.isTrueFlag = false;
    },
    nowPayClick() {
      let data = {
        user_id: localStorage.getItem("userID"),
        mobile: this.payNum,
        server_two_id: this.id,
        lawyer_id: this.lawyerID
      };
      OrderAdd(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.isPayFlag = true;
          this.order_sn = res.data.order_sn;
          this.useqrcode(res.data.code_url);
          this.timer = setInterval(() => {
            this.queryOrderlists();
          }, 1000);
        }
      });
    },
    queryOrderlists() {
      axios
        .post("http://www.lvshilaile.com/pc/Order/orderlists", {
          order_sn: this.order_sn,
          type: 1
        })
        .then(res => {
          // console.log(res)
          if (res.data.code == 200) {
            Message({
              type: "success",
              message: "支付成功"
            });
            this.isTrueFlag = false;
            clearInterval(this.timer);
            setTimeout(() => {
              this.$router.push({
                path: "/order"
              });
            }, 2000);
          }
        });
    },
    useqrcode(url) {
      QRCode.toCanvas(this.$refs.canvas, url, function(error) {
        if (error) console.error(error);
        console.log("QRCode success!");
      });
    },
    leftItemClick(id) {
      this.id = id;
      this.queryInfo();
    },
    toLogin() {
      this.$router.push({
        path: "/login"
      });
    }
  },
  watch: {
    isPayFlag() {
      if (!this.isPayFlag) {
        clearInterval(this.timer);
      }
    }
  }
};
</script>
<style scoped>
.serviceInfo {
  width: 1200px;
  margin: 0 auto;
  /* border: solid 1px #eeeeee; */
  margin-bottom: 121px;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}

.topBox {
  width: 1200px;
  height: 300px;
  display: flex;
  border: solid 1px #e1e3e6;
  box-sizing: border-box;
  margin-bottom: 50px;
}
.topBox > img {
  width: 300px;
  height: 300px;
}
.topBoxRight {
  width: 900px;
  height: 300px;
}
.topBoxRightTop {
  height: 63px;
  width: 100%;
  text-align: left;
  padding-left: 35px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #e1e3e6;
}
.topBoxRightTop > p:nth-child(1) {
  line-height: 63px;
  font-size: 24px;
  font-weight: bold;
  margin-right: 30px;
}
.topBoxRightTop > p:nth-child(2) {
  line-height: 63px;
  font-size: 16px;
}
.topBoxRightjiage {
  height: 50px;
  padding: 0 35px;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
}
.topBoxRightjiage > p:nth-child(1) {
  margin-right: 50px;
  width: 70px;
  line-height: 40px;
  text-align: left;
  font-size: 16px;
  color: #263238;
}
.topBoxRightjiage > p:nth-child(2) {
  line-height: 50px;
  text-align: left;
  color: #2971de;
  font-size: 24px;
  font-weight: bold;
}
.topBoxRightlvshi {
  height: 135px;
  padding: 0 35px;
  box-sizing: border-box;
  display: flex;
}
.topBoxRightlvshi > p:nth-child(1) {
  margin-right: 30px;
  width: 70px;
  line-height: 30px;
  text-align: left;
  font-size: 16px;
  color: #263238;
}
.topBoxRightlvshiRight {
  width: 670px;
  height: 135px;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
}
.topBoxRightlvshiRight::-webkit-scrollbar {
  display: none;
}
.topBoxRightlvshiRightItem {
  width: 100px;
  height: 135px;
  margin-right: 30px;
  cursor: pointer;
}
.topBoxRightlvshiRightItem > img {
  width: 100px;
  height: 100px;
}
.topBoxRightlvshiRightItem > p {
  height: 30px;
  line-height: 30px;
  border: 1px solid #e1e3e6;
  border-top: 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  top: -5px;
}
.topBoxRightlianxi {
  height: 50px;
  padding: 0 35px;
  margin-top: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.topBoxRightlianxi > p:nth-child(1) {
  margin-right: 50px;
  width: 400px;
  line-height: 40px;
  text-align: left;
  font-size: 16px;
  color: #263238;
}
.topBoxRightlianxi > p:nth-child(1) > span {
  display: inline-block;
  margin-right: 30px;
}
.topBoxRightlianxi > p:nth-child(1) > input {
  width: 201px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 1px #e1e3e6;
  padding: 0 15px;
  box-sizing: border-box;
}

.payBtn {
  width: 200px;
  height: 40px;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#2971de, #2971de);
  color: white;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.noLoginPayBtn {
  width: 200px;
  height: 40px;
  color: white;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  background-color: #aaa !important;
}

.bottom {
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
.bottomleft {
  width: 260px;
  border: solid 1px #e1e3e6;
  padding: 20px 0;
}
.bottomleftT {
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  line-height: 30px;
}
.bottomleftI {
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  text-align: left;
  line-height: 40px;
  cursor: pointer;
}
.bottomRight {
  width: 916px;
}
.bottomRightTop {
  width: 916px;
  height: 68px;
  border: solid 1px #e1e3e6;
  text-align: left;
  line-height: 68px;
  color: #2971de;
  font-size: 16px;
  font-weight: bold;
  padding-left: 40px;
  box-sizing: border-box;
}
.payBox {
  width: 100%;
  height: 200px;
}
.payBoxText {
  /* background-color: #2971de; */
  /* color: white; */
}
.payBoxText > p {
  text-align: center;
}
.trueBox {
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
.trueBoxItem {
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
}
.trueBoxItem input {
  padding: 0 10px;
}
.trueBoxItem span {
  display: inline-block;
  white-space: nowrap;
  line-height: 38px;
  margin-right: 10px;
}
.trueBoxBtn {
  width: 100%;
  display: flex;
  justify-content: center;
}
.trueBoxBtnItem {
  margin: 0 15px;
}
</style>