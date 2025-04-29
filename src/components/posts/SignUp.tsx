import { twMerge } from "tailwind-merge";
import useControls from "../../stores/useControls";
import { MetaSignUp, Post } from "../../stores/usePosts";

type Props = Post<MetaSignUp> & { onClick: () => void; };

const SignUp = ({ id, meta, onClick }: Props) => {
  const { draftPost } = useControls();
  return (
    <div
      className={twMerge("flex flex-col h-fit gap-2 p-2 bg-gray-200 w-full rounded-lg shadow-md", id === draftPost?.id && "border-2 border-purple-500")}
      onClick={onClick}
    >
      <h2>SignUp</h2>
      <p>{meta.content}</p>
    </div>
  );
}

export default SignUp;