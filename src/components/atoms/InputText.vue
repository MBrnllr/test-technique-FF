<template>
  <div class="inputText">
      <input type="text" />
  </div>
</template>

<script>
export default {
    name: 'InputText',
}
</script>

<style lang="scss">
  .inputText {
    border-radius: 4px;
    color: var(--primary-color);
    margin-bottom: 10px;
    font-size: .8em;
    height: 44px;
    background: #fff;
    input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-width: none;
    }
  }
</style>