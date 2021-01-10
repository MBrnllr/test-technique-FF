<template>
    <div class="userCard">
        <Badge :image="$props.user.avatar" />
        <div class="userDetails">
            <UserName
                :firstName="$props.user.firstName"
                :lastName="$props.user.lastName"
            />
            <div class="userJob">{{$props.user.job}} @ {{$props.user.company}}</div>
            <div class="userLocation">{{$props.user.location}} </div>
        </div>
    </div>
</template>

<script>
import Badge from '@/components/atoms/Badge.vue';
import UserName from '@/components/atoms/UserName.vue';

export default {
    name: 'UserCard',
    components: {
        Badge,
        UserName,
    },
    props: {
        user: Object,
    },
}
</script>

<style lang="scss">
  .userCard {
      position: relative;
      display: flex;
      width: 100%;
      flex: 1;
      padding: 1em;
      .userDetails {
          margin-left: 12px;
          text-align: left;
          .userJob {
              font-size: .9em;
          }
          .userLocation {
              font-size: .9em;
          }
      }
  }
</style>
