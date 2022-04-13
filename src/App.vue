<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Blg</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          <a class="nav-link" href="/posts">Posts</a>
          <a class="nav-link" href="/posts/new">New Post</a>
          <a v-if="!isLoggedIn" class="nav-link" href="/signup">Signup</a>
          <a v-if="!isLoggedIn" class="nav-link" href="/login">Login</a>
          <a v-if="isLoggedIn" class="nav-link" href="/logout">Logout</a>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style></style>
