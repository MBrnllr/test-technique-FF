<template>
    <div id="mainContent">
        <Header />
        <div id="pageContent">
            <PageHeader title="Partagez vos moments favoris" />
            <Post />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/organisms/Header.vue';
import PageHeader from '@/components/organisms/PageHeader.vue';
import Footer from '@/components/organisms/Footer.vue';
import Post from '@/components/organisms/Post.vue';

export default {
    name: 'SinglePost',
    components: {
        Header,
        PageHeader,
        Footer,
        Post,
    },
}
</script>

<style lang="scss">
    #mainContent {
        display: flex;
        flex-flow: column;
        flex: 1;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    #pageContent {
        display: flex;
        flex-flow: column;
        flex: 1;
        margin-bottom: 4em;
    }
</style>
