import { faker } from "@faker-js/faker";
import _ from 'lodash';
import { FEED_TYPE_LIST, FeedType } from "../../stores/useControls";
import usePosts from "../../stores/usePosts";

const SeedButton = () => {
  const { addPost, posts, clearPosts } = usePosts()

  const generateRandomPost = () => {
    _.times(10, () => {

      const type = faker.helpers.arrayElement(FEED_TYPE_LIST);
      let meta = null;

      switch (type) {
        case FeedType.HERO:
          meta = {
            title: faker.book.title(),
            content: faker.book.publisher(),
            color: faker.color.rgb(),
          };
          break;
        case FeedType.SIGNUP:
          meta = {
            content: faker.book.publisher(),
          };
          break;
        case FeedType.VIDEO:
          meta = {
            title: faker.book.title(),
            content: faker.book.publisher(),
            link: faker.image.avatarGitHub(),
          };
          break;
        default:
          meta = {
            title: faker.book.title(),
            content: faker.book.publisher(),
          };
      }


      const randomPost = {
        label: faker.lorem.word(),
        type,
        meta,
      };
      addPost(randomPost);
    })
  }

  return (
    <>
      {posts.length === 0 && (

        <button
          type="button"
          onClick={generateRandomPost}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Random
        </button>
      )}
      {posts.length > 0 && (

        <button
          type="button"
          onClick={clearPosts}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Reset Posts
        </button>
      )}

    </>
  )
}

export default SeedButton;