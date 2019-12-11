<template>
  <div class="allConsult">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>全面咨询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-input
      class="bottomTextarea"
      type="textarea"
      placeholder="请输入咨询内容"
      v-model="textarea"
      maxlength="200"
      show-word-limit
      resize="none"
    ></el-input>
    <div class="mobile">
      <p>联系方式（必填）</p>
      <div class="mobileRight">
        <p>¥ 50</p>
        <p>提 问</p>
      </div>
    </div>
    <div class="bottomInputBox">
      <el-input class="bottomInput" v-model="input" placeholder="请输入联系方式"></el-input>
      <div class="bottomSetFile">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style>
.allConsult .el-textarea__inner {
  height: 200px;
}
.allConsult .el-el-input__inner {
  height: 300px;
}
</style>
<style scoped>
.allConsult {
  width: 1200px;
  margin: 0 auto;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}

.mobile {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.mobile > p:nth-child(1) {
  font-size: 16px;
  color: #263238;
}
.mobileRight {
  width: 166px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mobileRight > p:nth-child(1) {
  letter-spacing: 1px;
  color: #2971de;
  font-size: 18px;
  font-weight: bold;
}
.mobileRight > p:nth-child(2) {
  width: 95px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #2971de;
  border-radius: 5px;
  font-size: 16px;
  color: white;
}
.bottomInputBox {
  text-align: left;
  margin-bottom: 120px;
}
.bottomInput {
  width: 300px;
  margin-bottom: 30px;
}
.bottomSetFile{
    width: 100%;
    text-align: left;
}
</style>