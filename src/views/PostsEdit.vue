<template>
  <div class="home">
    <h1>Edit Post</h1>
    <form v-on:submit.prevent="editPost()">
      <ul>
        <li v-for="error in errors" v-bind:key="error" style="color: red">
          {{ error }}
        </li>
      </ul>
      <p>
        Title:
        <input type="text" v-model="post.title" />
      </p>
      <p>
        Body:
        <input type="text" v-model="post.body" />
      </p>
      <p>
        Image:
        <input type="text" v-model="post.image" />
      </p>
      <input type="submit" value="Edit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/posts/${this.$route.params.id}`).then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    editPost() {
      axios
        .patch(`/posts/${this.$route.params.id}`, this.post)
        .then((response) => {
          console.log(response);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>
