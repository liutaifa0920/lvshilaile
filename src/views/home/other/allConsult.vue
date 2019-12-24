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
      v-model="problem"
      maxlength="200"
      show-word-limit
      resize="none"
    ></el-input>
    <div class="mobile">
      <p>联系方式（必填）</p>
      <div class="mobileRight">
        <p>¥ {{price}}</p>
        <p @click="nowPayClick">提 问</p>
      </div>
    </div>
    <div class="bottomInputBox">
      <el-input class="bottomInput" v-model="mobile" placeholder="请输入联系方式"></el-input>
      <div class="bottomSetFile">
        <el-upload
          class="upload-demo"
          drag
          :on-change="filesUpload"
          :beforeUpload="beforeAvatarUpload"
          :action="action"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload>
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
import { MoneyIndexlist } from "@/api/api";
import QRCode from "qrcode";
import axios from "axios";
import { Message } from "element-ui";
import { format } from "path";
export default {
  data() {
    return {
      action: "https://jsonplaceholder.typicode.com/posts/",
      price: "",
      problem: "",
      mobile: "",
      files: [],
      isPayFlag: true,
      order_sn: "",
      timer: null
    };
  },
  mounted() {
    this.isPayFlag = false;
    this.queryPrice();
  },
  methods: {
    queryPrice() {
      MoneyIndexlist().then(res => {
        if (res.code == 200) {
          this.price = res.data.money;
        }
      });
    },
    filesUpload(file, fileList) {
      this.files = fileList.map(e => {
        return e.raw;
      });
      console.log(this.files);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isLt2M) {
        this.$message({
          message: "上传文件大小不能超过 10MB!",
          type: "warning"
        });
      }
      return isLt2M;
    },
    nowPayClick() {
      let fd = new FormData();
      fd.append("user_id", localStorage.getItem("userID"));
      fd.append("mobile", this.mobile);
      fd.append("problem", this.problem);
      fd.append("money", this.price);
      this.files.map(e => {
        fd.append("img[]", e);
      });
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      axios
        .post("http://www.lvshilaile.com/pc/Simple/overall", fd, config)
        .then(res => {
          console.log(res);
          // if (res.code == 200) {
          //   this.isPayFlag = true;
          //   this.order_sn = res.data.order_sn;
          //   this.useqrcode(res.data.code_url);
          //   this.timer = setInterval(() => {
          //     this.queryOrderlists();
          //   }, 500);
          // }
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
            this.$router.push({
              path: "/order"
            });
          }
        });
    },
    useqrcode(url) {
      QRCode.toCanvas(this.$refs.canvas, url, function(error) {
        if (error) console.error(error);
        console.log("QRCode success!");
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
.bottomSetFile {
  width: 100%;
  text-align: left;
}
</style>