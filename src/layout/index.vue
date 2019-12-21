<template>
  <div class="defaut-layout">
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
              <p>查看全部 ></p>
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
            <div class="itemListItem">
              <img src="img/home/PC信息.png" alt />
              <p>企业信息</p>
            </div>
            <div class="itemListItem">
              <img src="img/home/PC资料.png" alt />
              <p>我的资料</p>
            </div>
            <div class="itemListItem" @click="linTomyInfo()">
              <img src="img/home/消息.png" alt />
              <p>我的消息</p>
            </div>
            <div class="itemListItem">
              <img src="img/home/PC注册会员.png" alt />
              <p>注册会员</p>
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
        <div class="layoutFooterTopLogo">
          <img src="img/layout/logoBlue.png" alt="律狮来了" />
        </div>
        <div class="layoutFooterTopList">
          <div class="layoutFooterTopListItem">
            <p class="layoutFooterTopListItemTit">关于我们</p>
            <p class="layoutFooterTopListItemCon">了解我们</p>
            <p class="layoutFooterTopListItemCon">加入我们</p>
          </div>
          <div class="layoutFooterTopListItem">
            <p class="layoutFooterTopListItemTit">常见问题</p>
            <p class="layoutFooterTopListItemCon">新手帮助</p>
            <p class="layoutFooterTopListItemCon">支付帮助</p>
          </div>
        </div>
      </div>
      <div class="layoutFooterBot">
        <p>北京律狮科技有限公司，备案号 京ICP备18043352号</p>
        <p>技术支持：北京律狮科技有限公司</p>
        <p>
          <img src="img/layout/ghs.png" alt="国徽" />京公网安备 11010502035663号
        </p>
      </div>
    </div>
    <!-- rightFixed -->
    <div class="layoutRightFix">
      <div class="rightItem">
        <img src="img/layout/订单.png" alt />
        <p>订单</p>
      </div>
      <div class="rightItem">
        <img src="img/layout/电话.png" alt />
        <p>
          致电
          <br />咨询
        </p>
      </div>
      <div class="rightItem">
        <img src="img/layout/1免费咨询.png" alt />
        <p>
          免费
          <br />咨询
        </p>
      </div>
      <div class="rightItem">
        <img src="img/layout/消息.png" alt />
        <p>
          全面
          <br />咨询
        </p>
      </div>
      <div class="rightItem">
        <img src="img/layout/二维码.png" alt />
        <p>小程序</p>
      </div>
      <div class="toTop">
        <img src="img/layout/回到顶部.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { homesuspension } from "@/api/api";
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
      tipArr: []
    };
  },
  mounted() {
    this.queryLogin();
    this.queryHomesuspension();
  },
  methods: {
    // 查看是否登陆
    queryLogin() {
      if (this.$store.state.home.isLogin) {
        localStorage.setItem("isLogin", 1);
        this.isLogin = true;
        this.userID = localStorage.getItem("userID");
        this.userImg = localStorage.getItem("userImg");
        this.userName = localStorage.getItem("userName");
      }
      if (localStorage.getItem("isLogin") == 1) {
        this.isLogin = true;
        this.userID = localStorage.getItem("userID");
        this.userImg = localStorage.getItem("userImg");
        this.userName = localStorage.getItem("userName");
      }
    },
    // 请求铃铛消息
    queryHomesuspension() {
      let data = {
        user_id: this.userID
      };
      homesuspension(data).then(res => {
        // console.log(res.data);
        if (res.code == 200) {
          this.tipArr = res.data;
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
    toHome() {
      this.$router.push({
        path: "/"
      });
    },
    layoutNavClick(i) {
      if (i == 1) {
        this.$router.push({
          path: "/"
        });
      } else if (i == 2) {
      } else if (i == 3) {
      } else if (i == 4) {
      } else if (i == 5) {
        this.$router.push({
          path: "/about"
        });
      }
    },
    linTomyInfoCon(item) {
      console.log(item);
      this.$router.push({
        path: "/myInfoCon",
        query: {
          id: item.id,
          type: item.type
        }
      });
    },
    linTomyInfo() {
      this.$router.push({
        path: "/myInfo"
      });
    },
    toLogin() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
<style scoped>
.defaut-layout {
  width: 100%;
}
/* ---------------------- Nav ------------------- */
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
  width: 123px;
  height: 40px;
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
  height: 180px;
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
  width: 50%;
  height: 235px;
  text-align: center;
}
.layoutFooterTopLogo > img {
  width: 336px;
  height: 110px;
}
.layoutFooterTopList {
  width: 50%;
  height: 235px;
  padding: 0 172px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.layoutFooterTopListItem {
  text-align: left;
}
.layoutFooterTopListItemTit {
  font-size: 16px;
  font-weight: 600;
}
.layoutFooterTopListItem > p {
  line-height: 48px;
}
.layoutFooterTopListItemCon {
  font-size: 14px;
  cursor: pointer;
}
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
</style>
