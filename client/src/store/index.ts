import Vue from "vue";
import Vuex from "vuex";
import { FETCH_ALL_POST, FETCH_ONE_POST } from "./mutation-constants";
import axios, { Axios, AxiosResponse } from "axios";

Vue.use(Vuex);

interface IPostMedia {
  posts: IPostItems[];
  post: IPostItems;
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

export interface IPayloads {
  posts: IPostItems[];
}
export interface IPayload {
  post: IPostItems;
}

export default new Vuex.Store<IPostMedia>({
  state: {
    posts: [] as Array<IPostItems>,
    post: {} as IPostItems,
  },
  mutations: {
    [FETCH_ALL_POST](state: IPostMedia, { posts }: IPayloads) {
      state.posts = posts;
    },
    [FETCH_ONE_POST](state: IPostMedia, { post }: IPayload) {
      state.post = post;
    },
  },
  actions: {
    async getAllPost({ commit }) {
      const resp: AxiosResponse<IPayloads> = await axios.request({
        method: "GET",
        url: "/api/posts",
      });
      commit(FETCH_ALL_POST, resp.data);
    },

    async getOnePostById({ commit }, payload: { id: string }) {
      console.log({ id: payload.id });
      const resp: AxiosResponse<IPayload> = await axios.request({
        method: "GET",
        url: `/api/posts/${payload.id}`,
      });
      commit(FETCH_ONE_POST, resp.data);
    },
  },
  getters: {
    allPosts: ({ posts }): IPostItems[] => {
      return posts;
    },
    getOnePost: ({ post }): IPostItems => {
      return post;
    },
  },
  modules: {},
});
