<template>
  <div class="order">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentBox">
      <div class="titleList">
        <div :class="currentType == 0 ? 'isAction':''" @click="titleClick(0,0)">全部订单</div>
        <div :class="currentType == 1 ? 'isAction':''" @click="titleClick(1,1)">待支付</div>
        <div :class="currentType == 2 ? 'isAction':''" @click="titleClick(2,2)">已付款</div>
        <div :class="currentType == 3 ? 'isAction':''" @click="titleClick(3,2)">进行中</div>
        <div :class="currentType == 4 ? 'isAction':''" @click="titleClick(4,3)">已完成</div>
        <div :class="currentType == 5 ? 'isAction':''" @click="titleClick(5,4)">已取消</div>
        <div :class="currentType == 6 ? 'isAction':''" @click="titleClick(6,4)">已退款</div>
      </div>
      <div class="tableTitle">
        <div>服务项目</div>
        <div>订单编号</div>
        <!-- <div>所选律师</div> -->
        <div>交易状态</div>
        <div>交易操作</div>
      </div>
      <div class="tableItem" v-for="(item, i) in infoList" :key="i">
        <div class="tabItemTit">
          <p>{{item.add_time}}</p>
          <img @click="setOrder(1, item.order_id)" src="img/home/删除.png" alt />
        </div>
        <div class="tabItemCon">
          <div class="tabItemConItem">
            <img :src="item.service_top_image" alt />
            <div class="tabItemConItem1">
              <p>{{item.service_name}}</p>
              <p>¥{{item.money}}</p>
            </div>
          </div>
          <div class="tabItemConItem">
            <p
              style="width: 100%;word-break:break-all;padding: 0 10px;box-sizing: border-box;"
            >{{item.order_sn}}</p>
          </div>
          <!-- <div class="tabItemConItem">{{item.selected_lawyer}} 律师</div> -->
          <div class="tabItemConItem">
            <div v-if="item.status == 1" class="typeSmall isZ">待支付</div>
            <div v-if="item.status == 2" class="typeSmall isY">已付款</div>
            <div v-if="item.status == 2" class="typeSmall isY">进行中</div>
            <div v-if="item.status == 3" class="typeSmall isG">已完成</div>
            <div v-if="item.status == 4" class="typeSmall isGa">已取消</div>
            <div v-if="item.status == 4" class="typeSmall isGa">已退款</div>
          </div>
          <div class="tabItemConItem">
            <div
              v-if="item.status == 1"
              @click="setOrder(2, item.order_id)"
              class="typeBig isBlue"
            >重新支付</div>
            <div
              v-if="item.status == 1"
              @click="setOrder(3, item.order_id)"
              class="typeBig isGary"
            >取消订单</div>
            <div
              v-if="item.status == 2"
              @click="setOrder(3, item.order_id)"
              class="typeBig isGary"
            >申请退款</div>
          </div>
        </div>
      </div>

      <div class="pageBox">
        <el-pagination
          background
          :current-page="currentPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          prev-text="上一页"
          next-text="下一页"
          :page-size="currentSize"
          :total="allTotal"
        ></el-pagination>
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
  </div>
</template>
<script>
import { OrderList, OrderCancel, OrderDellist, OrderTwopay } from "@/api/api";
import QRCode from "qrcode";
import axios from "axios";
import { Message } from "element-ui";
export default {
  data() {
    return {
      currentPage: 1,
      currentSize: 10,
      allTotal: 0,
      currentType: 0,
      orderType: 0,
      tabType: 1,
      tabPaySet: 1,
      infoList: null,
      isPayFlag: true,
      order_sn: "",
      timer: null
    };
  },
  mounted() {
    this.isPayFlag = false;
    this.queryListInfo();
  },
  methods: {
    queryListInfo() {
      let data = {
        limit: this.currentSize,
        page: this.currentPage,
        user_id: localStorage.getItem("userID"),
        status: this.orderType
      };
      OrderList(data).then(res => {
        console.log(res.data.data);
        if (res.code == 200) {
          this.infoList = res.data.data;
          this.allTotal = res.data.total;
        }
      });
    },
    handleCurrentChange(val) {
      console.log(val);
      this.currentPage = val;
      this.queryListInfo();
    },
    titleClick(titI, i) {
      this.currentType = titI;
      this.orderType = i;
      this.queryListInfo();
    },
    setOrder(t, id) {
      if (t == 1) {
        this.orderDelelist(id);
      } else if (t == 2) {
        this.twoPayClick(id);
      } else if (t == 3) {
        this.orderCancellist(id);
      }
    },
    // 重新支付
    twoPayClick(id) {
      let data = {
        order_id: id
      };
      OrderTwopay(data).then(res => {
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
            clearInterval(this.timer);
            setTimeout(() => {
              this.isPayFlag = false;
              this.queryListInfo();
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
    // 删除订单
    orderDelelist(id) {
      let data = {
        order_id: id
      };
      OrderDellist(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          Message({
            type: "success",
            message: "删除成功"
          });
          this.queryListInfo();
        }
      });
    },
    // 取消退订
    orderCancellist(id) {
      let data = {
        order_id: id
      };
      OrderCancel(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          Message({
            type: "success",
            message: "操作成功"
          });
          this.queryListInfo();
        }
      });
    }
  }
};
</script>
<style scoped>
.order {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 120px;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}
.contentBox {
  width: 100%;
  padding-top: 30px;
}

.titleList {
  width: 100%;
  height: 66px;
  border-bottom: solid 1px #eeeeee;
  box-sizing: border-box;
  padding: 0 40px;
  display: flex;
  justify-content: left;
}
.titleList > div {
  height: 66px;
  margin: 0 25px;
  line-height: 66px;
  box-sizing: border-box;
  cursor: pointer;
}
.isAction {
  color: #2971de;
  border-bottom: 2px solid #2971de;
}
.tableTitle {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding: 0 65px;
  box-sizing: border-box;
  border: solid 1px #eeeeee;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.tableItem {
  width: 100%;
  border: solid 1px #eeeeee;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.tabItemTit {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px #eeeeee;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}
.tabItemTit > img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.tabItemCon {
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.tabItemConItem {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
}
.tabItemConItem > img {
  width: 70px;
  height: 70px;
  margin-right: 20px;
}
.tabItemConItem:nth-child(1) {
  width: 278px;
  border-right: 1px solid #eeeeee;
  color: #263238;
}
.tabItemConItem1 {
  height: 70px;
  text-align: left;
}
.tabItemConItem1 > p:nth-child(1) {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.tabItemConItem1 > p:nth-child(2) {
  font-size: 14px;
}
.tabItemConItem:nth-child(2) {
  width: 24%;
  border-right: 1px solid #eeeeee;
}
.tabItemConItem:nth-child(3) {
  width: 24%;
  border-right: 1px solid #eeeeee;
}
.tabItemConItem:nth-child(4) {
  width: 26%;
  /* border-right: 1px solid #eeeeee; */
}
/* .tabItemConItem:nth-child(5) {
  width: 278px;
} */
.typeSmall {
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 4px;
  margin: 0 5px;
  /* cursor: pointer; */
}
.isZ {
  background-color: #cd96f130;
  color: #cd96f1;
}
.isY {
  background-color: #ffc17430;
  color: #ffc174;
}
.isG {
  background-color: #73ddbd30;
  color: #73ddbd;
}
.isGa {
  background-color: #78808430;
  color: #788084;
}

.typeBig {
  padding: 7px 15px;
  border: 1px solid white;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0 5px;
  cursor: pointer;
}
.isBlue {
  color: #2971de;
  border: 1px solid #2971de;
}
.isGary {
  color: #788084;
  border: 1px solid #788084;
}

/* page */
.pageBox {
  width: 100%;
  height: 38px;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>