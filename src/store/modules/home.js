// home状态对象
const state = {
  test: "a test",
  isLogin: false
};

// 修改
const mutations = {
  SET_TEST: (state, val) => {
    state.test = val;
  },
  SET_Islogin: (state, val) => {
    state.isLogin = val;
  }
};

// 异步修改
const actions = {
  setTest({ commit }, val) {
    commit("SET_TEST", val);
  },
  setIslogin({ commit }, val) {
    commit("SET_Islogin", val);
  }
};

// home vuex模块导出
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
