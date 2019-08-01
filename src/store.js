import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formdata: []
  },
  mutations: {
    SET_DATA(state, data) {
      state.formdata = data;
    }
  },
  actions: {
    setData({commit}, {name, email, password}) {
      commit("SET_DATA", {name, email, password})
    }
  },
  getters: {
    getFormName: state => state.formdata.name,
    getFormEmail: state => state.formdata.email
  }
});
