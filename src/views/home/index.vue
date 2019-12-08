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
    <div class="homeSwipeBottom">
      <div class="homeSwipeBottomItem" v-for="(item, i) in 4" :key="i">
        <img src="img/home/club-2492011_960_720.jpg" alt />
        <p class="homeSwipeBottomItemP1">合同复审</p>
        <p class="homeSwipeBottomItemP2">合同复审</p>
      </div>
    </div>
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
    <div class="homeTeam">
      <p class="homeItemTit">Team    律师团队</p>
      <div class="homeItemTitLine"></div>

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

<style scoped>
.el-carousel {
  height: 450px;
}
.el-carousel__item,
.el-carousel__mask {
  height: 450px;
}

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
  left: 35px;
}
.swipeRight {
  right: 35px;
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
.homeTeam{
  width: 1200px;
  margin: 0 auto;
}
</style>
