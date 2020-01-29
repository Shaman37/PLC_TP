const state = {
    token: localStorage.getItem('access_token') || null , 
    uid : "",
    posts : [],
    name : ""
}

const getters = {
    getToken: state => state.token,
    loggedIn: state => {
        return state.token != null
    },
    getName : state => state.name,
    getId : state => state.uid,
    getPosts : state => state.posts
}

const actions = {}

const mutations = {
    setToken: (state, token) => state.token = token,
    setId: (state, uid) => state.uid = uid,
    setName: (state,name) => state.name = name,
    setPosts: (state,posts) => state.posts = posts,
    removeToken: (state) => state.token = null,
    removeId: (state) => state.uid = null,
    addPost: (state, post) => state.posts.push(post)
}

export default {
    state,
    getters,
    actions,
    mutations
}