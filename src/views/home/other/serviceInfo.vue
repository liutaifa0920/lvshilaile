<template>
  <div class="serviceInfo">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>服务详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="topBox">
      <img src="img/about/联系我们底图.png" alt />
      <div class="topBoxRight">
        <div class="topBoxRightTop">
          <p>注册商标</p>
          <p>线上提交材料，为你快速注册公司</p>
        </div>
        <div class="topBoxRightjiage">
          <p>价格</p>
          <p>¥500</p>
        </div>
        <div class="topBoxRightlvshi">
          <p>服务律师</p>
          <div class="topBoxRightlvshiRight">
            <div class="topBoxRightlvshiRightItem" v-for="(item, i) in 6" :key="i">
              <img src="img/about/联系我们底图.png" alt />
              <p>杜廷玉</p>
            </div>
          </div>
        </div>
        <div class="topBoxRightlianxi">
          <p>
            <span>联系方式</span>
            <input v-model="payNum" type="text" />
          </p>
          <div class="payBtn">立即支付</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottomleft">
        <div class="bottomleftT">相关产品推荐</div>
        <div v-for="(item, i) in 6" :key="i" class="bottomleftI">合同复审</div>
      </div>
      <div class="bottomRight">
        <div class="bottomRightTop">服务详情</div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payNum: ""
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.serviceInfo {
  width: 1200px;
  margin: 0 auto;
  /* border: solid 1px #eeeeee; */
  margin-bottom: 121px;
}
.topBread {
  width: 100%;
  padding: 20px 0;
}

.topBox {
  width: 1200px;
  height: 400px;
  display: flex;
  border: solid 1px #e1e3e6;
  box-sizing: border-box;
  margin-bottom: 50px;
}
.topBox > img {
  width: 400px;
  height: 400px;
}
.topBoxRight {
  width: 800px;
  height: 400px;
}
.topBoxRightTop {
  height: 63px;
  width: 100%;
  text-align: left;
  padding-left: 35px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #e1e3e6;
}
.topBoxRightTop > p:nth-child(1) {
  line-height: 63px;
  font-size: 24px;
  font-weight: bold;
  margin-right: 30px;
}
.topBoxRightTop > p:nth-child(2) {
  line-height: 63px;
  font-size: 16px;
}
.topBoxRightjiage {
  height: 50px;
  padding: 0 35px;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
}
.topBoxRightjiage > p:nth-child(1) {
  margin-right: 50px;
  width: 70px;
  line-height: 40px;
  text-align: left;
  font-size: 16px;
  color: #263238;
}
.topBoxRightjiage > p:nth-child(2) {
  line-height: 50px;
  text-align: left;
  color: #2971de;
  font-size: 24px;
  font-weight: bold;
}
.topBoxRightlvshi {
  height: 135px;
  padding: 0 35px;
  box-sizing: border-box;
  display: flex;
}
.topBoxRightlvshi > p:nth-child(1) {
  margin-right: 30px;
  width: 70px;
  line-height: 30px;
  text-align: left;
  font-size: 16px;
  color: #263238;
}
.topBoxRightlvshiRight {
  width: 670px;
  height: 135px;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
}
.topBoxRightlvshiRight::-webkit-scrollbar {
  display: none;
}
.topBoxRightlvshiRightItem {
  width: 100px;
  height: 135px;
  margin-right: 30px;
}
.topBoxRightlvshiRightItem > img {
  width: 100px;
  height: 100px;
}
.topBoxRightlvshiRightItem > p {
  height: 30px;
  line-height: 30px;
  border: 1px solid #e1e3e6;
  border-top: 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  top: -5px;
}
.topBoxRightlianxi {
  height: 50px;
  padding: 0 35px;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.topBoxRightlianxi > p:nth-child(1) {
  margin-right: 50px;
  width: 400px;
  line-height: 40px;
  text-align: left;
  font-size: 16px;
  color: #263238;
}
.topBoxRightlianxi > p:nth-child(1) > span {
  display: inline-block;
  margin-right: 30px;
}
.topBoxRightlianxi > p:nth-child(1) > input {
  width: 201px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 1px #e1e3e6;
  padding: 0 15px;
  box-sizing: border-box;
}

.payBtn {
  width: 200px;
  height: 40px;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#2971de, #2971de);
  color: white;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

.bottom {
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
.bottomleft {
  width: 260px;
  border: solid 1px #e1e3e6;
  padding: 20px 0;
}
.bottomleftT {
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  line-height: 30px;
}
.bottomleftI {
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  text-align: left;
  line-height: 40px;
}
.bottomRight {
  width: 916px;
}
.bottomRightTop {
  width: 916px;
  height: 68px;
  border: solid 1px #e1e3e6;
  text-align: left;
  line-height: 68px;
  color: #2971de;
  font-size: 16px;
  font-weight: bold;
  padding-left: 40px;
  box-sizing: border-box;
}
</style>