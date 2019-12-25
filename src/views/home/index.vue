<template>
  <div class="home">
    <!-- swipe -->
    <div class="homeSwipe">
      <el-carousel ref="carousel" indicator-position="none" arrow="never">
        <el-carousel-item v-for="(item, i) in swipeList" :key="i">
          <img class="homeSwipeImg" :src="item.image" alt="swipe" />
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
      <div
        class="homeSwipeBottomItem"
        v-for="(item, i) in swipeBottomList"
        :key="i"
        @click="serviceClick(item)"
      >
        <img :src="item.image" alt />
        <p class="homeSwipeBottomItemP1">{{item.name}}</p>
        <p class="homeSwipeBottomItemP2">{{item.name}}</p>
      </div>
    </div>
    <!-- Service -->
    <div class="homeService">
      <p class="homeItemTit">Service 服务领域</p>
      <div class="homeItemTitLine"></div>
      <div class="homeUnit">
        <div class="homeUnitItem">
          <div class="homeUnitItemLeftT">
            <img :src="serviceList[0].img" alt />
            <p>{{serviceList[0].name}}</p>
            <div class="homeUnitItemCon">
              <div
                class="homeUnitItemConList"
                v-for="(item, i) in serviceList[0].two"
                :key="i"
                @click="serviceClick(item)"
              >
                <span>{{item.twoname}}</span>
              </div>
            </div>
          </div>
          <div class="homeUnitItemLeftB">
            <img :src="serviceList[1].img" alt />
            <p>{{serviceList[1].name}}</p>
            <div class="homeUnitItemCon">
              <div
                class="homeUnitItemConList"
                v-for="(item, i) in serviceList[1].two"
                :key="i"
                @click="serviceClick(item)"
              >
                <span>{{item.twoname}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="homeUnitItem">
          <img :src="serviceList[3].img" alt />
          <p>{{serviceList[3].name}}</p>
          <div class="homeUnitItemCon">
            <div
              class="homeUnitItemConList"
              v-for="(item, i) in serviceList[3].two"
              :key="i"
              @click="serviceClick(item)"
            >
              <span>{{item.twoname}}</span>
            </div>
          </div>
        </div>
        <div class="homeUnitItem">
          <div class="homeUnitItemRigT">
            <img :src="serviceList[2].img" alt />
            <p>{{serviceList[2].name}}</p>
            <div class="homeUnitItemCon">
              <div
                class="homeUnitItemConList"
                v-for="(item, i) in serviceList[2].two"
                :key="i"
                @click="serviceClick(item)"
              >
                <span>{{item.twoname}}</span>
              </div>
            </div>
          </div>
          <div class="homeUnitItemRigB">
            <img :src="serviceList[4].img" alt />
            <p>{{serviceList[4].name}}</p>
            <div class="homeUnitItemCon">
              <div
                class="homeUnitItemConList"
                v-for="(item, i) in serviceList[4].two"
                :key="i"
                @click="serviceClick(item)"
              >
                <span>{{item.twoname}}</span>
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
        <el-carousel-item v-for="(item, i) in teamList.count" :key="i">
          <div class="homeTeamBox">
            <div class="homeTeamBoxItem" v-for="(items,index) in teamList.result" :key="index">
              <img :src="items.image" alt />
              <p class="homeTeamBoxItemCName">{{items.name}} 律师</p>
              <div class="homeTeamBoxItemC1">
                <p>毕业院校</p>
                <p>{{items.school}}</p>
              </div>
              <div class="homeTeamBoxItemC2">
                <p>擅长领域</p>
                <p>{{items.server_two_name}}</p>
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
        <div class="homeConsultationItem" @click="toConsultList(1)">
          <div class="homeConsultationItemT Blue">
            <p>免费咨询</p>
            <img class="homeConsultationItemTMore" src="img/home/更多.png" alt />
            <img class="homeConsultationItemTB" src="img/home/1免费咨询.png" alt />
          </div>
          <div class="homeConsultationItemC">
            <p class="homeConsultationItemCQ">{{consultationList.simple.problem}}</p>
            <p class="homeConsultationItemCR">
              <img src="img/home/律师费计算.png" />
              {{consultationList.simple.reply}}
            </p>
          </div>
        </div>
        <div class="homeConsultationItem" @click="toConsultList(2)">
          <div class="homeConsultationItemT Red">
            <p>全面咨询</p>
            <img class="homeConsultationItemTMore" src="img/home/更多.png" alt />
            <img class="homeConsultationItemTB" src="img/home/1全面咨询.png" alt />
          </div>
          <div class="homeConsultationItemC">
            <p class="homeConsultationItemCQ">{{consultationList.simpleall.problem}}</p>
            <p class="homeConsultationItemCR">
              <img src="img/home/律师费计算.png" />
              {{consultationList.simpleall.reply}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="homeNews">
      <p class="homeItemTit">News 新闻中心</p>
      <div class="homeItemTitLine"></div>
      <div class="homeNewsBox">
        <div class="homeNewsItem" v-for="(item,i) in articleList" :key="i" @click="newClick(item)">
          <img class="homeNewsItemLeft" :src="item.image" alt />
          <div class="homeNewsItemRight">
            <p>{{item.title}}</p>
            <p>{{item.abstract}}</p>
            <p>{{item.add_time}}</p>
          </div>
        </div>
        <div class="homeNewsMoreBtn" @click="toActrcleCLick">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
import { homeindexpage } from "@/api/api";
export default {
  data() {
    return {
      swipeList: [],
      swipeBottomList: [],
      serviceList: [
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        },
        {
          img: "",
          name: ""
        }
      ],
      teamList: {},
      consultationList: {
        simple: {
          problem: "",
          reply: ""
        },
        simpleall: {
          problem: "",
          reply: ""
        }
      },
      articleList: [],
      isLogin: false
    };
  },
  mounted() {
    this.queryLogin();
    this.queryHomeInfo();
  },
  methods: {
    // 查看是否登陆
    queryLogin() {
      if (this.$store.state.home.isLogin) {
        localStorage.setItem("isLogin", 1);
        this.isLogin = true;
      }
      if (localStorage.getItem("isLogin") == 1) {
        this.isLogin = true;
      }
    },
    // 请求首页信息
    queryHomeInfo() {
      homeindexpage().then(res => {
        console.log(res.data);
        this.swipeList = res.data.broadcast;
        this.swipeBottomList = res.data.servertwo;
        this.serviceList = res.data.serverone;
        this.teamList = res.data.team;
        this.consultationList = res.data.simple;
        this.articleList = res.data.article;
      });
    },
    serviceClick(item) {
      console.log(item);
      let id = "";
      if (item.id) {
        id = item.id;
      } else if (item.server_two_id) {
        id = item.server_two_id;
      }
      this.$router.push({
        path: "/serviceInfo",
        query: {
          id
        }
      });
    },
    toActrcleCLick() {
      this.$router.push({
        path: "/legalAdvice"
      });
    },
    toConsultList(t) {
      this.$router.push({
        path: "/consultList",
        query: {
          type: t
        }
      });
    },
    newClick(item) {
      this.$router.push({
        path: "/articleInfo",
        query: {
          id: item.id
        }
      });
    },
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
  display: flex;
  justify-content: space-between;
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
  width: 1080px;
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
