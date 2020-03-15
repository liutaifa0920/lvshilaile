<template>
  <div class="freeConsult">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>免费咨询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-input
      class="bottomTextarea"
      type="textarea"
      placeholder="请输入咨询内容"
      v-model="problem"
      show-word-limit
      resize="none"
    ></el-input>
    <div class="mobile">
      <p>联系方式（必填）</p>
      <p @click="setSimpleIndex">提 问</p>
    </div>
    <div class="bottomInputBox">
      <el-input class="bottomInput" v-model="mobile" placeholder="请输入联系方式"></el-input>
    </div>
  </div>
</template>
<script>
import { SimpleIndex } from "@/api/api";
import { Message } from "element-ui";
export default {
  data() {
    return {
      problem: "",
      mobile: ""
    };
  },
  mounted() {},
  methods: {
    setSimpleIndex() {
      let data = {
        user_id: localStorage.getItem("userID"),
        mobile: this.mobile,
        problem: this.problem
      };
      SimpleIndex(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          Message({
            type: "success",
            message: res.msg
          });
          this.$router.push({
            path: "/consultList",
            query: {
              type: 1
            }
          });
        }
      });
    }
  }
};
</script>
<style>
.freeConsult .el-textarea__inner {
  height: 200px;
}
.freeConsult .el-el-input__inner {
  height: 300px;
}
</style>
<style scoped>
.freeConsult {
  width: 1200px;
  margin: 0 auto;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}
.bottomTextarea {
  height: 200px;
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
.mobile > p:nth-child(2) {
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
  margin-bottom: 432px;
}
.bottomInput {
  width: 300px;
}
</style>