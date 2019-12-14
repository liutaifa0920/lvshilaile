<template>
  <div class="order">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contentBox">
      <div class="titleList">
        <div :class="currentType == 1 ? 'isAction':''" @click="titleClick(1)">全部订单</div>
        <div :class="currentType == 2 ? 'isAction':''" @click="titleClick(2)">待支付</div>
        <div :class="currentType == 3 ? 'isAction':''" @click="titleClick(3)">进行中</div>
        <div :class="currentType == 4 ? 'isAction':''" @click="titleClick(4)">待评价</div>
        <div :class="currentType == 5 ? 'isAction':''" @click="titleClick(5)">已完成</div>
        <div :class="currentType == 6 ? 'isAction':''" @click="titleClick(6)">已取消</div>
      </div>
      <div class="tableTitle">
        <div>服务项目</div>
        <div>订单编号</div>
        <div>所选律师</div>
        <div>交易状态</div>
        <div>交易操作</div>
      </div>
      <div class="tableItem" v-for="(item, i) in 5" :key="i">
        <div class="tabItemTit">
          <p>{{"2019-10-13"}}</p>
          <img src="img/home/删除.png" alt />
        </div>
        <div class="tabItemCon">
          <div class="tabItemConItem">
            <img src="img/home/timg (2).jpeg" alt />
            <div class="tabItemConItem1">
              <p>{{"商标注册"}}</p>
              <p>¥{{"100"}}</p>
            </div>
          </div>
          <div class="tabItemConItem">{{"0183893476750"}}</div>
          <div class="tabItemConItem">{{"杜廷玉"}} 律师</div>
          <div class="tabItemConItem">
            <div v-if="tabType == 1" class="typeSmall isZ">待支付</div>
            <div v-if="tabType == 2" class="typeSmall isY">进行中</div>
            <div v-if="tabType == 3" class="typeSmall isG">已完成</div>
            <div v-if="tabType == 4" class="typeSmall isGa">已取消</div>
          </div>
          <div class="tabItemConItem">
            <div v-if="tabPaySet == 1" class="typeBig isBlue">立即支付</div>
            <div v-if="tabPaySet == 2" class="typeBig isGary">取消订单</div>
            <div v-if="tabPaySet == 3" class="typeBig isGary">申请退款</div>
          </div>
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
</template>
<script>
export default {
  data() {
    return {
      currentType: 1,
      tabType: 1,
      tabPaySet: 1
    };
  },
  mounted() {},
  methods: {
    titleClick(i) {
      this.currentType = i;
    }
  }
};
</script>
<style scoped>
.order {
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
  padding-top: 30px;
}

.titleList {
  width: 100%;
  height: 66px;
  border-bottom: solid 1px #eeeeee;
  box-sizing: border-box;
  padding: 0 40px;
  display: flex;
  justify-content: left;
}
.titleList > div {
  height: 66px;
  margin: 0 25px;
  line-height: 66px;
  box-sizing: border-box;
}
.isAction {
  color: #2971de;
  border-bottom: 2px solid #2971de;
}
.tableTitle {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding: 0 65px;
  box-sizing: border-box;
  border: solid 1px #eeeeee;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.tableItem {
  width: 100%;
  border: solid 1px #eeeeee;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.tabItemTit {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px #eeeeee;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}
.tabItemTit > img {
  width: 20px;
  height: 20px;
}
.tabItemCon {
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: left;
}
.tabItemConItem {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
}
.tabItemConItem > img {
  width: 70px;
  height: 70px;
  margin-right: 20px;
}
.tabItemConItem:nth-child(1) {
  width: 278px;
  border-right: 1px solid #eeeeee;
  color: #263238;
}
.tabItemConItem1 {
  height: 70px;
  text-align: left;
}
.tabItemConItem1 > p:nth-child(1) {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.tabItemConItem1 > p:nth-child(2) {
  font-size: 14px;
}
.tabItemConItem:nth-child(2) {
  width: 214px;
  border-right: 1px solid #eeeeee;
}
.tabItemConItem:nth-child(3) {
  width: 214px;
  border-right: 1px solid #eeeeee;
}
.tabItemConItem:nth-child(4) {
  width: 214px;
  border-right: 1px solid #eeeeee;
}
.tabItemConItem:nth-child(5) {
  width: 278px;
}
.typeSmall {
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 4px;
}
.isZ {
  background-color: #cd96f130;
  color: #cd96f1;
}
.isY {
  background-color: #ffc17430;
  color: #ffc174;
}
.isG {
  background-color: #73ddbd30;
  color: #73ddbd;
}
.isGa {
  background-color: #78808430;
  color: #788084;
}

.typeBig{
    padding: 7px 15px;
    border: 1px solid white;
	border-radius: 5px;
    box-sizing: border-box;
}
.isBlue{
    color: #2971de;
    border:1px solid #2971de;
}
.isGary{
    color: #788084;
    border:1px solid #788084;
}

/* page */
.pageBox {
  width: 100%;
  height: 38px;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>