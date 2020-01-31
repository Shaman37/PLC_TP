const state = {
    token: localStorage.getItem('access_token') || null , 
    uid : "",
    posts : [],
    groups: [],
    chat : [],
    events: [],
    name : ""
}

const getters = {
    getToken: state => state.token,
    loggedIn: state => {
        return state.token != null
    },
    getName : state => state.name,
    getId : state => state.uid,
    getPosts : state => state.posts,
    getChat : state => state.chat,
    getEvents : state => state.events,
    getGroups : state => state.groups
}

const actions = {}

const mutations = {
    setToken: (state, token) => state.token = token,
    setId: (state, uid) => state.uid = uid,
    setName: (state,name) => state.name = name,
    setPosts: (state,posts) => state.posts = posts,
    setChat: (state,chat) => state.chat = chat,
    setEvents: (state,events) => state.events = events,
    setGroups: (state,group) => state.groups = group,

    removeToken: (state) => state.token = null,
    removeId: (state) => state.uid = null,
    removeEvent: (state,event) => {
      
    const index = state.events.indexOf(event);
    if (index > -1) {
      state.events.splice(index, 1);
      
    }},
    removeGroup: (state,index) => state.groups.splice(index, 1),
    
    addPost: (state, post) => state.posts.unshift(post),
    addMessage: (state, message) => state.chat.push(message),
    addMyEvent: (state, event) => state.events.push(event),
    addGroup: (state, group) => state.groups.push(group),
}

export default {
    state,
    getters,
    actions,
    mutations
}