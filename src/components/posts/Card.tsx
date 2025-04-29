import { twMerge } from "tailwind-merge";
import useControls from "../../stores/useControls";
import { MetaCard, Post } from "../../stores/usePosts";

type Props = Post<MetaCard> & { onClick: () => void; };

const Card = ({ id, meta, onClick }: Props) => {
  const { draftPost } = useControls();

  return (
    <div
      className={twMerge("flex flex-col h-fit gap-2 p-2 bg-gray-200 rounded-lg shadow-md", id === draftPost?.id && "border-2 border-purple-500")}
      onClick={onClick}
    >
      <h2>Card</h2>
      <h2 className="text-lg font-bold">{meta.title}</h2>
      <p>{meta.content}</p>
    </div>
  );
}

export default Card;