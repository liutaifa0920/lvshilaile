<template>
  <div class="defaut-layout">
    <div class="layoutTitle">
      <img class="layoutLogo" src="img/layout/logoWhite.png" alt="律狮来了" />
      <ul class="layoutNav">
        <li @click="layoutNavClick(1)">
          <p>首页</p>
        </li>
        <li @click="layoutNavClick(2)">
          <p>服务领域</p>
        </li>
        <li @click="layoutNavClick(3)">
          <p>律师团队</p>
        </li>
        <li @click="layoutNavClick(4)">
          <p>新闻中心</p>
        </li>
        <li @click="layoutNavClick(5)">
          <p>关于我们</p>
        </li>
      </ul>
      <div class="layoutLoginBox">
        <img class="layoutLoginTip" src="img/layout/铃铛.png" alt="消息通知" />
        <div class="layoutLoginBlock">
          <p>登录</p>
          <div class="layoutLoginMid"></div>
          <p>注册</p>
        </div>
      </div>
    </div>
    <router-view />
    <div class="layoutFooter">
      <div class="layoutFooterTop">
        <div class="layoutFooterTopLogo">
          <img src="img/layout/logoBlue.png" alt="律狮来了" />
        </div>
        <div class="layoutFooterTopList">
          <div class="layoutFooterTopListItem">
            <p class="layoutFooterTopListItemTit">关于我们</p>
            <p class="layoutFooterTopListItemCon">了解我们</p>
            <p class="layoutFooterTopListItemCon">加入我们</p>
          </div>
          <div class="layoutFooterTopListItem">
            <p class="layoutFooterTopListItemTit">常见问题</p>
            <p class="layoutFooterTopListItemCon">新手帮助</p>
            <p class="layoutFooterTopListItemCon">支付帮助</p>
          </div>
        </div>
      </div>
      <div class="layoutFooterBot">
        <p>北京律狮科技有限公司，备案号 京ICP备18043352号</p>
        <p>技术支持：上海腾虫信息科技有限公司</p>
        <p>
          <img src="img/layout/ghs.png" alt="国徽" />京公网安备 11010502035663号
        </p>
      </div>
    </div>
    <!-- rightFixed -->
    <div class="layoutRightFix"></div>
  </div>
</template>

<script>
export default {
  name: "defaut-layout",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.defaut-layout {
  width: 100%;
}
/* ---------------------- Nav ------------------- */
.layoutTitle {
  width: 100%;
  height: 60px;
  background-color: #2971de;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* logo */
.layoutLogo {
  width: 123px;
  height: 40px;
  margin-left: 50px;
}
/* topNav */
.layoutNav {
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.layoutNav > li {
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}
.layoutNav > li:hover {
  background-color: #4e88df;
  transition: 0.3s;
}
.layoutNavAction {
  background-color: #4e88df;
  transition: 0.3s;
}
/* topRight */
.layoutLoginBox {
  width: 125px;
  margin-right: 51px;
  display: flex;
  align-items: center;
}
/* topTip */
.layoutLoginTip {
  width: 18px;
  height: 20px;
  margin-right: 23px;
  cursor: pointer;
}
/* topLogin */
.layoutLoginBlock {
  font-size: 14px;
  height: 16px;
  line-height: 16px;
  width: 86px;
  display: flex;
  justify-content: space-around;
}
.layoutLoginBlock > p {
  cursor: pointer;
}
.layoutLoginMid {
  height: 16px;
  width: 2px;
  background-color: white;
}

/* Footer */
.layoutFooter {
  width: 1200px;
  height: 365px;
  margin: 0 auto 41px;
}
.layoutFooterTop {
  width: 100%;
  height: 235px;
  box-sizing: border-box;
  border-bottom: 2px solid #e1e3e6;
  display: flex;
}
.layoutFooterTopLogo {
  width: 50%;
  height: 235px;
  text-align: center;
}
.layoutFooterTopLogo > img {
  width: 336px;
  height: 110px;
}
.layoutFooterTopList {
  width: 50%;
  height: 235px;
  padding: 0 172px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.layoutFooterTopListItem {
  text-align: left;
}
.layoutFooterTopListItemTit {
  font-size: 16px;
  font-weight: 600;
}
.layoutFooterTopListItem > p {
  line-height: 48px;
}
.layoutFooterTopListItemCon {
  font-size: 14px;
  cursor: pointer;
}
.layoutFooterBot {
  font-size: 14px;
  margin-top: 49px;
  line-height: 24px;
}
.layoutFooterBot > p {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* RightFix */
.layoutRightFix {
  position: fixed;
  right: 0px;
  top: 0px;
  width: 70px;
  height: 800px;
  background-color: #2971de;
  z-index: 1000;
  display: none;
}
</style>
