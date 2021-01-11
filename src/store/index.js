import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');


Vue.use(Vuex)

const postsModule = {
    state: {
        posts: [],
        users: [],
        pagePosts: 1,
        downloadCompleted: false,
    },
    getters: {
        posts: state => state.posts,
        allPostsLoaded: state => state.downloadCompleted,
        getPostById: state => id => state.posts.find(post => post.id === id),
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = state.posts.concat(posts);
            this.dispatch('isDownloadCompleted');
        },
        INCREMENT_PAGE(state) {
            state.pagePosts += 1;
            this.dispatch('getPosts');
            console.log(state.pagePosts);
        },
        SET_DOWNLOAD_COMPLETED(state) {
            state.downloadCompleted = !state.downloadCompleted;
        },
    },
    actions: {
        getPosts: (store) => {
            const requests = [];
            const request = axios.get(`https://5ff9ce0917386d0017b521c4.mockapi.io/fake-api/posts?page=${store.state.pagePosts}&limit=9&sortBy=createdAt&order=desc`);
            requests.push(request);
            return Promise.all(requests).then((response) => {
                const posts = response[0].data;
                store.commit('SET_POSTS', posts);
            }).catch(error => `Request failed for getPosts : ${error}`);
        },
        incrementPagePosts: (store) => {
            store.commit('INCREMENT_PAGE');
        },
        isDownloadCompleted: (store) => {
            const totalPosts = (store.state.pagePosts * 9) - store.state.posts.length;
            if (totalPosts > 0){
                store.commit('SET_DOWNLOAD_COMPLETED');
            }
        },
    },
}

const usersModule = {
    state: {
        users: [],
    },
    getters: {
        users: state => state.users,
        getUserByUserId: state => id => state.users.find(user => user.id === id),

    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },

    },
    actions: {
        getUsers: (store) => {
            const requests = [];
            const request = axios.get('https://5ff9ce0917386d0017b521c4.mockapi.io/fake-api/users');
            requests.push(request);
            return Promise.all(requests).then((response) => {
                const users = response[0].data;
                store.commit('SET_USERS', users);
            }).catch(error => `Request failed for getUsers : ${error}`);
        },

    },
}

export default new Vuex.Store({
    modules: {
        posts: postsModule,
        users: usersModule,
    },
})
