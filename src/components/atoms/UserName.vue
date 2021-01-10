<template>
  <div class="userName">
    {{$props.firstName}} {{$props.lastName}}
  </div>
</template>

<script>
export default {
    name: 'UserName',
    props: {
        firstName: String,
        lastName: String,
    },
}
</script>

<style lang="scss">
    .userName {
        text-transform: uppercase;
    }
</style>
