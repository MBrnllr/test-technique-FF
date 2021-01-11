<template>
    <div class="comment">
        <UserName
            firstName="John"
            lastName="Doe"
        />
        <span>
            {{$props.message}}
        </span>
    </div>
</template>

<script>
import UserName from '@/components/atoms/UserName.vue';

export default {
    name: 'UserCard',
    components: {
        UserName,
    },
    props: {
        userId: Number,
        message: String,
    },
}
</script>

<style lang="scss">
  .comment {
      position: relative;
      font-style: italic;
      .userName {
          position: relative;
          padding-left: 50px;
          margin-right: .5em;
          font-style: normal;
          &:before {
             content: " ";
             position: absolute;
             top: 50%;
             left: 0;
             display: block;
             height: 2px;
             width: 40px;
             background-color: #ccc;
             margin-bottom: 1em;
             transform: translateY(-50%);
         }
      }
  }
</style>
