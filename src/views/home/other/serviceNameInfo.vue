<template>
  <div class="serviceNameInfo">
    <div class="serviceNameInfoLeft">
      <img :src="info.image" />
    </div>
    <div class="serviceNameInfoRight">
      <div class="serviceNameInfoRightTit">{{info.name}}</div>
      <div class="serviceNameInfoRightCon" v-html="info.introduction"></div>
      <div class="serviceNameInfoRightBot">
        <div class="serviceNameInfoRightBotT">擅长领域 :</div>
        <div class="serviceNameInfoRightBotB">{{info.server_two_id}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { homeTeamArticleview } from "@/api/api";
export default {
  data() {
    return {
      id: "",
      info: {}
    };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    this.id = this.$route.query.id;
    console.log(this.id);
    this.queryInfo();
  },
  methods: {
    queryInfo() {
      let data = {
        id: this.id
      };
      homeTeamArticleview(data).then(res => {
        console.log(res.data);
        if (res.code == 200) {
          this.info = res.data;
        }
      });
    }
  }
};
</script>
<style scoped>
.serviceNameInfo {
  width: 1100px;
  margin: 40px auto 80px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
}
.serviceNameInfoLeft {
  width: 300px;
  height: 420px;
}
.serviceNameInfoLeft img {
  width: 100%;
  height: 420px;
}
.serviceNameInfoRight {
  width: 750px;
  height: 420px;
  /* overflow-y: scroll; */
}
/* .serviceNameInfoRight::-webkit-scrollbar {
  display: none;
} */
.serviceNameInfoRightCon {
  height: 220px;
  overflow-y: scroll;
}
.serviceNameInfoRightCon::-webkit-scrollbar {
  /* display: none; */
}
.serviceNameInfoRightTit {
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}
.serviceNameInfoRightBot {
  width: 100%;
  margin-top: 30px;
}
.serviceNameInfoRightBotT {
  text-align: left;
  font-size: 18px;
  margin-bottom: 15px;
}
.serviceNameInfoRightBotB {
  text-align: left;
}
</style>