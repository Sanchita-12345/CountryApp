<template>
  <form @submit.prevent="submit" enctype="multipart/form-data">
    <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" name="title" v-model="name" placeholder="Enter name" pattern=".{3,20}"
>
  </div>
  <div class="form-group">
    <label>Flag</label>
    <input type="file" class="form-control-file" ref="file" @change="selectFile" accept=".png,.jpg">
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
  <router-link :to="{ name: 'Countries' }" class=" btn btn-danger ml-3">Cancel</router-link>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "CreateCountry",
  data() {
    return {
      flag: "",
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
  },
  setup() {
    const name = ref("");
    const flag = ref("");
    const router = useRouter();
    const submit = async () => {
      await fetch("http://localhost:3000/countries", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          flag: flag.value,
        }),
      });
      await router.push("/admin/countries");
    };

    return { name, flag, submit };
  },
};
</script>

<style></style>
