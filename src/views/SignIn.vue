<template>
  <div>
    <h1>Sign In</h1>
    <el-form :model="ruleForm" :rules="rules">
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
        email: "",
        pass: ""
      },
      rules: {
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
    };
  },
  methods: {
    ...mapActions(["signIn"]),
    onSubmit() {
      const formData = {
        email: this.ruleForm.email,
        password: this.ruleForm.pass
      };
      this.signIn(formData);
    }
  }
};
</script>
