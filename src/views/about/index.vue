<template>
  <div class="about">
    <div class="aboutTopImg">
      <img src="img/about/联系我们底图.png" />
    </div>
    <div class="aboutMain">
      <p>{{infoList.title}}</p>
      <div class="aboutMainTop">
        <div v-html="infoList.contnet"></div>
        <img src="img/about/logo（蓝）.png" />
      </div>
      <div class="contentM">
        <img :src="infoList.image" />
        <div class="contentRight" v-html="infoList.content_1"></div>
      </div>
      <div class="contentB" v-html="infoList.content_2"></div>
    </div>
  </div>
</template>
<script>
import { CompanyIndexpage } from "@/api/api";
export default {
  data() {
    return {
      type: "",
      infoList: {
        id: 5,
        title: "",
        image: "",
        contnet: "",
        content_1: "",
        content_2: ""
      }
    };
  },
  computed: {
    aboutType() {
      return this.$store.state.home.aboutType;
    }
  },
  watch: {
    aboutType() {
      console.log("djsadjkasdkjhasjkdhkasj");
      this.queryParam();
    }
  },
  mounted() {
    this.queryParam();
  },
  methods: {
    queryParam() {
      this.type = this.aboutType;
      this.queryInfo();
    },
    queryInfo() {
      let data = {
        id: this.type
      };
      CompanyIndexpage(data).then(res => {
        // console.log(res.data);
        if (res.code == 200) {
          this.infoList = res.data;
        }
      });
    }
  }
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
  justify-content: space-around;
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
  /* width: 336px; */
  height: 110px;
}
.aboutMainTop div {
  width: 760px !important;
  box-sizing: border-box !important;
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