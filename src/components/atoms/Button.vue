<template>
    <div
        class="button"
        v-bind:class="{'primary': $props.theme === 'primary', 'plain': $props.plain}"
    >
    {{$props.label}}
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        theme: String,
        plain: Boolean,
        label: String,
    },
}
</script>

<style lang="scss">
  .button {
    display: inline-flex;
    padding: 10px;
    height: 40px;
    box-sizing: border-box;
    align-self: center;
    margin: 1em;
    border-radius: 4px;
    &.primary {
        color: #093b59;
        background-repeat: repeat-x;
        border: 1px solid;
        border-color: #ff9444 #ff648c #ff648c #ff9444;
        transition: all 1s ease;
        &.plain, &:hover {
            color: white;
            background-image: linear-gradient(45deg,#ff9444,#ff648c);
        }
    }
    + .button {
    margin: 1em 0.5em;
  }
  }
</style>
