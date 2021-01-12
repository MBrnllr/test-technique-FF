<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

body {
  background-color: $bgColor;
  margin: 0;
}

#app {
  display: flex;
  flex-flow: row;
  flex: 1;
  min-height: 100vh;
  font-family: $baseFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $titleFont;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $secondary;
  }
}
</style>
