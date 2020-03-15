<template>
  <div class="consultList">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>咨询案例</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="consultListTit">
      <div :class="currentType == 1 ? 'isAction':''" @click="titleClick(1)">免费咨询</div>
      <div :class="currentType == 2 ? 'isAction':''" @click="titleClick(2)">全面咨询</div>
    </div>

    <div class="contentBox">
      <div class="content" v-for="(item, i) in infoList" :key="i">
        <div class="contentT">
          <img :src="item.picture" alt />
          <div class="contentTR">
            <p>{{item.name}}</p>
            <p>{{item.time}}</p>
          </div>
        </div>
        <div class="contentQText">{{item.problem}}</div>
        <div class="contentQImg">
          <img
            v-show="currentType == 2 && item.url"
            v-for="(items, index) in item.url"
            :key="index"
            src="img/home/timg (2).jpeg"
            alt
          />
        </div>
        <div class="contentB">
          <img :src="item.image" alt />
          <div class="contentBR">
            <p>{{item.definition}} 律师</p>
            <p>{{item.replytime}}</p>
          </div>
        </div>
        <div class="contentBQText">{{item.reply}}</div>
        <div class="line"></div>
      </div>
      <div v-show="allTotal != 0" class="pageBox">
        <el-pagination
          background
          :current-page="currentPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          prev-text="上一页"
          next-text="下一页"
          :page-size="currentSize"
          :total="allTotal"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { CasesimpleSimpleindex } from "@/api/api";
export default {
  data() {
    return {
      currentType: 1,
      currentPage: 1,
      currentSize: 10,
      allTotal: 0,
      infoList: []
    };
  },
  mounted() {
    this.queryParam();
  },
  methods: {
    queryParam() {
      console.log(this.$route.query.type);
      this.currentType = this.$route.query.type;
      this.queryListInfo();
    },
    queryListInfo() {
      let data = {
        limit: this.currentSize,
        page: this.currentPage,
        datastatus: this.currentType
      };
      CasesimpleSimpleindex(data).then(res => {
        console.log(res.data);
        if (res.code == 200 && this.currentType == 1) {
          this.infoList = res.data.data;
          this.allTotal = res.data.total;
        }
        if (res.code == 200 && this.currentType == 2) {
          this.infoList = res.data;
          this.allTotal = res.data.length;
        }
      });
    },
    handleCurrentChange(val) {
      console.log(val);
      this.currentPage = val;
      this.queryListInfo();
    },
    titleClick(i) {
      this.currentType = i;
      this.queryListInfo();
    }
  }
};
</script>
<style>
.consultList .btn-next,
.consultList .btn-prev {
  background-color: white !important;
  color: #999999 !important;
}
.consultList .el-pager li {
  background-color: white !important;
  border: 1px solid #99999950;
  border-radius: 4px;
  color: #999999 !important;
}
.consultList .el-pager .active {
  background-color: #2971de !important;
  color: white !important;
}
</style>
<style scoped>
.consultList {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 231px;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}

.consultListTit {
  width: 100%;
  height: 66px;
  border: solid 1px #eeeeee;
  border-bottom: 0;
  box-sizing: border-box;
  padding: 0 40px;
  display: flex;
  justify-content: left;
}
.consultListTit > div {
  height: 66px;
  margin: 0 25px;
  line-height: 66px;
  box-sizing: border-box;
  cursor: pointer;
}
.isAction {
  color: #2971de;
  border-bottom: 2px solid #2971de;
}

.contentBox {
  padding-top: 50px;
  width: 100%;
  border: solid 1px #eeeeee;
}
.content {
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
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
.line {
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin: 32px 0;
}
/* page */
.pageBox {
  width: 100%;
  height: 38px;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>