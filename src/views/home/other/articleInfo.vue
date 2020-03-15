<template>
  <div class="articleInfo">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
        <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="articleInfoCon">
      <p class="articleInfoConTit">{{infoList.article.title}}</p>
      <!-- <div class="articleInfoConFrom">
        <div class="articleInfoConLeft">{{infoList.article.abstract}}</div>
        <div class="articleInfoConB"></div>
        <div class="articleInfoConRight">
          <img src="img/home/眼睛.png" />
          <p>{{infoList.article.browse_num}}</p>
        </div>
      </div>-->
      <div class="Titline"></div>
      <div class="artCon" v-html="infoList.article.content"></div>
      <div class="beforeNextBtn">
        <div
          v-show="infoList.front"
          @click="toArticleClick(infoList.front.id)"
        >上一篇 | {{infoList.front.title}}</div>
        <div
          v-show="infoList.after"
          @click="toArticleClick(infoList.after.id)"
        >{{infoList.after.title}} | 下一篇</div>
      </div>
    </div>
  </div>
</template>
<script>
import { JournalismArticleview } from "@/api/api";
export default {
  data() {
    return {
      id: "",
      infoList: {
        article: {
          id: 2,
          title: "区块链发展方向",
          abstract: "区块链发展方向区块链发展方向区块链发展方向区块链发展方向",
          add_time: "2019-12-06 09:20:27",
          content: "<p>1231231232213213</p>",
          browse_num: 117
        },
        front: {
          id: 1,
          title: "年假通知2020"
        },
        after: {
          id: 3,
          title: "垃圾分类管理"
        }
      }
    };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    this.queryParam();
  },
  methods: {
    queryParam() {
      console.log(this.$route.query.id);
      this.id = this.$route.query.id;
      this.queryListInfo();
    },
    queryListInfo() {
      let data = {
        id: this.id
      };
      JournalismArticleview(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.infoList = res.data;
        }
      });
    },
    toArticleClick(id) {
      this.id = id;
      this.queryListInfo();
    }
  }
};
</script>
<style scoped>
.articleInfo {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 121px;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}

.articleInfoCon {
  padding: 50px 100px;
  border: solid 1px #eeeeee;
  width: 100%;
  box-sizing: border-box;
}
.articleInfoConTit {
  text-align: center;
  color: #263238;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 29px;
}
.articleInfoConFrom {
  color: #788084;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.articleInfoConB {
  width: 2px;
  height: 15px;
  background-color: #dee0e4;
  margin: 0 20px;
}
.articleInfoConRight {
  display: flex;
}
.articleInfoConRight > img {
  width: 16px;
  margin-right: 2px;
}
.Titline {
  width: 1000px;
  height: 1px;
  background-color: #dee0e4;
  border-radius: 1px;
  margin-top: 20px;
  margin-bottom: 40px;
}
.artCon {
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  line-height: 30px;
  letter-spacing: 1px;
  color: #263238;
  text-align: left;
  margin-bottom: 69px;
}
.artCon img {
  width: 800px !important;
}
.beforeNextBtn {
  width: 100%;
  color: #2971de;
  font-size: 14px;
  margin-bottom: 93px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.beforeNextBtn > div {
  cursor: pointer;
}
</style>