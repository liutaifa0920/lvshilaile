<template>
  <div class="legalAdvice">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>法律咨询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="listNews">
      <div class="listNewsBox">
        <div class="listNewsItem" v-for="(item,i) in 5" :key="i">
          <img class="listNewsItemLeft" src="img/home/club-2492011_960_720.jpg" alt />
          <div class="listNewsItemRight">
            <p>花数万元报班孩子仍考倒数第一，家长怒告培训班！法院这样判</p>
            <p>为了提高孩子的成绩，不少家长会选择给孩子报培训班。但报了班后，就一定有效果吗？如果适得其反，报班的钱能要回吗？</p>
            <p>2019-10-11</p>
          </div>
        </div>
        <div class="pageBox">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            :total="1000"
          ></el-pagination>
        </div>
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
.legalAdvice .btn-next,
.legalAdvice .btn-prev {
  background-color: white !important;
  color: #999999 !important;
}
.legalAdvice .el-pager li {
  background-color: white !important;
  border: 1px solid #99999950;
  border-radius: 4px;
  color: #999999 !important;
}
.legalAdvice .el-pager .active {
  background-color: #2971de !important;
  color: white !important;
}
</style>
<style scoped>
.legalAdvice {
  width: 1200px;
  margin: 0 auto;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}

/* List */
.listNews {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.listNewsBox {
  width: 100%;
  margin-bottom: 100px;
  border: 1px solid white;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.1);
}
.listNewsItem {
  /* width: 100%; */
  height: 244px;
  padding: 40px 0;
  margin: 0 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e3e6;
  display: flex;
  justify-content: left;
}
.listNewsItemLeft {
  width: 220px;
  height: 164px;
  border-radius: 6px;
  margin-right: 40px;
}
.listNewsItemRight > p {
  text-align: left;
}
.listNewsItemRight > p:nth-child(1) {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}
.listNewsItemRight > p:nth-child(2) {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
}
.listNewsItemRight > p:nth-child(3) {
  font-size: 14px;
  color: #788084;
}

/* page */
.pageBox {
  width: 100%;
  height: 38px;
  margin-top: 40px;
  margin-bottom: 46px;
}
</style>