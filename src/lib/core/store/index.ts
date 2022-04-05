import type { Component } from "@/lib/types/component";
import type { Page } from "@/lib/types/page";
import type { Nullable } from "types/index.d";
import { defineStore } from "pinia";

export type EditorState = {
  /**
   * 当前选中的组件
   */
  currentComponent: Nullable<string>;
  /**
   * 页面数据
   */
  page: Nullable<Page>;
  /**
   * 将page中的组件实例铺平
   */
  componentMap: { [componentId: string]: Component };
};

const editorStore = defineStore("editor", {
  state: (): EditorState => ({
    currentComponent: null,
    page: null,
    componentMap: {},
  }),
  getters: {},
  actions: {},
});

export default editorStore;
