<template>
  <div>
    <h1>Sign Up</h1>
    <el-form :model="ruleForm" :rules="rules">
      <el-form-item prop="name" label="Name">
        <el-input type="text" v-model="ruleForm.name" id="name"></el-input>
      </el-form-item>
      <el-form-item prop="age" label="Age">
        <el-input type="text" v-model="ruleForm.age" id="age"></el-input>
      </el-form-item>
      <el-form-item prop="city" label="City">
        <el-input type="text" v-model="ruleForm.city" id="city"></el-input>
      </el-form-item>
      <el-form-item prop="job" label="Job">
        <el-input type="text" v-model="ruleForm.job" id="job"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="Email">
        <el-input type="email" v-model="ruleForm.email" id="email"></el-input>
      </el-form-item>
      <el-form-item prop="pass" label="Password">
        <el-input type="password" v-model="ruleForm.pass" id="pass"></el-input>
      </el-form-item>
      <el-button type="submit" @click="onSubmit">Submit</el-button>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
      name: "",
      age: "",
      city: "",
      job: "",
      email: "",
      pass: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Name is required",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur"
          }
        ],
        pass: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions(["signUp"]),
    onSubmit() {
      const formData = {
        name: this.ruleForm.name,
        age: this.ruleForm.age,
        city: this.ruleForm.city,
        job: this.ruleForm.job,
        email: this.ruleForm.email,
        password: this.ruleForm.pass
      };
      this.signUp(formData);
    }
  }
};
</script>

<style lang="scss">
form {
  padding: 20px;
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 5px;
  max-width: 600px;
  margin: auto;

  div {
    max-width: 80%;
    margin: auto;
  }

  .el-form-item__label {
    min-width: 100px;
    text-align: left;
  }
}
</style>