<template>
  <div class="setBusinessInfo">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentBox">
      <el-form label-position="right" label-width="120px">
        <el-form-item class="titleBold" label="基本信息">
          <p style="text-align: left;">完成度 {{"20%"}}</p>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="mobile"></el-input>
        </el-form-item>
        <el-form-item label="法人姓名">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="信用代码">
          <el-input v-model="xinyongdaima"></el-input>
        </el-form-item>
        <el-form-item label="账号ID">
          <el-input v-model="ID"></el-input>
        </el-form-item>
      </el-form>
      <div class="line"></div>
      <el-form label-position="right" label-width="120px">
        <el-form-item class="titleBold" label="企业信息">
          <p style="text-align: left;">完成度 {{"20%"}}</p>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="comName"></el-input>
        </el-form-item>
        <el-form-item label="所属行业">
          <el-input v-model="hangye"></el-input>
        </el-form-item>
        <el-form-item label="企业规模">
          <el-input v-model="guimo"></el-input>
        </el-form-item>
        <el-form-item label="企业地址">
          <el-input v-model="adress"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="youbian"></el-input>
        </el-form-item>
        <el-form-item label="是否上市">
          <el-radio v-model="shangshi" :label="1">是</el-radio>
          <el-radio v-model="shangshi" :label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="上市代码">
          <el-input v-model="shangshidaima"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: "",
      name: "",
      xinyongdaima: "",
      ID: "",
      comName: "",
      hangye: "",
      guimo: "",
      adress: "",
      youbian: "",
      shangshi: "",
      shangshidaima: ""
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>
.titleBold .el-form-item__label {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
}
.setBusinessInfo .el-form-item {
  width: 300px !important;
  margin: 0 auto 20px;
}
.setBusinessInfo .el-form-item__content {
  width: 300px !important;
  text-align: left;
}
.setBusinessInfo .el-form-item__label {
  padding-right: 30px !important;
}
.setBusinessInfo .el-input {
  width: 300px !important;
}
.setBusinessInfo .el-input__inner {
  width: 300px !important;
}
</style>
<style scoped>
.setBusinessInfo {
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
  padding: 50px 40px;
  border: solid 1px #eeeeee;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin: 32px 0;
}
</style>