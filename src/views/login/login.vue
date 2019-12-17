<template>
  <div class="login">
    <div class="top">
      <img @click="toHome" src="img/layout/logoBlue.png" alt />
    </div>
    <div class="content">
      <img src="img/login/ren.png" alt />
      <div class="contentRight">
        <img v-if="!loginType" src="img/login/账号登录.png" alt />
        <img v-if="loginType" src="img/login/二维码.png" alt />
        <p>扫码登录</p>
        <div class="box">
          <div class="Rightleft">
            <img src alt />
            <p>
              扫码授权，完善信息
              <br />即可获取账号和密码
            </p>
          </div>
          <div class="RightRight">
            <!-- <div id="erweima"></div> -->
            <div v-if="loginType" class="rightRinp">
              <img src="img/login/用户.png" alt />
              <input v-model="username" placeholder="请输入用户名" type="text" />
            </div>
            <div v-if="loginType" class="rightRinp">
              <img src="img/login/密码.png" alt />
              <input v-model="userpsw" placeholder="请输入密码" type="text" />
            </div>
            <div v-if="loginType" class="checkBox">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </div>
            <div v-if="loginType" class="loginBtn">登 录</div>
            <p v-if="!loginType">扫一扫，快速登录</p>
          </div>
        </div>
      </div>
    </div>
    <div class="layoutFooterBot">
      <p>北京律狮科技有限公司，备案号 京ICP备18043352号</p>
      <p>技术支持：上海腾虫信息科技有限公司</p>
      <p>
        <img src="img/layout/ghs.png" alt="国徽" />京公网安备 11010502035663号
      </p>
    </div>
  </div>
</template>
<script>
// import WxLogin from "../../../public/js/wxLogin.js";
export default {
  data() {
    return {
      // ErObj: {}
      loginType: true,
      checked: false,
      username: "",
      userpsw: ""
    };
  },
  mounted() {
    // this.queryEr();
  },
  methods: {
    // queryEr() {
    //   this.ErObj = new WxLogin({
    //     self_redirect: true,
    //     id: "erweima",
    //     appid: "",
    //     scope: "snsapi_login",
    //     redirect_uri: "",
    //     state: "",
    //     style: "",
    //     href: ""
    //   });
    // },
    toHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 60px;
  padding-left: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: white;
}
.top > img {
  width: 122px;
  height: 40px;
  cursor: pointer;
}
.content {
  width: 100%;
  height: 530px;
  padding: 70px 180px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(82deg, #43a7f5 0%, #667bf3 100%),
    linear-gradient(#ffffff, #ffffff);
}
.content > img {
  width: 314px;
  height: 387px;
}
.contentRight {
  width: 600px;
  height: 370px;
  background-color: white;
  position: relative;
}
.contentRight > img {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 55px;
  height: 50px;
  cursor: pointer;
}
.contentRight > p {
  margin-top: 51px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #2971de;
}
.box {
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Rightleft {
  width: 250px;
  height: 300px;
  /* background-color: #667bf3; */
}
.RightRight {
  width: 350px;
  height: 300px;
  text-align: left;
  /* background-color: #43a7f5; */
}
.rightRinp {
  width: 300px;
  height: 42px;
  margin: 20px auto;
  background-color: #ffffff;
  border: solid 1px #e1e3e6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.rightRinp > img {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 12px;
  left: 20px;
}
.rightRinp > input {
  width: 300px;
  height: 42px;
  padding-left: 50px;
  line-height: 42px;
  box-sizing: border-box;
  border: 0;
}
.checkBox {
  width: 300px;
  margin: 0 auto 20px;
  box-sizing: border-box;
}
.loginBtn {
  width: 300px;
  height: 42px;
  margin: 0 auto;
  color: white;
  line-height: 42px;
  background-color: #2971de;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
}
/* bottom */
.layoutFooterBot {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  padding-top: 49px;
  line-height: 24px;
  border-top: 2px solid #e1e3e6;
}
.layoutFooterBot > p {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>