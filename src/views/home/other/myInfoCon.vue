<template>
  <div class="myInfoCon">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>消息详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="contentT">
        <img :src="infoList.picture" alt />
        <div class="contentTR">
          <p>{{infoList.nickName}}</p>
          <p>{{infoList.time}}</p>
        </div>
      </div>
      <div class="contentQText">{{infoList.problem}}</div>
      <div class="contentQImg">
        <img v-show="infoList.url" v-for="(item, i) in infoList.url" :key="i" :src="item" alt />
      </div>
      <div v-show="infoList.reply" class="contentB">
        <img :src="infoList.image" alt />
        <div class="contentBR">
          <p>{{infoList.definition}} 律师</p>
          <p>{{infoList.replytime}}</p>
        </div>
      </div>
      <div v-show="infoList.reply" class="contentBQText">{{infoList.reply}}</div>
    </div>
  </div>
</template>
<script>
import { NewsDetails } from "@/api/api";
export default {
  data() {
    return {
      id: "",
      type: "",
      infoList: {}
    };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    this.queryParam();
  },
  methods: {
    queryParam() {
      this.id = this.$route.query.id;
      this.type = this.$route.query.type;
      this.queryListInfo();
    },
    queryListInfo() {
      let data = {
        id: this.id,
        type: this.type
      };
      NewsDetails(data).then(res => {
        console.log(res.data);
        if (res.code == 200) {
          this.infoList = res.data;
        }
      });
    }
  }
};
</script>
<style scoped>
.myInfoCon {
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
  padding: 55px 40px;
  box-sizing: border-box;
  border: solid 1px #eeeeee;
}
.contentT {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
}
.contentT > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.contentTR {
  text-align: left;
}
.contentTR > p:nth-child(1) {
  margin-bottom: 10px;
}
.contentTR > p:nth-child(2) {
  font-size: 12px;
  color: #788084;
}
.contentQText {
  padding-left: 70px;
  box-sizing: border-box;
  text-align: left;
  font-size: 16px;
  margin-bottom: 20px;
}
.contentQImg {
  padding-left: 70px;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 30px;
}
.contentQImg > img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 20px;
}

.contentB {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 70px;
  margin-bottom: 20px;
}
.contentB > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.contentBR {
  text-align: left;
}
.contentBR > p:nth-child(1) {
  margin-bottom: 10px;
}
.contentBR > p:nth-child(2) {
  font-size: 12px;
  color: #788084;
}
.contentQText {
  padding-left: 70px;
  box-sizing: border-box;
  text-align: left;
  font-size: 16px;
  margin-bottom: 20px;
}
.contentBQText {
  padding-left: 140px;
  box-sizing: border-box;
  text-align: left;
}
</style>