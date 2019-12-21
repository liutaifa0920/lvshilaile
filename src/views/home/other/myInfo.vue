<template>
  <div class="myInfo">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="contentLeft">
        <div class="contentLeftT">
          <img src="img/home/timg (2).jpeg" />
          <p>张三TOP</p>
        </div>
        <div class="contentLeftB">
          <p class="contentLeftBItem" @click="linketoInfo(1)">
            <img src="img/home/PC信息.png" /> 企业信息
          </p>
          <p class="contentLeftBItem" @click="linketoInfo(2)">
            <img src="img/home/PC资料.png" /> 我的资料
          </p>
          <p class="contentLeftBItem isAction" @click="linketoInfo(3)">
            <img src="img/home/消息 (1).png" /> 我的消息
          </p>
          <p class="contentLeftBItem" @click="linketoInfo(4)">
            <img src="img/home/PC注册会员.png" /> 注册会员
          </p>
        </div>
      </div>
      <div class="contentRight">
        <div class="listItem" v-for="(item,i) in infoList" :key="i" @click="linktoMyInfoItem(item)">
          <div class="listItemT">
            <img :src="item.image" alt />
            <div class="listItemTR">
              <p>{{item.definition}}</p>
              <p>{{item.time}}</p>
            </div>
          </div>
          <div class="listItemB">{{item.reply}}</div>
        </div>
        <!-- <div class="pageBox">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            :total="1000"
          ></el-pagination>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import { homeusersimple } from "@/api/api";
export default {
  data() {
    return {
      userID: "",
      infoList: []
    };
  },
  mounted() {
    this.userID = localStorage.getItem("userID");
    this.queryInfoList();
  },
  methods: {
    queryInfoList() {
      let data = {
        user_id: this.userID
      };
      homeusersimple(data).then(res => {
        console.log(res.data);
        if (res.code == 200) {
          this.infoList = res.data;
        }
      });
    },
    linketoInfo(i) {
      if (i == 1) {
        this.$router.push({
          path: "/businessInfo"
        });
      } else if (i == 2) {
        this.$router.push({
          path: "/userInfo"
        });
      } else if (i == 3) {
      } else if (i == 4) {
      }
    },
    linktoMyInfoItem(item) {
      this.$router.push({
        path: "/myInfoCon",
        query: {
          id: item.id,
          type: item.type
        }
      });
    }
  }
};
</script>
<style>
.myInfo .btn-next,
.myInfo .btn-prev {
  background-color: white !important;
  color: #999999 !important;
}
.myInfo .el-pager li {
  background-color: white !important;
  border: 1px solid #99999950;
  border-radius: 4px;
  color: #999999 !important;
}
.myInfo .el-pager .active {
  background-color: #2971de !important;
  color: white !important;
}
</style>
<style scoped>
.myInfo {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 231px;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}

.content {
  width: 100%;
  display: flex;
  justify-content: left;
}
.contentLeft {
  margin-right: 24px;
}
.contentLeftT {
  width: 258px;
  height: 130px;
  text-align: center;
  color: white;
  margin-bottom: 10px;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#ffffff, #ffffff);
}
.contentLeftT > img {
  width: 61px;
  height: 61px;
  border-radius: 50%;
  margin-top: 19px;
}
.contentLeftB {
  width: 258px;
  border: solid 1px #e1e3e6;
  box-sizing: border-box;
}
.contentLeftBItem {
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: white;
  color: #788084;
}
.contentLeftBItem > img {
  width: 20px;
  margin-right: 10px;
}
.isAction {
  color: white;
  background-color: #2971de;
}

.contentRight {
  width: 916px;
  background-color: #ffffff;
  border: solid 1px #e1e3e6;
  padding: 40px;
  box-sizing: border-box;
  text-align: center;
}
.listItem {
  border-bottom: 1px solid #eeeeee;
  height: 150px;
  padding-top: 30px;
  box-sizing: border-box;
}
.listItem:last-child {
  border: 0;
}
.listItemT {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
}
.listItemT > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.listItemTR {
  width: 100%;
  height: 50px;
  text-align: left;
}
.listItemTR > p:nth-child(1) {
  margin-bottom: 10px;
}
.listItemTR > p:nth-child(2) {
  font-size: 12px;
  color: #788084;
}
.listItemB {
  width: 820px;
  padding-left: 70px;
  box-sizing: border-box;
  text-align: left;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* page */
.pageBox {
  width: 100%;
  height: 38px;
  margin-top: 40px;
}
</style>