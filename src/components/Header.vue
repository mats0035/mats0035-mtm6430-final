<template>
  <div>
    <div class="headrItem">
      <h2>State Manager</h2>
      <div id="nav">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link v-if="!auth" :to="{ name: 'signup' }">Sign Up</router-link>
        <router-link v-if="!auth" :to="{ name: 'signin' }">Sign In</router-link> 
        <router-link v-if="auth" :to="{ name: 'dashboard' }">Dashboard</router-link>
        <a v-if="auth" class="logout" @click="logout">Logout</a>
      </div>
    </div>  
    <div v-if="error" @click="clearError" class="error">{{ error }}</div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["error"]),
    ...mapGetters({
      auth: "isAuthenticated"
    })
  },
  methods: {
    ...mapActions(["clearError", "logout", "autoLogin"])
  },
  created() {
    this.autoLogin();
  }
}
</script>
<style lang="scss">
.headrItem {
  width: 100%;
  background-color: #d8eaf5;
  color: #ff3b53;
  display: flex;
  justify-content: space-around;
  align-items: center;

  #nav a {
    color: #ff3b53;
    padding: 20px;
    text-decoration: none;

    &:hover {
      color: #777;
    }
  }
}

.error {
  background-color: rosybrown;
  padding: 20px;
}
</style>
