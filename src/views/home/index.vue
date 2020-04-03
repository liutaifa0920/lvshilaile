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
    <!-- <div class="homeSwipeBottom">
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
    </div>-->
    <!-- Service -->
    <div class="homeService" style="margin-top: 80px;">
      <p class="homeItemTit">服务领域</p>
      <div class="homeItemTitLine"></div>
      <div class="homeItemTitLineDown" style="margin-bottom: 50px;">SERVICE AREA</div>
      <div class="homeUnit">
        <div class="homeUnitNewItem">
          <div class="homeUnitNewItemImgBox">
            <img class="homeUnitNewItemFriImg" src="img/layout/isok.png" />
            <img class="homeUnitNewItemSecImg" src="img/layout/isok-w.png" />
          </div>
          <div class="homeUnitItemTit">法律咨询</div>
          <div class="serviceFreeBtn">
            <div class="serviceFreeBtnCon" @click="linkToFreeConsult">免费咨询</div>
          </div>
          <div class="serviceAllBtn" @click="linkToAllonsult">全面咨询</div>
          <div class></div>
        </div>
        <div class="homeUnitNewItem" v-for="(item, i) in serviceList" :key="i">
          <div class="homeUnitNewItemImgBox">
            <img class="homeUnitNewItemFriImg" :src="item.img" />
            <img class="homeUnitNewItemSecImg" :src="item.img_off" />
          </div>
          <div class="homeUnitItemTit">{{item.name}}</div>
          <div
            class="homeUnitItemItem"
            v-for="(itemI, index) in item.two"
            :key="index"
            @click="serviceClick(itemI)"
          >{{itemI.twoname}}</div>
          <div class="homeUnitItemItem" v-for="(itemI, index) in 2" :key="index+'block'"></div>
        </div>
      </div>
    </div>
    <!-- team -->
    <div class="homeTeam">
      <p class="homeItemTit" style="color: white;">团队介绍</p>
      <div class="homeItemTitLine" style="background-color: white;"></div>
      <div class="homeItemTitLineDown" style="margin-bottom: 50px;color: white;">ABOUT OUR COMPANY</div>

      <!-- 原律师轮播 -->
      <!-- <el-carousel ref="carouselTeam" indicator-position="outside" arrow="never" :interval="4000">
        <el-carousel-item v-for="(item, i) in teamList" :key="i">
          <div class="homeTeamBox">
            <div
              class="homeTeamBoxItem"
              @click="toServiceNameInfo(items.id)"
              v-for="(items,index) in item"
              :key="index"
            >
              <img :src="items.image" alt />
              <p class="homeTeamBoxItemCName">{{items.name}}</p>
              <div class="homeTeamBoxItemC1">
                <p>毕业院校</p>
                <p>{{items.school}}</p>
              </div>
              <div class="homeTeamBoxItemC2">
                <p>擅长领域</p>
                <p>{{items.server_two_name.length > 30 ? items.server_two_name.substr(0, 30)+"..." : items.server_two_name}}</p>
              </div>
            </div>
            <div class="homeTeamBoxItemBlock"></div>
            <div class="homeTeamBoxItemBlock"></div>
          </div>
        </el-carousel-item>
      </el-carousel>-->

      <div class="homeTeamList">
        <div
          class="homeTeamListItem"
          @click="toServiceNameInfo(item.id)"
          v-for="(item,i) in teamList"
          :key="i"
        >
          <img :src="item.image" />
          <div class="homeTeamListItemCon">
            <div class="homeTeamListItemConText">{{item.name}}</div>
            <div class="homeTeamListItemConBtn">了解更多</div>
          </div>
        </div>

        <div style="width: 255px;" v-for="(item,i) in 4" :key="i+'teamBlock'"></div>
      </div>
    </div>
    <!-- Consultation  -->
    <div class="homeConsultation">
      <p class="homeItemTit">咨询案例</p>
      <div class="homeItemTitLine"></div>
      <div class="homeItemTitLineDown" style="margin-bottom: 50px;">CONSULTATION CASE</div>
      <div class="homeConsultationBox">
        <div class="homeConsultationItem" @click="toConsultList(1)">
          <div class="homeConsultationItemLeft">
            <div class="homeConsultationItemT">
              <div class="homeConsultationItemTleft">
                <img class="homeConsultationItemTB" src="img/home/1免费咨询.png" alt />
                <p>免费咨询</p>
              </div>
              <img class="homeConsultationItemTMore" src="img/home/更多.png" alt />
            </div>
            <div class="homeConsultationItemC">
              <p class="homeConsultationItemCQ">{{consultationList.simple.problem}}</p>
              <p class="homeConsultationItemCR">
                <img src="img/home/律师费计算.png" />
                {{consultationList.simple.reply}}
              </p>
            </div>
          </div>
          <img class="homeConsultationItemRight" src="img/home/Ctop.jpg" alt />
        </div>
        <div class="homeConsultationItem" @click="toConsultList(2)">
          <img class="homeConsultationItemRight" src="img/home/Cbottom.jpg" alt />
          <div class="homeConsultationItemLeft">
            <div class="homeConsultationItemT">
              <div class="homeConsultationItemTleft">
                <img class="homeConsultationItemTB" src="img/home/1全面咨询.png" alt />
                <p>全面咨询</p>
              </div>
              <img class="homeConsultationItemTMore" src="img/home/更多.png" alt />
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
    </div>
    <div class="homeNews">
      <p class="homeItemTit">新闻中心</p>
      <div class="homeItemTitLine"></div>
      <div class="homeItemTitLineDown" style="margin-bottom: 50px;">NEWS CENTER</div>
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
    <div class="Contactus">
      <div class="ContactusE">Contact us</div>
      <div class="ContactusC">联系我们</div>
      <div class="ContactusItem">
        <img src="img/home/phone.png" alt />
        <div class="ContactusItemCon">北京市朝阳区东四环中路41号嘉泰国际大厦</div>
      </div>
      <div class="ContactusItem">
        <img src="img/home/position.png" alt />
        <div class="ContactusItemCon">400-900-8255</div>
      </div>
    </div>
  </div>
</template>

<script>
import { homeindexpage } from "@/api/api";
import { Message } from "element-ui";
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
      teamList: [],
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
        this.teamList = res.data.team.result;
        // 处理律师轮播数组
        // for (let i = 0; i < Math.ceil(res.data.team.result.length / 3); i++) {
        //   let tempArr = [];
        //   for (let j = i * 3; j < (i + 1) * 3; j++) {
        //     if (res.data.team.result[j]) {
        //       tempArr.push(res.data.team.result[j]);
        //     }
        //   }
        //   this.teamList.push(tempArr);
        // }
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
    // 律师详情
    toServiceNameInfo(id) {
      this.$router.push({
        path: "/serviceNameInfo",
        query: {
          id
        }
      });
    },
    linkToFreeConsult() {
      if (this.isLogin) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/freeConsult"
        });
      } else {
        // this.toLogin();
        Message("请先登录");
      }
    },
    linkToAllonsult() {
      if (this.isLogin) {
        document.documentElement.scrollTop = 0;
        this.$router.push({
          path: "/allConsult"
        });
      } else {
        // this.toLogin();
        Message("请先登录");
      }
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
  height: 100vh;
}
.homeSwipe .el-carousel__item,
.homeSwipe .el-carousel__mask {
  height: 100vh;
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
  height: 100vh;
}
.homwSwipeBtn {
  width: 45px;
  height: 75px;
  background-color: #000000a4;
  z-index: 500;
  position: absolute;
  top: 434px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swipeLeft {
  left: 350px;
}
.swipeRight {
  right: 350px;
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
  font-size: 36px;
  font-weight: 600;
  color: #2971DE;
  margin-bottom: 10px;
}
.homeItemTitLine {
  width: 97px;
  height: 1px;
  margin: 0 auto 10px;
  background-color: #4F4F4F;
}
.homeItemTitLineDown{
  color: #4F4F4F;
  font-size: 18px;
}

/* unit */
.homeUnit {
  width: 1200px;
  height: 825px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: url(~@/../public/img/home/团队底图.png) no-repeat;
  background-size: 100% 100%;
}
.homeUnitNewItem {
  width: 360px;
  height: 373px;
  background-color: #ffffff;
  border: solid 3px #eeeeee;
  box-sizing: border-box;
  padding: 89px 30px 0;
  position: relative;
  transition: 0.5s;
}
.homeUnitNewItem:hover {
  border-color: #2971de;
  transition: 0.5s;
}
.homeUnitNewItem:hover .homeUnitNewItemImgBox {
  background-color: #2971de;
  transition: 0.5s;
}
.homeUnitNewItem:hover .homeUnitNewItemFriImg {
  opacity: 0;
  transition: 0.5s;
}
.homeUnitNewItem:hover .homeUnitNewItemSecImg {
  opacity: 1;
  transition: 0.5s;
}
.homeUnitNewItemImgBox:hover {
  background-color: #2971de;
  transition: 0.5s;
}
.homeUnitNewItemImgBox:hover .homeUnitNewItem {
  border-color: #2971de;
  transition: 0.5s;
}
.homeUnitNewItemImgBox:hover .homeUnitNewItemFriImg {
  opacity: 0;
  transition: 0.5s;
}
.homeUnitNewItemImgBox:hover .homeUnitNewItemSecImg {
  opacity: 1;
  transition: 0.5s;
}
.homeUnitNewItem:nth-child(4),
.homeUnitNewItem:nth-child(5),
.homeUnitNewItem:nth-child(6) {
  margin-top: 127px;
}
.homeUnitItemTit {
  font-size: 24px;
  margin-bottom: 49px;
}
.homeUnitItemItem {
  width: calc(50% - 15px);
  text-align: left;
  display: inline-block;
  margin-bottom: 15px;
  cursor: pointer;
}
.homeUnitItemItem:nth-of-type(even) {
  margin-left: 30px;
}
.homeUnitNewItemImgBox {
  position: absolute;
  top: -65px;
  left: 0;
  right: 0;
  margin: auto;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-sizing: border-box;
  border: solid 3px #2971de;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.homeUnitNewItemFriImg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 70px;
  height: 70px;
  opacity: 1;
  transition: 0.5s;
}
.homeUnitNewItemSecImg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 70px;
  height: 70px;
  opacity: 0;
  transition: 0.5s;
}
.serviceFreeBtn {
  padding-top: 3px;
  box-sizing: border-box;
  width: 200px;
  height: 48px;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#2971de, #2971de);
  background-blend-mode: normal, normal;
  border-radius: 5px;
  margin: 60px auto 30px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #2971de;
  border-radius: 5px;
  cursor: pointer;
}
.serviceFreeBtnCon {
  width: calc(100% - 6px);
  height: calc(100% - 3px);
  margin: 0 auto;
  line-height: 44px;
  background-color: white;
  border-radius: 3px;
}
.serviceAllBtn {
  width: 200px;
  height: 48px;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#2971de, #2971de);
  background-blend-mode: normal, normal;
  border-radius: 5px;
  margin: 0 auto;
  line-height: 48px;
  color: white;
  cursor: pointer;
}

/* Team */
.homeTeam {
  width: 1200px;
  /* height: 691px; */
  margin: 0 auto;
  /* background: url(~@/../public/img/home/团队底图.png) no-repeat; */
  background-size: 100% 100%;
}
.homeTeamList {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.homeTeamListItem {
  width: 255px;
  height: 400px;
  margin-bottom: 37px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.homeTeamListItem:hover .homeTeamListItemCon {
  transition: 0.5s;
  bottom: 0px;
}
.homeTeamListItem img {
  width: 255px;
  height: 350px;
}
.homeTeamListItemCon {
  position: absolute;
  width: 255px;
  height: 100px;
  bottom: -50px;
  left: 0;
  background-color: #ffffff;
  transition: 0.5s;
}
.homeTeamListItemConText {
  width: 100%;
  line-height: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: #263238;
}
.homeTeamListItemConBtn {
  width: 116px;
  margin: 8px auto;
  height: 34px;
  line-height: 34px;
  color: #2971de;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: solid 1px #2971de;
}

.homeTeamBox {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
.homeTeamBoxItemBlock {
  width: 360px;
  height: 0px;
  padding: 0px 0px;
  box-sizing: border-box;
  background-color: transparent;
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
.Blue {
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#ffffff, #ffffff);
}
.Red {
  background-image: linear-gradient(82deg, #fe835f 0%, #ff4c51 100%),
    linear-gradient(#ffffff, #ffffff);
}
.homeConsultation {
  width: 1200px;
  margin: 0 auto;
}
.homeConsultationBox {
  width: 100%;
  /* height: 441px; */
  margin-bottom: 120px;
}
.homeConsultationItem {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 291px;
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0);
  transition: 0.4s;
  margin-bottom: 69px;
}
.homeConsultationItem:hover {
  box-shadow: 0px 5px 10px 0px rgba(41, 113, 222, 0.1);
  transition: 0.4s;
}
.homeConsultationItemLeft {
  width: clac(100% - 340px);
  height: 291px;
}
.homeConsultationItemRight {
  width: 340px;
  height: 291px;
}
.homeConsultationItemT {
  width: 100%;
  height: 58px;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #2971de;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  border-bottom: 1px solid #eeeeee;
}
.homeConsultationItemTleft {
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.homeConsultationItemTMore {
  width: 24px;
  cursor: pointer;
  /* background-color: #2971de; */
}
.homeConsultationItemTB {
  width: 18px;
  height: 18px;
  /* background-color: #2971de; */
  margin-right: 15px;
}
.homeConsultationItemC {
  width: 100%;
  height: 231px;
  padding: 29px 30px 38px;
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
  cursor: pointer;
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
  cursor: pointer;
}

/* Contact us */
.Contactus {
  width: 100%;
  height: 440px;
  background: url(~@/../public/img/home/Contactus.png) no-repeat;
  background-size: 100% 100%;
  margin-bottom: 80px;
  box-sizing: border-box;
  padding-top: 80px;
}
.ContactusE {
  width: 100%;
  font-size: 36px;
  color: white;
  margin-bottom: 20px;
}
.ContactusC {
  width: 100%;
  font-size: 24px;
  color: white;
  margin-bottom: 59px;
}
.ContactusItem {
  width: 500px;
  height: 62px;
  padding: 19px 45px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto 20px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
}
.ContactusItem img {
  width: 26px;
  margin-right: 20px;
}
.ContactusItemCon {
  color: white;
  line-height: 62px;
}
</style>
