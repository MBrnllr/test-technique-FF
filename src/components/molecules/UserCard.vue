<template>
    <div class="userCard">
        <Badge :image="$props.user.avatar" />
        <div class="userDetails">
            <UserName
                :firstName="$props.user.firstName"
                :lastName="$props.user.lastName"
            />
            <div class="userJob">{{$props.user.job}} @ {{$props.user.company}}</div>
            <div class="userLocation">
                <Icon icon="location" />
                {{$props.user.location}}
            </div>
        </div>
    </div>
</template>

<script>
import Badge from '@/components/atoms/Badge.vue';
import UserName from '@/components/atoms/UserName.vue';
import Icon from '@/components/atoms/Icon.vue';

export default {
    name: 'UserCard',
    components: {
        Badge,
        UserName,
        Icon,
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
              color: $tertirary;
              font-size: .9em;
          }
          .userLocation {
              color: $tertirary;
              font-size: .9em;
              svg {
                  fill: $tertirary;
              }
          }
      }
  }
</style>
