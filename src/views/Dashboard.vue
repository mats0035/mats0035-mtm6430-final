<template>
  <div class="dashboard">
      <div class="dashboard-container">
        <h2>Welcome {{ user.name }}!</h2>
        <p>Your signup email is {{ user.email }}</p>
        <el-form>
        <el-form-item prop="name" label="Edit your name:">
          <el-input type="text" v-model="user.name" id="name"></el-input>
        </el-form-item>
        <el-form-item prop="age" label="Edit your age:">
          <el-input type="text" v-model="user.age" id="age"></el-input>
        </el-form-item>
        <el-form-item prop="city" label="Edit your city:">
          <el-input type="text" v-model="user.city" id="age"></el-input>
        </el-form-item>
        <el-form-item prop="job" label="Edit your job:">
          <el-input type="text" v-model="user.job" id="age"></el-input>
        </el-form-item>
         <el-button type="submit" @click="submitForm">Submit</el-button> 
        </el-form>
      </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
   computed: {
    ...mapGetters({
      userData: "getUser"
    }),
    user() {
      return !this.userData ? false : this.userData;
    }
  },
  created() {
    this.getUserData();
  },
  methods: {
    ...mapActions(["fetchUser", "updateUser"]),
    getUserData() {
      let userEmail = localStorage.getItem("userEmail");
      this.fetchUser(userEmail);
    },
    submitForm() {
      this.updateUser()
    }
  }
}
</script>
