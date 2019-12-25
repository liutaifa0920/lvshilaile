<template>
  <div class="businessInfo">
    <div class="topBread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>企业信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="contentLeft">
        <div class="contentLeftT">
          <img :src="infoList.user.picture" />
          <p>{{infoList.user.nickName}}</p>
        </div>
        <div class="contentLeftB">
          <p class="contentLeftBItem isAction" @click="linketoInfo(1)">
            <img src="img/home/PC信息 (1).png" /> 企业信息
          </p>
          <p class="contentLeftBItem" @click="linketoInfo(2)">
            <img src="img/home/PC资料.png" /> 我的资料
          </p>
          <p class="contentLeftBItem" @click="linketoInfo(3)">
            <img src="img/home/消息.png" /> 我的消息
          </p>
          <!-- <p class="contentLeftBItem" @click="linketoInfo(4)">
            <img src="img/home/PC注册会员.png" /> 注册会员
          </p> -->
        </div>
      </div>
      <div class="contentRight">
        <div class="contentRightT" @click="addBusiness(1, '')">+ 添加企业</div>
        <div class="contentRightB">
          <div class="contentRightBTit">
            <div>公司名称</div>
            <div>操作</div>
          </div>
          <div
            v-show="infoList.result"
            class="contentRightBItem"
            v-for="(item ,i) in infoList.result"
            :key="i"
          >
            <div class="contentRightBItemLeft">{{item.business_name}}</div>
            <div class="contentRightBItemRight">
              <div class="contentRightBItemRightL" @click="addBusiness(2, item.id)">
                <img src="img/home/编辑.png" alt />
                编辑
              </div>
              <div class="contentRightBItemRightR" @click="deleBusiness(item.id)">
                <img src="img/home/删除.png" alt />
                删除
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { EnterpriseIndexlist, EnterpriseDellist } from "@/api/api";
export default {
  data() {
    return {
      infoList: {
        user: {
          nickName: "",
          picture: ""
        },
        result: [
          {
            id: 16,
            business_name: ""
          },
          {
            id: 17,
            business_name: ""
          }
        ]
      }
    };
  },
  mounted() {
    if (localStorage.getItem("isLogin") == 1) {
      this.user_id = localStorage.getItem("userID");
      this.queryInfo();
    }
  },
  methods: {
    queryInfo() {
      let data = {
        user_id: this.user_id
      };
      EnterpriseIndexlist(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.infoList = res.data;
        }
      });
    },
    deleBusiness(id) {
      let data = {
        id
      };
      EnterpriseDellist(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.queryInfo();
        }
      });
    },
    addBusiness(t, id) {
      this.$router.push({
        path: "/setBusinessInfo",
        query: {
          type: t,
          id
        }
      });
    },
    linketoInfo(i) {
      if (i == 1) {
      } else if (i == 2) {
        this.$router.push({
          path: "/userInfo"
        });
      } else if (i == 3) {
        this.$router.push({
          path: "/myInfo"
        });
      } else if (i == 4) {
      }
    }
  }
};
</script>
<style scoped>
.businessInfo {
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
  display: flex;
  justify-content: left;
}
.contentLeft {
  margin-right: 24px;
}
.contentLeftT {
  width: 258px;
  height: 130px;
  text-align: center;
  color: white;
  margin-bottom: 10px;
  background-image: linear-gradient(82deg, #43a7f5 0%, #8e66f3 100%),
    linear-gradient(#ffffff, #ffffff);
}
.contentLeftT > img {
  width: 61px;
  height: 61px;
  border-radius: 50%;
  margin-top: 19px;
}
.contentLeftB {
  width: 258px;
  border: solid 1px #e1e3e6;
  box-sizing: border-box;
}
.contentLeftBItem {
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: white;
  color: #788084;
}
.contentLeftBItem > img {
  width: 20px;
  margin-right: 10px;
}
.isAction {
  color: white;
  background-color: #2971de;
}

/* right */
.contentRightT {
  width: 916px;
  height: 40px;
  background-color: #ffffff;
  border: solid 1px #2971de;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1px;
  color: #2971de;
  cursor: pointer;
  margin-bottom: 10px;
}
.contentRightB {
  width: 914px;
}
.contentRightBTit {
  width: 914px;
  height: 60px;
  background-color: #2971de30;
  box-sizing: border-box;
  display: flex;
}
.contentRightBTit > div:nth-child(1),
.contentRightBItemLeft {
  width: 630px;
  height: 60px;
  line-height: 60px;
  padding-left: 40px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: left;
}
.contentRightBTit > div:nth-child(2) {
  line-height: 60px;
  height: 60px;
  font-size: 18px;
  text-align: left;
}

.contentRightBItem {
  width: 914px;
  height: 76px;
  border-bottom: 1px solid #e1e3e6;
  box-sizing: border-box;
  display: flex;
}
.contentRightBItemLeft {
  height: 76px;
  line-height: 76px;
}
.contentRightBItemRight {
  line-height: 76px;
  height: 76px;
  font-size: 18px;
  text-align: left;
  display: flex;
  justify-content: left;
  align-items: center;
}
.contentRightBItemRightL {
  margin-right: 50px;
}
.contentRightBItemRightL,
.contentRightBItemRightR {
  height: 76px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
}
.contentRightBItemRightL > img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.contentRightBItemRightR > img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>