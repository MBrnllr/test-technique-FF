<template>
    <div
        class="button"
        v-on:click="$props.onClick"
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
        onClick: Function,
    },
}
</script>

<style lang="scss">
  .button {
    display: inline-flex;
    padding: 8px 10px 10px;
    height: 40px;
    box-sizing: border-box;
    align-self: center;
    margin: 1em;
    border-radius: 4px;
    font-family: $buttonFont;
    cursor: pointer;
    &.primary {
        color: $primary;
        background-repeat: repeat-x;
        border: 1px solid;
        border-color: $borderGradient;
        transition: all 1s ease;
        &.plain, &:hover {
            color: $light;
            background-image: linear-gradient(45deg,$gradientFrom,$gradientTo);
        }
    }
    + .button {
    margin: 1em 0.5em;
  }
  }
</style>
