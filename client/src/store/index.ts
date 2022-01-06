import Vue from "vue";
import Vuex from "vuex";
import { FETCH_ALL_POST } from "./mutation-constants";
import axios, { AxiosResponse } from "axios";

Vue.use(Vuex);

interface IPostMedia {
  posts: IPostItems[];
}

export interface IPostItems {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPayload {
  posts: IPostItems[];
}

export default new Vuex.Store<IPostMedia>({
  state: {
    posts: [],
  },
  mutations: {
    [FETCH_ALL_POST](state: IPostMedia, { posts }: IPayload) {
      state.posts = posts;
    },
  },
  actions: {
    async getAllPost({ commit }) {
      const resp: AxiosResponse<IPayload> = await axios.request({
        method: "GET",
        url: "/api/posts",
      });
      commit(FETCH_ALL_POST, resp.data);
    },
  },
  getters: {
    allPosts: ({ posts }): IPostItems[] => {
      return posts;
    },
  },
  modules: {},
});
