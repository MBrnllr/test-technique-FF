<template>
  <header id="header">
    <div id="navigation">
      <router-link to="/">
        <img alt="French Founders" src="../../assets/logo.png">
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $headerBg;
    padding: 1em 2em;
    box-sizing: border-box;
  }
  #navigation {
    display: flex;
    flex-flow: row;
    align-items: center;
    img {
        max-height: 22px;
    }
  }
</style>
