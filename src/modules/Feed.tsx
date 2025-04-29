import useControls, { FeedType } from "../stores/useControls";
import usePosts, { MetaCard, MetaHero, MetaSignUp, MetaVideo, Post } from "../stores/usePosts";
import { Card, Hero, SignUp, Video } from "../components";
import React from "react";

const Feed = () => {
  const posts = usePosts((state) => state.posts);
  const { setDraftPost } = useControls();

  const handleClick = (post: Post) => {
    setDraftPost(post)
  }

  console.log('posts: ', posts)

  return (
    <div className="flex w-full flex-wrap h-fit space-y-4 space-x-4 pl-4">
      {posts.map((post) => {
        switch (post.type) {
          case FeedType.CARDS:
            return <Card key={post.id} {...post as Post<MetaCard>} onClick={() => handleClick(post)} />
          case FeedType.HERO:
            return <Hero key={post.id} {...post as Post<MetaHero>} onClick={() => handleClick(post)} />
          case FeedType.VIDEO:
            return <Video key={post.id} {...post as Post<MetaVideo>} onClick={() => handleClick(post)} />
          case FeedType.SIGNUP:
            return <SignUp key={post.id} {...post as Post<MetaSignUp>} onClick={() => handleClick(post)} />
          default:
            return <React.Fragment key={post.id}></React.Fragment>
        }
      })}
    </div>
  );
}

export default Feed;