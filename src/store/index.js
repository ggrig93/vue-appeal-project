import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
    state () {
        return {
            appeals: []
        }
    },

    getters: {
        appeals: state => state.appeals
    },

    mutations: {
        setAppeals(state, data) {
            state.appeals.push(data)
        },
        deleteAppeal(state, index) {
            state.appeals.splice(index, 1)
        },
        editAppeal(state, data) {
            state.appeals[data.index] = {...data.data}
        }
    },

    actions: {
        createAppeal({commit}, payload) {
            /*
            todo axios
            axios.post('/appeal', payload)
                .then( (response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            */
            commit("setAppeals", payload)
        },
    }
})