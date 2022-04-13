<template>
  <div class="home">
    <h1>Post info</h1>
    <h2>Title: {{ post.title }}</h2>
    <p>Body: {{ post.body }}</p>
    <p>user: {{ post.user_id }}</p>
    <img v-bind:src="post.image" v-bind:alt="post.title" />
    <div>
      <router-link to="/posts">Back to main forum!</router-link>
      <router-link v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: {},
    };
  },
  created: function () {
    axios.get(`/posts/${this.$route.params.id}`).then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    destroyPost() {
      axios.delete(`/posts/$(this.post.id}`).then;
    },
  },
};
</script>

<style></style>
