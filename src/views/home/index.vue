<template>
  <div class="home">
    <!-- swipe -->
    <div class="homeSwipe">
      <el-carousel ref="carousel" indicator-position="none" arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
          <img class="homeSwipeImg" src="img/home/1512719105857205.png" alt="swipe" />
        </el-carousel-item>
      </el-carousel>
      <div class="homwSwipeBtn swipeLeft" @click="swipePrev">
        <img src="img/home/向左箭头.png" alt="上一张" />
      </div>
      <div class="homwSwipeBtn swipeRight" @click="swipeNext">
        <img src="img/home/向右箭头.png" alt="下一张" />
      </div>
    </div>
    <!-- SwipeBottom -->
    <div class="homeSwipeBottom">
      <div class="homeSwipeBottomItem" v-for="(item, i) in 4" :key="i">
        <img src="img/home/club-2492011_960_720.jpg" alt />
        <p class="homeSwipeBottomItemP1">合同复审</p>
        <p class="homeSwipeBottomItemP2">合同复审</p>
      </div>
    </div>
    <!-- Service -->
    <div class="homeService">
      <p class="homeItemTit">Service 服务领域</p>
      <div class="homeItemTitLine"></div>
      <div class="homeUnit">
        <div class="homeUnitItem">
          <div class="homeUnitItemLeftT">
            <img src="img/home/工商财税.png" alt />
            <p>工商财税</p>
            <div class="homeUnitItemCon">
              <div class="homeUnitItemConList" v-for="(item, i) in 3" :key="i">
                <span>商标注册</span>
                <span>商业特许经营备案</span>
              </div>
            </div>
          </div>
          <div class="homeUnitItemLeftB">
            <img src="img/home/2经营许可.png" alt />
            <p>经营许可</p>
            <div class="homeUnitItemCon">
              <div class="homeUnitItemConList" v-for="(item, i) in 3" :key="i">
                <span>商标注册</span>
                <span>商业特许经营备案</span>
              </div>
            </div>
          </div>
        </div>
        <div class="homeUnitItem">
          <img src="img/home/知识产权.png" alt />
          <p>知识产权</p>
          <div class="homeUnitItemCon">
            <div class="homeUnitItemConList" v-for="(item, i) in 3" :key="i">
              <span>商标注册</span>
              <span>商业特许经营备案</span>
            </div>
          </div>
        </div>
        <div class="homeUnitItem">
          <div class="homeUnitItemRigT">
            <img src="img/home/2企业法务.png" alt />
            <p>企业法务</p>
            <div class="homeUnitItemCon">
              <div class="homeUnitItemConList" v-for="(item, i) in 3" :key="i">
                <span>商标注册</span>
                <span>商业特许经营备案</span>
              </div>
            </div>
          </div>
          <div class="homeUnitItemRigB">
            <img src="img/home/家庭法务.png" alt />
            <p>家庭法务</p>
            <div class="homeUnitItemCon">
              <div class="homeUnitItemConList" v-for="(item, i) in 3" :key="i">
                <span>商标注册</span>
                <span>商业特许经营备案</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- team -->
    <div class="homeTeam">
      <p class="homeItemTit">Team 律师团队</p>
      <div class="homeItemTitLine"></div>

      <el-carousel ref="carouselTeam" indicator-position="outside" arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="homeTeamBox">
            <div class="homeTeamBoxItem" v-for="(item,i) in 3" :key="i">
              <img src="img/home/1512719105857205.png" alt />
              <p class="homeTeamBoxItemCName">{{"杜廷玉"}} {{"律师"}}</p>
              <div class="homeTeamBoxItemC1">
                <p>毕业院校</p>
                <p>北京大学法学院</p>
              </div>
              <div class="homeTeamBoxItemC2">
                <p>擅长领域</p>
                <p>婚姻家庭纠纷、遗嘱继承、合同纠纷、交通事故等。</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- Consultation  -->
    <div class="homeConsultation">
      <p class="homeItemTit">Consultation 咨询案例</p>
      <div class="homeItemTitLine"></div>
      <div class="homeConsultationBox">
        <div class="homeConsultationItem">
          <div class="homeConsultationItemT Blue">
            <p>免费咨询</p>
            <img class="homeConsultationItemTMore" src="img/home/更多.png" alt />
            <img class="homeConsultationItemTB" src="img/home/1免费咨询.png" alt />
          </div>
          <div class="homeConsultationItemC">
            <p class="homeConsultationItemCQ">您好，我想注册公司，请问需要准备什么资料？具体都有哪些流程？有没有需要特别注意的地方？</p>
            <p class="homeConsultationItemCR">
              <img src="img/home/律师费计算.png" />
              注册公司准备材料如下所示：
              1、全体投资人的身份证
              2、法人身份证、监事身份证(或经理)
              3、注册地址的租赁协议、房产证复印件并由产权所有人盖章...
            </p>
          </div>
        </div>
        <div class="homeConsultationItem">
          <div class="homeConsultationItemT Red">
            <p>全面咨询</p>
            <img class="homeConsultationItemTMore" src="img/home/更多.png" alt />
            <img class="homeConsultationItemTB" src="img/home/club-2492011_960_720.jpg" alt />
          </div>
          <div class="homeConsultationItemC">
            <p class="homeConsultationItemCQ">您好，我想注册公司，请问需要准备什么资料？具体都有哪些流程？有没有需要特别注意的地方？</p>
            <p class="homeConsultationItemCR">
              <img src="img/home/律师费计算.png" />
              注册公司准备材料如下所示：
              1、全体投资人的身份证
              2、法人身份证、监事身份证(或经理)
              3、注册地址的租赁协议、房产证复印件并由产权所有人盖章...
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="homeNews">
      <p class="homeItemTit">Consultation 咨询案例</p>
      <div class="homeItemTitLine"></div>
      <div class="homeNewsBox">
        <div class="homeNewsItem" v-for="(item,i) in 3" :key="i">
          <img class="homeNewsItemLeft" src="img/home/club-2492011_960_720.jpg" alt />
          <div class="homeNewsItemRight">
            <p>花数万元报班孩子仍考倒数第一，家长怒告培训班！法院这样判</p>
            <p>为了提高孩子的成绩，不少家长会选择给孩子报培训班。但报了班后，就一定有效果吗？如果适得其反，报班的钱能要回吗？</p>
            <p>2019-10-11</p>
          </div>
        </div>
        <div class="homeNewsMoreBtn">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 轮播上下页
    swipePrev() {
      this.$refs.carousel.prev();
    },
    swipeNext() {
      this.$refs.carousel.next();
    }
  }
};
</script>
<style>
.homeSwipe .el-carousel {
  height: 450px;
}
.homeSwipe .el-carousel__item,
.homeSwipe .el-carousel__mask {
  height: 450px;
}
.homeTeam .el-carousel {
  height: 500px;
  position: relative;
}
.homeTeam .el-carousel__item,
.homeTeam .el-carousel__mask {
  height: 470px;
}
.homeTeam .el-carousel__container {
  height: 470px !important;
}
.homeTeam .el-carousel__indicators--outside {
  position: absolute !important;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.homeTeam .el-carousel__indicators--outside {
  position: absolute !important;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.homeTeam .el-carousel__button {
  background-color: #2971de;
}
</style>

<style scoped>
/* swipe */
.homeSwipe {
  position: relative;
}
.homeSwipeImg {
  width: 100%;
  height: 450px;
}
.homwSwipeBtn {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #8f8f8f90;
  z-index: 500;
  position: absolute;
  top: 204px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swipeLeft {
  left: 100px;
}
.swipeRight {
  right: 100px;
}
.homwSwipeBtn > img {
  width: 16px;
  height: 30px;
  opacity: 1;
}
/* homeSwipeBottom */
.homeSwipeBottom {
  width: 1200px;
  height: 202px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.homeSwipeBottomItem {
  width: 277px;
  height: 151px;
  position: relative;
  top: -68px;
  z-index: 500;
  cursor: pointer;
}
.homeSwipeBottomItem > img {
  width: 277px;
  height: 151px;
}
.homeSwipeBottomItem > p {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.homeSwipeBottomItemP1 {
  height: 45px;
  line-height: 45px;
  text-align: left;
  background-color: #26323880;
  font-size: 16px;
  color: white;
  padding: 0 19px;
  box-sizing: border-box;
  opacity: 1;
  transition: 0.4s;
}
.homeSwipeBottomItemP2 {
  height: 151px;
  text-align: center;
  line-height: 151px;
  font-size: 24px;
  transition: 0.4s;
  text-align: center;
  background-color: #26323880;
  color: white;
  padding: 0 19px;
  box-sizing: border-box;
  opacity: 0;
  transition: 0.4s;
}
.homeSwipeBottomItem:hover > .homeSwipeBottomItemP1 {
  opacity: 0;
  transition: 0.4s;
}
.homeSwipeBottomItem:hover > .homeSwipeBottomItemP2 {
  opacity: 1;
  transition: 0.4s;
}

/* service */
.homeService {
  width: 1200px;
  margin: 0 auto 119px;
}
.homeItemTit {
  font-size: 30px;
  font-weight: 600;
  color: #263238;
  margin-bottom: 29px;
}
.homeItemTitLine {
  width: 100px;
  height: 4px;
  margin: 0 auto 50px;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#ff6c6c, #ff6c6c);
}

/* unit */
.homeUnit {
  width: 1200px;
  height: 425px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.homeUnitItem {
  width: 390px;
  height: 425px;
}
.homeUnitItemLeftT,
.homeUnitItemLeftB,
.homeUnitItemRigT,
.homeUnitItemRigB,
.homeUnitItem:nth-child(2) {
  background-color: #2971de10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homeUnitItemLeftT,
.homeUnitItemRigB {
  width: 100%;
  height: 260px;
  position: relative;
}
.homeUnitItemLeftB,
.homeUnitItemRigT {
  width: 100%;
  height: 150px;
  position: relative;
}
.homeUnitItemLeftT,
.homeUnitItemRigT {
  margin-bottom: 15px;
}
.homeUnitItem:nth-child(2) {
  margin: 0 15px;
  position: relative;
}
.homeUnitItem:nth-child(2) > img {
  width: 200px;
  height: 184px;
}
.homeUnitItemLeftT > img,
.homeUnitItemRigB > img {
  width: 110px;
}
.homeUnitItemLeftB > img,
.homeUnitItemRigT > img {
  width: 60px;
}
.homeUnitItem:nth-child(2) > p {
  position: absolute;
  top: 268px;
  left: 271px;
  font-weight: bold;
}
.homeUnitItemLeftT > p {
  position: absolute;
  top: 157px;
  left: 233px;
  font-weight: bold;
}
.homeUnitItemLeftB > p {
  position: absolute;
  top: 87px;
  left: 239px;
  font-weight: bold;
}
.homeUnitItemRigT > p {
  position: absolute;
  top: 87px;
  left: 239px;
  font-weight: bold;
}
.homeUnitItemRigB > p {
  position: absolute;
  top: 145px;
  left: 230px;
  font-weight: bold;
}

.homeUnitItemCon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 42px;
  box-sizing: border-box;
  color: white;
  background-color: #2971de;
  opacity: 0;
  z-index: 500;
  transition: 0.4s;
  cursor: pointer;
}
.homeUnitItemCon:hover {
  opacity: 1;
  transition: 0.4s;
  cursor: pointer;
}
.homeUnitItemConList {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Team */
.homeTeam {
  width: 1200px;
  height: 691px;
  margin: 0 auto;
  background: url(~@/../public/img/home/团队底图.png) no-repeat;
  background-size: 100% 100%;
}
.homeTeamBox {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-around;
}
.homeTeamBoxItem {
  width: 360px;
  height: 450px;
  padding: 40px 30px;
  box-sizing: border-box;
  text-align: center;
  background-color: #ffffff00;
  transition: 0.4s;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0);
  cursor: pointer;
}
.homeTeamBoxItem > img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.homeTeamBoxItemCName {
  text-align: center;
  margin: 40px 0;
  font-size: 24px;
  font-weight: bold;
}
.homeTeamBoxItemC1,
.homeTeamBoxItemC2 {
  width: 100%;
  display: flex;
  min-height: 48px;
  justify-content: left;
}
.homeTeamBoxItemC1 > p:nth-child(1) {
  margin-right: 34px;
  white-space: nowrap;
}
.homeTeamBoxItemC2 > p:nth-child(1) {
  margin-right: 34px;
  white-space: nowrap;
}
.homeTeamBoxItemC1 > p:nth-child(2) {
  text-align: left;
}
.homeTeamBoxItemC2 > p:nth-child(2) {
  text-align: left;
}
.homeTeamBoxItem:hover {
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.15);
  transition: 0.4s;
}

/* Consultation */
.homeConsultation {
  width: 1200px;
  margin: 0 auto;
}
.homeConsultationBox {
  width: 100%;
  height: 341px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
}
.homeConsultationItem {
  width: 560px;
  height: 341px;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0);
  transition: 0.4s;
}
.homeConsultationItem:hover {
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.1);
  transition: 0.4s;
}
.Blue {
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#ffffff, #ffffff);
}
.Red {
  background-image: linear-gradient(82deg, #fe835f 0%, #ff4c51 100%),
    linear-gradient(#ffffff, #ffffff);
}
.homeConsultationItemT {
  width: 100%;
  height: 61px;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: white;
  font-size: 18px;
  overflow: hidden;
}
.homeConsultationItemTMore {
  width: 24px;
  cursor: pointer;
}
.homeConsultationItemTB {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
  width: 60px;
  height: 60px;
}
.homeConsultationItemC {
  width: 100%;
  height: 280px;
  padding: 39px 30px 48px;
  box-sizing: border-box;
}
.homeConsultationItemCQ {
  text-align: left;
  margin-bottom: 34px;
}
.homeConsultationItemCR {
  padding-left: 37px;
  box-sizing: border-box;
  position: relative;
  text-align: left;
}
.homeConsultationItemCR > img {
  width: 22px;
  position: absolute;
  top: 0;
  left: 0;
}

/* News */
.homeNews {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.homeNewsBox {
  width: 100%;
  height: 860px;
  margin-bottom: 100px;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.1);
}
.homeNewsItem {
  width: 100%;
  height: 244px;
  padding: 40px 0;
  margin: 0 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e3e6;
  display: flex;
  justify-content: left;
}
.homeNewsItemLeft {
  width: 220px;
  height: 164px;
  border-radius: 6px;
  margin-right: 40px;
}
.homeNewsItemRight > p {
  text-align: left;
}
.homeNewsItemRight > p:nth-child(1) {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}
.homeNewsItemRight > p:nth-child(2) {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
}
.homeNewsItemRight > p:nth-child(3) {
  font-size: 14px;
  color: #788084;
}
.homeNewsMoreBtn {
  margin: 40px auto 37px;
  width: 200px;
  height: 48px;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#2971de, #2971de);
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  line-height: 48px;
}
</style>
