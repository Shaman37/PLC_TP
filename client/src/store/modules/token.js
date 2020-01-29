const state = {
    token: localStorage.getItem('access_token') || null , 
    uid : localStorage.getItem('current_user') || null,
    name : null
}

const getters = {
    getToken: state => state.token,
    loggedIn: state => {
        return state.token != null
    },
    getName : state => state.name,
    getId : state => state.uid
}

const actions = {}

const mutations = {
    setToken: (state, token) => state.token = token,
    setId: (state, uid) => state.uid = uid,
    setName: (state,name) => state.name = name,
    removeToken: (state) => state.token = null,
    removeId: (state) => state.uid = null
}

export default {
    state,
    getters,
    actions,
    mutations
}