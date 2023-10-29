import { createStore, Store } from 'vuex';
// import axios from 'axios';
import { STATE, USER, SUPPORT, API_RESPONSE } from '@/shared-types/index.ts';
import { Commit } from 'vuex/types/index.js';
import { getUsersFromApi } from '@/api/index.ts';

const state: STATE = {
  users: [],
  isLoadButtonActive: false,
  support: {
    url: '',
    text: ''
  },
  page: 1,
  per_page: 6,
  total: 0,
  total_pages: 0
};

const mutations = {
  SET_USERS(state: STATE, users: USER[]) {
    state.users = state.users.concat(users);
  },
  SET_LOAD_BUTTON_STATE(state: STATE, payload: boolean) {
    state.isLoadButtonActive = payload;
  },
  SET_DEFAULT_USERS(state: STATE, user: USER[]) {
    state.users = user;
  },
  SET_SUPPORT(state: STATE, support: SUPPORT) {
    state.support = support;
  },
  SET_PAGE_DATA(state: STATE, data: API_RESPONSE) {
    state.page = data.page;
    state.per_page = data.per_page;
    state.total = data.total;
    state.total_pages = data.total_pages;
  }
};

const actions = {
  async getUsers(context: { commit: Commit, state: STATE }, pageNumber: number) {
    try {
      const response = await getUsersFromApi(pageNumber);
      if (response.data.page > 1) {
        context.commit('SET_USERS', response.data.data);
        context.commit('SET_LOAD_BUTTON_STATE', false);
      } else {
        context.commit('SET_DEFAULT_USERS', response.data.data);
      }
      context.commit('SET_SUPPORT', response.data.support);
      context.commit('SET_PAGE_DATA', {
        page: response.data.page,
        per_page: response.data.per_page,
        total: response.data.total,
        total_pages: response.data.total_pages
      });
      if (response && response.data && response.data.data) {
        localStorage.setItem('users', JSON.stringify(state.users));
      }
      if (!response.data.data.length) {
        alert('Thats all users!')
        context.commit('SET_LOAD_BUTTON_STATE', true);
      }
    } catch (error) {
      console.error("There was an error fetching the users:", error);
    }
  },
  saveToLocalStorage(context: { state: STATE }) {
    if (context.state.users?.length) {
      localStorage.setItem('users', JSON.stringify(context.state.users));
    }
  },
  loadFromLocalStorage(context: { commit: Commit }) {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      context.commit('SET_USERS', JSON.parse(storedUsers));
    }
  }
};

const store: Store<STATE> = createStore({
  state,
  mutations,
  actions
});

const localUsers = localStorage.getItem('users')
if (localUsers?.length) {
  store.dispatch('loadFromLocalStorage');
}

export default store;
