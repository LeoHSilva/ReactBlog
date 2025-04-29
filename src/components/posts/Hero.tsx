import { twMerge } from "tailwind-merge";
import useControls from "../../stores/useControls";
import { MetaHero, Post } from "../../stores/usePosts";

type Props = Post<MetaHero> & { onClick: () => void; };

const Hero = ({ id, meta, onClick }: Props) => {
  const { draftPost } = useControls();

  return (
    <div
      className={twMerge(`flex flex-col h-fit gap-2 bg-gray-200 p-2 rounded-lg shadow-md`, id === draftPost?.id && "border-2 border-purple-500")}
      style={{
        color: meta.color
      }}
      onClick={onClick}
    >
      <h2>Hero</h2>
      <h2 className="text-lg font-bold">{meta.title}</h2>
      <p>{meta.content}</p>
    </div>
  );
}

export default Hero;