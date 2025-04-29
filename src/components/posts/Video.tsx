import { twMerge } from "tailwind-merge";
import useControls from "../../stores/useControls";
import { MetaVideo, Post } from "../../stores/usePosts";

type Props = Post<MetaVideo> & { onClick: () => void; };

const Video = ({ id, meta, onClick }: Props) => {
  const { draftPost } = useControls();
  return (
    <div
      className={twMerge("flex flex-col h-fit gap-2 p-2 bg-gray-200 w-full rounded-lg shadow-md", id === draftPost?.id && "border-2 border-purple-500")}
      onClick={onClick}
    >
      <h2>Video</h2>
      <h2 className="text-lg font-bold">{meta.title}</h2>
      <p>{meta.content}</p>
      <img height="32px" width="32px" src={meta.link} />
    </div>
  );
}

export default Video;