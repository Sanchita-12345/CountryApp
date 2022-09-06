<template>
<div class="sidebar">
    <ul class="side-menu">
        <li><router-link :to="{ name: 'Countries'}">Countries</router-link></li>
        <li><router-link :to="{ name: 'CreateCountry'}">Add Country</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
name:'SideBar'
}
</script>

<style>

</style>