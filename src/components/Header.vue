<template>
  <div class="headrItem">
    <h2>State Manager</h2>
    <div id="nav">
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
    </div>
  </div>  
</template>

<style>
.headrItem {
  position: fixed;
  width: 100%;
  background-color: #d8eaf5;
  color: #ff3b53;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#nav a {
  color: #ff3b53;
  padding: 20px;
  text-decoration: none;
}

#nav a:hover {
  color: #777;
}
</style>
