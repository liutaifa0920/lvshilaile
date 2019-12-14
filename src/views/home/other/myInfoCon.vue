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
        <img src="img/home/timg (2).jpeg" alt />
        <div class="contentTR">
          <p>{{"李四"}}</p>
          <p>{{"2019-10-11 12:30:29"}}</p>
        </div>
      </div>
      <div class="contentQText">请问如何注册公司？需要什么材料？有哪些流程？</div>
      <div class="contentQImg">
        <img v-for="(item, i) in 3" :key="i" src="img/home/timg (2).jpeg" alt />
      </div>
      <div class="contentB">
        <img src="img/home/timg (2).jpeg" alt />
        <div class="contentBR">
          <p>{{"杜廷玉"}} 律师</p>
          <p>{{"2019-10-11 12:30:29"}}</p>
        </div>
      </div>
      <div class="contentBQText">
        注册公司准备材料如下所示：
        1、全体投资人的身份证。2、法人身份证、监事身份证(或经理)。3、公司章程、股东决定或股东会决议书。4、注册地址的租赁协议、房产证复印件并由产权所有人盖章。5、各类申请表，比如名称申请表、公司设立登记申请书等等。6、经营范围。7、其他如果你的经营范围内涉及到前置许可的话，还可能会提供另外的材料或证明。
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