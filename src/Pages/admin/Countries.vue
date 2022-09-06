<template>
<router-link :to="{ name: 'CreateCountry'}" class="btn btn-primary mb-3">Add Country</router-link>
 <select class="select" v-model="selected">
    <option v-for="country in countries" :value="country" :key="country.id">
      {{ country.name }}
    </option>
  </select>
<table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="country in countries" :key="country.id">
        <td>{{country.id}}</td>
        <td>{{country.name}}</td>
        <td><img v-bind:src="country.flag" :alt="country.name" width="90" /></td>
        <td>
          <button @click="del(country.id)" class="btn btn-del">Delete</button>          
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {onMounted, ref} from 'vue';
export default {
  name: "Countries",
   setup() {
    const countries = ref([]);
    onMounted( async () => {
      const res = await fetch('http://localhost:3000/countries');
      countries.value = await res.json();
    })
    const del = async (id) => {
      await fetch(`http://localhost:3000/countries/${id}`, {
        method: 'DELETE'
      })
      countries.value = countries.value.filter(p => p.id !== id);
    }
    return { countries,del }
  }
};
</script>

<style></style>
