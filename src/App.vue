<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>
<script>

</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/* font-family: 'Comic Neue', cursive; */
/* font-family: 'Patua One', cursive; */
/* font-family: 'Poppins', sans-serif; */
font-family: 'Tilt Neon', cursive;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
