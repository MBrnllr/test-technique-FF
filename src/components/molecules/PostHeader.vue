<template>
  <div class="postHeader"  >
    <UserCard :user="$props.user" />
    <Button
      :onClick="() => {}"
      label="Voir le profil"
      theme="primary"
      :plain="true"
    />
  </div>
</template>

<script>
import UserCard from '@/components/molecules/UserCard.vue';
import Button from '@/components/atoms/Button.vue';

export default {
    name: 'PostHeader',
    components: {
        UserCard,
        Button,
    },
    props: {
        user: Object,
    },
}
</script>

<style lang="scss">
  .postHeader {
      position: relative;
      display: flex;
      width: 100%;
      flex: 50% 0 1;
      border: 1px solid #eee;
      background-color: white;
      @media screen and (max-width: $breakpointMd){
        flex-flow: column;
      }
      .button {
        cursor: not-allowed;
      }
  }
</style>
