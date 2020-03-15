<template>
  <div class="defaut-layout" ref="root">
    <div class="layoutTitle">
      <img @click="toHome" class="layoutLogo" src="img/layout/logoWhite.png" alt="律狮来了" />
      <ul class="layoutNav">
        <li @click="layoutNavClick(1)">
          <p>首页</p>
        </li>
        <li @click="layoutNavClick(2)">
          <p>服务领域</p>
        </li>
        <li @click="layoutNavClick(3)">
          <p>律师团队</p>
        </li>
        <li @click="layoutNavClick(4)">
          <p>新闻中心</p>
        </li>
        <li @click="layoutNavClick(5)">
          <p>关于我们</p>
        </li>
      </ul>
      <div class="layoutLoginBox">
        <div class="layoutLoginTip" @mouseenter="userTipMoveEnter" @mouseleave="userTipMoveLeave">
          <img src="img/layout/铃铛.png" alt="消息通知" />
          <div v-show="isRed" class="redBall"></div>
          <div v-show="userTipMove && isLogin" class="tipList">
            <div
              class="tipListItem"
              v-for="(item , i) in tipArr"
              :key="i"
              @click="linTomyInfoCon(item)"
            >
              <p>{{item.definition}}</p>
              <p>{{item.time}}</p>
            </div>
            <div class="moreTip" @click="linTomyInfo()">
              <p>查看全部咨询 ></p>
            </div>
          </div>
        </div>
        <div class="layoutLoginBlock" @mouseenter="userImgMoveEnter" @mouseleave="userImgMoveLeave">
          <p v-if="!isLogin" @click="toLogin">登录</p>
          <img v-if="isLogin" :src="userImg" alt />
          <div v-show="userInfoMove && isLogin" class="infoList">
            <div class="userInfoLayout">
              <img :src="userImg" alt />
              <p>{{userName}}</p>
            </div>
            <div class="itemListItem" @click="linTobussiness">
              <img src="img/home/PC信息.png" alt />
              <p>企业信息</p>
            </div>
            <div class="itemListItem" @click="linkToUserInfo">
              <img src="img/home/PC资料.png" alt />
              <p>我的资料</p>
            </div>
            <div class="itemListItem" @click="linTomyInfo">
              <img src="img/home/消息.png" alt />
              <p>我的咨询</p>
            </div>
            <div @click="logOut" class="itemListItem">
              <img src="img/home/PC注册会员.png" alt />
              <p>退出登录</p>
            </div>
          </div>
          <!-- <div class="layoutLoginMid"></div>
          <p>注册</p>-->
        </div>
      </div>
    </div>
    <div class="layoutTopBlick"></div>
    <router-view />
    <div class="layoutFooter">
      <div class="layoutFooterTop">
        <div @click="toHome" class="layoutFooterTopLogo">
          <img src="img/layout/logoBlue.png" alt="律狮来了" />
        </div>
        <div class="layoutFooterTopList">
          <div class="layoutFooterTopListItem">
            <p class="layoutFooterTopListItemTit">关于我们</p>
            <p class="layoutFooterTopListItemCon" @click="toAboutItem(5)">了解我们</p>
            <p class="layoutFooterTopListItemCon" @click="toAboutItem(2)">加入我们</p>
          </div>
          <div class="layoutFooterTopListItem">
            <p class="layoutFooterTopListItemTit">常见问题</p>
            <p class="layoutFooterTopListItemCon" @click="toAboutItem(3)">新手帮助</p>
            <p class="layoutFooterTopListItemCon" @click="toAboutItem(4)">支付帮助</p>
          </div>
          <div class="layoutFooterTopListItem">
            <p class="layoutFooterTopListItemTit">友情链接</p>
            <p v-for="(item, i) in youqingList" :key="i" class="layoutFooterTopListItemCon">
              <span @click="youqingLink(item.addres)">{{item.name}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="layoutFooterBot">
        <p>
          <img src="img/layout/ghs.png" alt="国徽" />京公网安备 11010502035663号 备案网
          <a
            style="padding-left:5px;"
            target="_blank"
            href="http://www.beian.miit.gov.cn"
          >http://www.beian.miit.gov.cn</a>
        </p>
        <p>北京律狮科技有限公司，备案号 京ICP备18043352号</p>
        <p>技术支持：北京律狮科技有限公司</p>
      </div>
    </div>
    <!-- rightFixed -->
    <div class="layoutRightFix">
      <div class="rightItem" @click="linkToOrder">
        <img src="img/layout/订单.png" alt />
        <p>订单</p>
        <div class="hover1"></div>
      </div>
      <div @mouseenter="rightFixedMove(1)" @mouseleave="rightFixedLeave" class="rightItem">
        <img src="img/layout/电话.png" alt />
        <p>
          致电
          <br />咨询
        </p>
        <div v-show="enterIndex == 1" class="hover2">400-900-8255</div>
      </div>
      <div
        @mouseenter="rightFixedMove(2)"
        @mouseleave="rightFixedLeave"
        class="rightItem"
        @click="linkToFreeConsult"
      >
        <img src="img/layout/1免费咨询.png" alt />
        <p>
          免费
          <br />咨询
        </p>
        <div v-show="enterIndex == 2" class="hover3">
          <img v-show="isLogin && enterIndex == 2" src="img/layout/免费咨询（悬浮）.png" alt />
          <div class="noLoginTip" v-show="!isLogin && enterIndex == 2">用户未登录,请先登录</div>
        </div>
      </div>
      <div
        @mouseenter="rightFixedMove(3)"
        @mouseleave="rightFixedLeave"
        class="rightItem"
        @click="linkToAllonsult"
      >
        <img src="img/layout/消息.png" alt />
        <p>
          全面
          <br />咨询
        </p>
        <div v-show="enterIndex == 3" class="hover4">
          <img v-show="isLogin && enterIndex == 3" src="img/layout/全面咨询（悬浮）.png" alt />
          <div class="noLoginTip" v-show="!isLogin && enterIndex == 3">用户未登录,请先登录</div>
        </div>
      </div>
      <div @mouseenter="rightFixedMove(4)" @mouseleave="rightFixedLeave" class="rightItem">
        <img src="img/layout/二维码.png" alt />
        <p>小程序</p>
        <div v-show="enterIndex == 4" class="hover5">
          <img src="img/layout/erweima.jpg" alt />
          <div>
            <p>官方小程序</p>
            <p>随时随地</p>
            <p>轻松解疑</p>
          </div>
        </div>
      </div>
      <div class="toTop" @click="toTop">
        <img src="img/layout/回到顶部.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
let Base64 = require("js-base64").Base64;
import { homesuspension, NewsNewround, homeindexpage } from "@/api/api";
import axios from "axios";
import { Message } from "element-ui";
export default {
  name: "defaut-layout",
  data() {
    return {
      userTipMove: false,
      userInfoMove: false,
      isLogin: false,
      userID: "",
      userName: "",
      userImg: "",
      tipArr: [],
      isRed: false,
      enterIndex: null,
      youqingList: []
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.queryLogin();
    this.queryHomeInfo();
  },
  methods: {
    youqingLink(l) {
      window.open(l, "top");
    },
    // 请求首页信息
    queryHomeInfo() {
      homeindexpage().then(res => {
        console.log(res.data);
        this.youqingList = res.data.youqing;
      });
    },
    // 退出登录
    logOut() {
      localStorage.clear();
      this.isLogin = false;
      window.location.href = "http://www.lvshilaile.com/lawtiger/#/layout/home";
      Message({ type: "success", message: "已退出登录" });
      // this.$router.push({
      //   path: "/login"
      // });
    },
    // 查看是否登陆
    queryLogin() {
      if (window.location.href.indexOf("lvshilaile=") != -1) {
        let tempObj = {};
        Base64.decode(
          window.location.href.split("#/")[0].split("lvshilaile=")[1]
        )
          .split("&")
          .map(e => {
            tempObj[e.split("=")[0]] = e.split("=")[1];
          });
        console.log(tempObj);

        localStorage.setItem("isLogin", 1);
        localStorage.setItem("userID", tempObj.user_id);
        localStorage.setItem("userImg", tempObj.picture);
        localStorage.setItem("userName", tempObj.nickName);
        this.isLogin = true;
        this.userID = tempObj.user_id;
        this.userImg = tempObj.picture;
        this.userName = tempObj.nickName;
        this.queryHomesuspension();
        this.queryNewsNewround();
      } else if (this.$store.state.home.isLogin) {
        localStorage.setItem("isLogin", 1);
        this.isLogin = true;
        this.userID = localStorage.getItem("userID");
        this.userImg = localStorage.getItem("userImg");
        this.userName = localStorage.getItem("userName");
        this.queryHomesuspension();
        this.queryNewsNewround();
      } else if (localStorage.getItem("isLogin") == 1) {
        this.isLogin = true;
        this.userID = localStorage.getItem("userID");
        this.userImg = localStorage.getItem("userImg");
        this.userName = localStorage.getItem("userName");
        this.queryHomesuspension();
        this.queryNewsNewround();
      }
    },
    // 请求铃铛消息
    queryHomesuspension() {
      axios
        .post("http://www.lvshilaile.com/pc/News/suspension", {
          user_id: this.userID
        })
        .then(res => {
          if (res) {
            if (res.code == 200) {
              this.tipArr = res.data;
            }
          }
        });
    },
    // 是否红点
    queryNewsNewround() {
      axios
        .post("http://www.lvshilaile.com/pc/News/newround", {
          user_id: this.userID
        })
        .then(res => {
          // console.log(res.data);
          if (res.data.code == 200) {
            this.isRed = true;
          } else if (res.data.code == 207) {
            this.isRed = false;
          } else {
            Message("请登录");
          }
        });
    },
    userTipMoveEnter() {
      this.userTipMove = true;
    },
    userTipMoveLeave() {
      this.userTipMove = false;
    },
    userImgMoveEnter() {
      this.userInfoMove = true;
    },
    userImgMoveLeave() {
      this.userInfoMove = false;
    },
    rightFixedMove(i) {
      this.enterIndex = i;
    },
    rightFixedLeave() {
      this.enterIndex = null;
    },
    toHome() {
      this.$router.push({
        path: "/"
      });
      document.documentElement.scrollTop = 0;
    },
    layoutNavClick(i) {
      if (i == 1) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/"
        });
      } else if (i == 2) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/"
        });
        this.$nextTick(() => {
          document.documentElement.scrollTop = 630;
        });
      } else if (i == 3) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/"
        });
        this.$nextTick(() => {
          document.documentElement.scrollTop = 1300;
        });
      } else if (i == 4) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/legalAdvice"
        });
      } else if (i == 5) {
        document.documentElement.scrollTop = 0;
        this.$store.commit("home/SET_AboutType", 5);
        this.$router.push({
          path: "/about"
        });
      }
    },
    toAboutItem(t) {
      this.$store.commit("home/SET_AboutType", t);
      console.log(this.$store.state.home.aboutType);
      this.$router.push({
        path: "/about"
      });
      document.documentElement.scrollTop = 0;
    },
    linTomyInfoCon(item) {
      document.documentElement.scrollTop = 0;
      console.log(item);
      this.$router.push({
        path: "/myInfoCon",
        query: {
          id: item.id,
          type: item.type
        }
      });
    },
    linTobussiness() {
      document.documentElement.scrollTop = 0;
      this.$router.push({
        path: "/businessInfo"
      });
    },
    linkToUserInfo() {
      document.documentElement.scrollTop = 0;
      this.$router.push({
        path: "/userInfo"
      });
    },
    linTomyInfo() {
      document.documentElement.scrollTop = 0;
      this.$router.push({
        path: "/myInfo"
      });
    },
    toLogin() {
      document.documentElement.scrollTop = 0;
      this.$router.push({
        path: "/login"
      });
    },
    linkToOrder() {
      if (this.isLogin) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/order"
        });
      } else {
        this.toLogin();
      }
    },
    linkToFreeConsult() {
      if (this.isLogin) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/freeConsult"
        });
      } else {
        this.toLogin();
      }
    },
    linkToAllonsult() {
      if (this.isLogin) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/allConsult"
        });
      } else {
        this.toLogin();
      }
    },
    toTop() {
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style scoped>
.defaut-layout {
  width: 100%;
}
/* ---------------------- Nav ------------------- */
.redBall {
  background-color: red;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  top: 18px;
  left: 48px;
}
.layoutTitle {
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2971de;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}
/* logo */
.layoutLogo {
  /* width: 123px; */
  height: 50px;
  margin-left: 50px;
  cursor: pointer;
}
/* topNav */
.layoutNav {
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.layoutNav > li {
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}
.layoutNav > li:hover {
  background-color: #4e88df;
  transition: 0.3s;
}
.layoutNavAction {
  background-color: #4e88df;
  transition: 0.3s;
}
/* topRight */
.layoutLoginBox {
  width: 175px;
  margin-right: 51px;
  display: flex;
  align-items: center;
}
/* topTip */
.layoutLoginTip {
  width: 68px;
  height: 60px;
  padding-left: 50px;
  box-sizing: border-box;
  margin-right: 23px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.layoutLoginTip > img {
  width: 18px;
  height: 20px;
}
.tipList {
  position: absolute;
  top: 55px;
  right: 0;
  width: 240px;
  padding-top: 29px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.1);
  border-radius: 5px;
}
.tipListItem {
  width: 240px;
  height: 60px;
  box-sizing: border-box;
  /* margin-bottom: 20px; */
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
}
.tipListItem:nth-child(3) {
  margin-bottom: 0px;
}
.tipListItem > p:nth-child(1) {
  text-align: left;
  font-size: 14px;
  color: #263238;
  margin-bottom: 14px !important;
  padding: 0 22px;
  box-sizing: border-box;
}
.tipListItem > p:nth-child(2) {
  text-align: left;
  font-size: 12px;
  color: #788084;
  padding: 0 22px;
  box-sizing: border-box;
}
.moreTip {
  height: 32px;
  width: 240px;
  background-color: #2971de20;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
}
.moreTip > p {
  line-height: 32px;
  font-size: 12px;
  text-align: center;
  color: #263238;
}
/* topLogin */
.layoutLoginBlock {
  font-size: 14px;
  height: 60px;
  width: 28px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.layoutLoginBlock > p {
  cursor: pointer;
}
.layoutLoginBlock > img {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.infoList {
  position: absolute;
  top: 55px;
  right: 0px;
  width: 150px;
  background-color: white;
  z-index: 500;
  /* height: 180px; */
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.1);
  border-radius: 5px 5px 0px 0px;
}
.userInfoLayout {
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 10px;
  box-sizing: border-box;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#ffffff, #ffffff);
  border-radius: 5px 5px 0px 0px;
  color: white;
  font-size: 14px;
}
.userInfoLayout > img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
}
.itemListItem {
  width: 150px;
  height: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  color: #788084;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
}
.itemListItem:hover {
  color: white;
  background-color: #2971de;
}
.itemListItem > img {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
.layoutLoginMid {
  height: 16px;
  width: 2px;
  background-color: white;
}

.layoutTopBlick {
  height: 60px;
  width: 100%;
  position: relative;
}

/* ----------------------------------- Footer ---------------------------- */
.layoutFooter {
  width: 1200px;
  height: 365px;
  margin: 0 auto 41px;
}
.layoutFooterTop {
  width: 100%;
  height: 235px;
  box-sizing: border-box;
  border-bottom: 2px solid #e1e3e6;
  display: flex;
}
.layoutFooterTopLogo {
  width: 40%;
  height: 235px;
  text-align: center;
  cursor: pointer;
}
.layoutFooterTopLogo > img {
  /* width: 336px; */
  height: 150px;
}
.layoutFooterTopList {
  width: 60%;
  height: 235px;
  padding: 0 2px;
  box-sizing: border-box;
  /* display: flex; */
  /* justify-content: space-between; */
  /* justify-content: flex-start; */
}
.layoutFooterTopListItem {
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
}
.layoutFooterTopListItemTit {
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
}
.layoutFooterTopListItem > p {
  line-height: 48px;
}
.layoutFooterTopListItemCon {
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  white-space: nowrap;
}
/* .layoutFooterTopListItemCon:nth-child(10) {
  margin-left: 83px;
} */
.layoutFooterBot {
  font-size: 14px;
  margin-top: 49px;
  line-height: 24px;
}
.layoutFooterBot > p {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* RightFix */
.layoutRightFix {
  position: fixed;
  right: 0px;
  top: 60px;
  width: 70px;
  height: 700px;
  background-color: white;
  z-index: 1000;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.1);
  /* display: none; */
}

.rightItem {
  width: 70px;
  height: 120px;
  border-bottom: 1px solid #e1e3e6;
  color: #788084;
  padding: 20px 0;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.rightItem:nth-child(1) {
  height: 100px;
  padding-top: 30px !important;
}
.rightItem:nth-child(5) {
  height: 110px;
  padding-top: 30px !important;
}
.rightItem:last-child {
  border: 0;
}
.rightItem > img {
  width: 30px;
  height: 26px;
}
.rightItem > p {
  width: 100%;
  font-size: 14px;
  white-space: nowrap;
}
.toTop {
  width: 70px;
  height: 26px;
  padding-top: 20px;
  text-align: center;
  cursor: pointer;
}
.toTop > img {
  width: 30px;
}
.hover1,
.hover2,
.hover3,
.hover4,
.hover5 {
  width: 260px;
  position: absolute;
  top: 5px;
}
.hover2 {
  right: 77px;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(130deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#ffffff, #ffffff);
  background-blend-mode: normal, normal;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.15);
  border-radius: 10px;
  line-height: 100px;
  text-align: center;
  letter-spacing: 1px;
  color: #feffff;
  font-size: 18px;
}
.hover3,
.hover4 {
  right: 85px;
  height: 100px;
}
.hover5 {
  right: 76px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
  background-color: white;
  height: 150px;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.15);
  border-radius: 10px;
}
.hover5 > img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.noLoginTip {
  background-color: white;
  width: 100%;
  height: 100%;
  line-height: 100px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.15);
}
</style>
