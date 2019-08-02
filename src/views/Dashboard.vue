<template>
  <div class="dashboard">
    <div>
      <h2>Dashboard</h2>
      <div class="dashboard-container">
        <h3>Welcome {{ userData.name }}!</h3>
        <p>Your signup email is {{ userData.email }}</p>
        <h4>This is data from local storage: </h4>
        <p v-for="localvalue in localvalues" :key="localvalue.id">{{ localvalue }}</p>
        <el-button class="button" type="primary" @click="clearData">CLEAR DATA</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      userData: {
        name: "",
        email: ""
      },
      localvalues: [],
      localItem: ['name', 'email', 'password']
    }
  },
  computed: mapGetters(["getFormName", "getFormEmail"]),
  created() {
    this.userData.name = this.getFormName;
    this.userData.email = this.getFormEmail;
  },
  mounted() { 
    // Load values from localStorage
    for (let i = 0; i < this.localItem.length; i++) {
      if (localStorage.getItem(this.localItem[i])) {
        this.localvalues.push(localStorage.getItem(this.localItem[i]))
      }   
    }
  },
  methods: {
    clearData() {
      // Delete data
      this.userData = "";

      // Delete data of localStorage
      for (let i = 0; i < this.localItem.length; i++) {
        localStorage.removeItem(this.localItem[i]);
      };
      this.localvalues = []
    }
  }
}
</script>
<style  lang="scss">
  .dashboard {
    max-width: 800px;
    margin: auto;
    text-align: left;
    padding-top: 100px;
    padding-bottom: 70px;

    .dashboard-container {
      text-align: center;
      position: relative;
      border: 1px solid #160a4d;
      border-radius: 10px;
      padding: 30px;
      padding-bottom: 60px;
      margin: 10px;
      min-height: 200px;
    }
  
    .button {
      position: absolute;
      bottom: 30px;
      right: 30px;
    }
  }
</style>
