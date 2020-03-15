<template>
  <div class="setBusinessInfo">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentBox">
      <div class="saveBtn" @click="saveClick">保 存</div>
      <el-form label-position="right" label-width="120px">
        <el-form-item class="titleBold" label="基本信息">
          <p v-if="currentType == 2" style="text-align: left;">完成度 {{wancheng1}}</p>
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
        <!-- <el-form-item label="账号ID">
          <el-input v-model="ID"></el-input>
        </el-form-item>-->
      </el-form>
      <div class="line"></div>
      <el-form label-position="right" label-width="120px">
        <el-form-item class="titleBold" label="企业信息">
          <p v-if="currentType == 2" style="text-align: left;">完成度 {{wancheng2}}</p>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="comName"></el-input>
        </el-form-item>
        <el-form-item label="营业执照">
          <img v-if="currentType == 2" style="width:50px;" :src="imgFile" alt />
          <input type="file" accept="image/*" @change="imgUploadChange" />
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
          <el-radio v-model="shangshi" label="1">是</el-radio>
          <el-radio v-model="shangshi" label="2">否</el-radio>
        </el-form-item>
        <el-form-item v-if="currentType == 1" label="上市代码">
          <el-input v-model="shangshidaima"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Message } from "element-ui";
import { EnterpriseAddlist, EnterpriseSelEnterprise } from "@/api/api";
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      wancheng1: "",
      wancheng2: "",
      currentType: 1,
      mobile: "",
      name: "",
      xinyongdaima: "",
      ID: "",
      comName: "",
      imgFile: null,
      hangye: "",
      guimo: "",
      adress: "",
      youbian: "",
      shangshi: "",
      shangshidaima: ""
    };
  },
  mounted() {
    this.queryType();
  },
  methods: {
    queryType() {
      this.currentType = this.$route.query.type;
      this.id = this.$route.query.id;
      console.log(this.id);
      if (this.currentType == 2) {
        this.querySettingInfo();
      }
    },
    imgUploadChange(e) {
      this.imgFile = e.target.files[0];
    },
    saveClick() {
      if (this.currentType == 1) {
        this.toAddInfo();
      } else {
        this.toSettingInfo();
      }
    },
    toAddInfo() {
      let that = this;
      let fd = new FormData();
      fd.append("user_id", localStorage.getItem("userID"));
      fd.append("phone", this.mobile);
      fd.append("legal_person", this.name);
      fd.append("credit_code", this.xinyongdaima);
      fd.append("credit_id", this.ID);
      fd.append("business_name", this.comName);
      fd.append("image", this.imgFile);
      fd.append("industry", this.hangye);
      fd.append("enterprise_size", this.guimo);
      fd.append("business_address", this.adress);
      fd.append("postal_code", this.youbian);
      fd.append("is_list", this.shangshi);
      fd.append("listing_code", this.shangshidaima);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      axios
        .post("http://www.lvshilaile.com/pc/Enterprise/addlist", fd, config)
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            Message({
              type: "success",
              message: res.data.msg
            });
            that.$router.go(-1);
          } else {
            Message({
              type: "warning",
              message: res.data.msg
            });
          }
        });
    },
    querySettingInfo() {
      let data = {
        id: this.id
      };
      EnterpriseSelEnterprise(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.wancheng1 = res.data.num;
          this.wancheng2 = res.data.Proportion;
          this.mobile = res.data.phone;
          this.name = res.data.legal_person;
          this.xinyongdaima = res.data.credit_code;
          this.ID = res.data.credit_id;
          this.comName = res.data.business_name;
          this.imgFile = res.data.image;
          this.hangye = res.data.industry;
          this.guimo = res.data.enterprise_size;
          this.adress = res.data.business_address;
          this.youbian = res.data.postal_code;
          this.shangshi = res.data.is_list;
          this.shangshidaim = res.data.is_list;
        }
      });
    },
    toSettingInfo() {
      let that = this;
      let fd = new FormData();
      fd.append("id", this.id);
      fd.append("user_id", localStorage.getItem("userID"));
      fd.append("phone", this.mobile);
      fd.append("legal_person", this.name);
      fd.append("credit_code", this.xinyongdaima);
      fd.append("credit_id", this.ID);
      fd.append("business_name", this.comName);
      fd.append("image", this.imgFile);
      fd.append("industry", this.hangye);
      fd.append("enterprise_size", this.guimo);
      fd.append("business_address", this.adress);
      fd.append("postal_code", this.youbian);
      fd.append("is_list", this.shangshi);
      fd.append("listing_code", this.shangshidaima);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      axios
        .post(
          "http://www.lvshilaile.com/pc/Enterprise/upEnterprise",
          fd,
          config
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            Message({
              type: "success",
              message: res.data.msg
            });
            that.$router.go(-1);
          } else {
            Message({
              type: "warning",
              message: res.data.msg
            });
          }
        });
    }
  }
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
  position: relative;
}
.saveBtn {
  position: absolute;
  top: 30px;
  right: 40px;
  width: 95px;
  height: 30px;
  background-color: #2971de;
  border-radius: 5px;
  color: white;
  line-height: 30px;
  text-align: center;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin: 32px 0;
}
</style>