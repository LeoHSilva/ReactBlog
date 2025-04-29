import { useForm } from "react-hook-form";
import usePosts, { Post } from "../../stores/usePosts";
import useControls, { FeedType } from "../../stores/useControls";
import { useCallback, useEffect } from "react";

const defaultValues = {
  type: FeedType.CARDS
}

const HeroForm = () => {
  const { addPost, updatePost, deletePost } = usePosts();
  const { draftPost, setDraftPost } = useControls();
  const { register, handleSubmit, reset } = useForm<Post>({ defaultValues });


  const handleAddPost = useCallback((data: Post) => {
    if (draftPost) {
      updatePost(draftPost.id, data)
      setDraftPost(data);
    } else {
      addPost(data);
      reset(defaultValues);
    }
  }, [draftPost]);

  const handleDelete = useCallback(() => {
    if (draftPost?.id) {
      deletePost(draftPost.id);
      setDraftPost(null);
      reset(defaultValues);
    }
  }, [draftPost]);

  useEffect(() => {
    if (draftPost?.id) {
      reset(draftPost)
    } else {

      reset(defaultValues)
    }
  }, [draftPost])

  return (
    <form onSubmit={handleSubmit(handleAddPost)} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        {...register("meta.title", { required: true })}
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Content"
        {...register("meta.content", { required: true })}
        className="p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        {draftPost?.id ? 'Update Post' : 'Add Post'}
      </button>
      {draftPost?.id && (
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
          onClick={handleDelete}
        >
          Delete Post
        </button>
      )}
    </form>);
};

export default HeroForm;