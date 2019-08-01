<template>
  <div class="home">
    <div>
      <h2>Sign Up</h2>
      <el-form class="form" :model="ruleForm" ref="ruleForm" @submit.prevent="sendForm">
        <el-form-item prop="name" label="NAME">
          <el-input v-model="ruleForm.name" placeholder="Your Name"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="EMAIL">
          <el-input v-model="ruleForm.email" placeholder="example@gmail.com"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="PASSWORD">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <router-link :to="{name: 'dashboard'}"><el-button class="button" type="primary" @click="sendForm">Submit</el-button></router-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function () {
    return {
      ruleForm: {
        name: "",
        email: "",
        password: ""
      },
      localvalues: {}
    }
  },
  methods: {
    ...mapActions(["setData"]),
    sendForm() {
      // Set data in localStorage
      localStorage.name = this.ruleForm.name;
      localStorage.email = this.ruleForm.email;
      localStorage.password = this.ruleForm.password;

      // Set data in state
      this.setData({ 
        name: this.ruleForm.name,
        email: this.ruleForm.email,
        password: this.ruleForm.password 
      });
    }
  }
};
</script>
<style  lang="scss">
  .home {
    max-width: 800px;
    margin: auto;
    text-align: left;
    padding-top: 100px;
    padding-bottom: 70px;

    .form {
      position: relative;
      border: 1px solid #160a4d;
      border-radius: 10px;
      padding: 30px;
      padding-bottom: 60px;
      margin: 10px;
    }
    .button {
      position: absolute;
      right: 30px;
    }
  }
</style>
