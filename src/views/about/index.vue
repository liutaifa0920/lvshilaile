<template>
  <div class="about">
    <div class="aboutTopImg">
      <img src="img/about/联系我们底图.png" />
    </div>
    <div class="aboutMain">
      <p>律狮来了</p>
      <div class="aboutMainTop">
        <div>律狮来了！终于来了！社会离不开规则，如同交通离不开红绿灯，而法律正是我们在社会交往中的规则，让法律成为我们生活的习惯。律师，是建设法治社会的重要群体，数千年以来，律师一直承担着维护法律正确实施，促进社会进步的重要作用。</div>
        <img src="img/about/logo（蓝）.png" />
      </div>
      <div class="contentM">
        <img src="img/about/联系我们底图.png" />
        <div class="contentRight">
          目前，人人需要律师，企业需要也需要律师，但感觉律师又与自己很遥远，一般在遇到诉讼才会委托律师，但实际上，预防纠纷发生，才是律师职能之一。所以社会上很多事情，都可以委托律师来处理，提前咨询律师，让律师来代书合同，规范行为，纠纷就可以减少，律狮来了!解决生活、工作、企业运营中的一切法律事宜。
          律狮来了！是一个社会生活服务平台，以律师作为服务主体，提供专业、精准、高效、严谨的法律服务。就个人而言，从出生、户籍登记、婚姻、继承、求学、工作、买车、买房、死亡的全方面的法律服务，就企业而言，从公司注册、财务记账、合同合规、知识产权、诉讼仲裁、企业融资、劳动人事、公司上市、企业注销等各方面提供法律服务。
        </div>
      </div>
      <div
        class="contentB"
      >本网络平台与其他企业不同之处，我们更注重个人及企业事务安排律师办理、把关、审核，最大限度的避免纠纷争议发生。其实，在很多国家，这些事务都经过律师办理的，甚至包括公证见证、缔结婚约、信托、公司注册、商标专利申请、购买房屋及汽车等等。我们只是走的更往前一步，距离法治社会更近一步，建立网络平台，共享律师服务，提供质优价廉的专业律师服务，让律师走入寻常百姓家，促进法治社会尽快实现及完成，让社会减少纠纷，让社会更美好，更安宁，更幸福！</div>
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
.about {
  width: 100%;
  position: relative;
}
.aboutTopImg {
  width: 100%;
  height: 450px;
}
.aboutTopImg > img {
  width: 100%;
  height: 450px;
}

.aboutMain {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: -100px;
}
.aboutMain > p {
  color: white;
  font-size: 24px;
  padding: 20px 0;
  text-align: left;
}
.aboutMainTop {
  background-color: white;
  width: 100%;
  height: 330px;
  border: solid 1px #e1e3e6;
  box-sizing: border-box;
  padding: 80px 70px 87px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}
.aboutMainTop > div {
  font-size: 18px;
  color: #263238;
  line-height: 30px;
  letter-spacing: 1px;
  width: 630px;
  text-align: left;
}
.aboutMainTop > img {
  width: 336px;
  height: 110px;
}

.contentM {
  width: 100%;
  padding-right: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: #263238;
  margin-bottom: 122px;
}
.contentM > img {
  width: 425px;
  height: 378px;
}
.contentRight {
  width: 651px;
  height: 378px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 1px;
  text-align: left;
}
.contentB {
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 1px;
  text-align: left;
}
</style>