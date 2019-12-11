<template>
  <div class="userInfo">
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
          <p class="contentLeftBItem">
            <img src="img/home/PC信息.png" /> 企业信息
          </p>
          <p class="contentLeftBItem isAction">
            <img src="img/home/PC资料 (1).png" /> 我的资料
          </p>
          <p class="contentLeftBItem">
            <img src="img/home/消息.png" /> 我的消息
          </p>
          <p class="contentLeftBItem">
            <img src="img/home/PC注册会员.png" /> 注册会员
          </p>
        </div>
      </div>
      <div class="contentRight">
        <el-form label-position="right" label-width="120px">
          <el-form-item label="姓名">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="mobile"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="IDCardNum"></el-input>
          </el-form-item>
          <el-form-item label="学历">
            <el-input v-model="schooling"></el-input>
          </el-form-item>
          <el-form-item label="通讯地址">
            <el-input v-model="adress"></el-input>
          </el-form-item>
        </el-form>
        <div class="setBtn">保存</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      mobile: "",
      IDCardNum: "",
      schooling: "",
      adress: ""
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>
.userInfo .el-form-item {
  width: 500px !important;
  margin: 0 auto 20px;
}
.userInfo .el-form-item__content {
  width: 500px !important;
}
.userInfo .el-form-item__label {
  padding-right: 30px !important;
}
.userInfo .el-input {
  width: 500px !important;
}
.userInfo .el-input__inner {
  width: 500px !important;
}
</style>
<style scoped>
.userInfo {
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
  height: 502px;
  background-color: #ffffff;
  border: solid 1px #e1e3e6;
  padding-top: 40px;
  box-sizing: border-box;
  text-align: center;
}
.setBtn {
  width: 95px;
  height: 30px;
  line-height: 30px;
  color: white;
  background-color: #2971de;
  border-radius: 5px;
  margin: 40px auto 0;
}
</style>