import { produce } from "immer";
import { create } from "zustand/react";
import { FeedType } from "./useControls";
import { persist } from "zustand/middleware";

export type MetaCard = {
  title: string;
  content: string;
}

export type MetaHero = {
  title: string;
  content: string;
  color: string;
}

export type MetaVideo = {
  title: string;
  content: string;
  link: string;
}

export type MetaSignUp = {
  content: string;
}

type AllPostMeta = MetaCard | MetaHero | MetaVideo | MetaSignUp;


export type Post<T = AllPostMeta> = {
  id: string;
  type: FeedType;
  meta: T
}

type Store = {
  posts: Post[];
  updatePost: (id: string, updatedPost: Partial<Post>) => void;
  deletePost: (id: string) => void;
  addPost: (post: Omit<Post, 'id'>) => void;
  clearPosts: () => void;
}

// const usePosts = create<Store>((set) => ({
//   posts: [],
//   updatePost: (id, updatedPost) => set(
//     produce((state: Store) => {
//       const index = state.posts.findIndex((post) => post.id === id);
//       if (index !== -1) {
//         state.posts[index] = { ...state.posts[index], ...updatedPost };
//       }
//     })
//   ),
//   deletePost: (id) => set(
//     produce((state: Store) => {
//       const index = state.posts.findIndex((post) => post.id === id);
//       if (index !== -1) {
//         state.posts.splice(index, 1);
//       }
//     })
//   ),
//   addPost: (post) => set(
//     produce((state: Store) => {
//       state.posts.push({
//         id: Math.random().toString(36).substring(2, 15),
//         ...post,
//       });
//     })
//   ),
//   clearPosts: () => set({ posts: [] }),
// }));
const usePosts = create<Store>()(
  persist<Store>(
    (set) => ({
      posts: [],
      updatePost: (id, updatedPost) => set(
        produce((state: Store) => {
          const index = state.posts.findIndex((post) => post.id === id);
          if (index !== -1) {
            state.posts[index] = { ...state.posts[index], ...updatedPost };
          }
        })
      ),
      deletePost: (id) => set(
        produce((state: Store) => {
          const index = state.posts.findIndex((post) => post.id === id);
          if (index !== -1) {
            state.posts.splice(index, 1);
          }
        })
      ),
      addPost: (post) => set(
        produce((state: Store) => {
          state.posts.push({
            id: Math.random().toString(36).substring(2, 15),
            ...post,
          });
        })
      ),
      clearPosts: () => set({ posts: [] }),
    }),
    {
      name: 'posts',
    }
  )
);

export default usePosts;