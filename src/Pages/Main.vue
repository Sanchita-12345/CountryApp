<template>
  <div class="welcome">Welcome to Country website</div>
  <router-link :to="{ name: 'Countries'}" class="btn btn-primary main-button">Go to country Page</router-link>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style></style>
