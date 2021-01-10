<template>
  <div class="postFooter"  >
    <div class="actionsBar">
        <div>
            <Button
            :label="`Like : ${$props.post.likes.length}`"
            theme="primary"
            :plain="false"
            />
            <Button
            label="Comment"
            theme="primary"
            :plain="false"
            />
        </div>
    </div>
    <div class="commentForm">
        <form>
            <InputText />
            <Button
                label="Envoyer"
                theme="primary"
                :plain="true"
            />
        </form>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/atoms/InputText.vue';
import Button from '@/components/atoms/Button.vue';

export default {
    name: 'PostHeader',
    components: {
        InputText,
        Button,
    },
    props: {
        post: Object,
    },
}
</script>

<style lang="scss">
  .postFooter {
      position: relative;
      display: flex;
      width: 100%;
      flex: 50% 0 1;
      flex-flow: column;
      border-top: 1px solid #eee;
      background-color: white;
      .actionsBar {
          display: flex;
          justify-content: space-between;
      }
      .commentForm {
         border-top: 1px solid #eee;
      }
  }
</style>
