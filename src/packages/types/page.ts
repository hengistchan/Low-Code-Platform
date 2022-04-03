import { Component } from "./component";

export type Page = {
  title: string;
  props: Partial<PageProps>;
  components: Component[];
};

export interface PageProps {
  backgroundColor: string;
  backgroundImage: string;
  backgroundRepeat: string;
  backgroundSize: string;
  height: string;
  icon: string;
}
