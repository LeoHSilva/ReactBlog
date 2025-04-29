import { create } from "zustand";
import { Post } from "./usePosts";

export enum ViewType {
  MOBILE = "mobile",
  DESKTOP = "desktop",
}

export enum FeedType {
  HERO = "hero",
  CARDS = "cards",
  VIDEO = "video",
  SIGNUP = "signup",
}

export const FEED_TYPE_LIST = [FeedType.HERO, FeedType.CARDS, FeedType.VIDEO, FeedType.SIGNUP]


type Controls = {
  view: ViewType;
  setView: (view: ViewType) => void;
  isEditing: boolean;
  setEditing: (isEditing: boolean) => void;
  feedType: FeedType | null;
  setFeedType: (feedType: FeedType | null) => void;
  draftPost: Post | null;
  setDraftPost: (post: Post | null) => void;
}

const useControls = create<Controls>((set => ({
  view: ViewType.DESKTOP,
  isEditing: false,
  feedType: null,
  draftPost: null,
  setDraftPost: (post) => set({ draftPost: post, feedType: post?.type }),
  setView: (view) => set({ view }),
  setEditing: (isEditing) => set({ isEditing }),
  setFeedType: (feedType) => set({ feedType, draftPost: null }),
})));

export default useControls;
