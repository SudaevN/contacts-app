<template>
  <div class="app-wrap">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
.app-wrap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

</style>
