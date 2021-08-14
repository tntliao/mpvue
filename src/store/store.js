import Vue from 'vue';
import Vuex from 'vuex';

import action from './action';
import state from './state';
import getter from './getter';
import mutations from './mutations';
import mutationType from './mutation-type';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getter,
    mutations,
    mutationType
})