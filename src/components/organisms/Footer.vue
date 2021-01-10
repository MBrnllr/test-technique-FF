<template>
  <footer id="footer">
      Copyright © 2021 - Tous droits réservés
  </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
  #footer {
    background-color: $footerBg;
    color: hsla(0,0%,100%,.4);
    padding: 1em 2em;
    box-sizing: border-box;
    font-size: .75rem;
    font-weight: 700;
  }
</style>
