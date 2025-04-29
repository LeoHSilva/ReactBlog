import { faIdCard, faStar, faTableColumns, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useControls, { FeedType } from "../../stores/useControls";
import { twMerge } from "tailwind-merge";

const BlockControl = () => {
  const { feedType, setFeedType } = useControls();

  const handleChange = (type: FeedType) => {
    setFeedType(type)
  }

  return (
    <div className="flex flex-col w-full gap-2 pb-4">
      <h1 className="text-2xl font-bold">Add Blocks</h1>
      <div className="flex flex-row gap-2 flex-wrap ">
        <button
          type="button"
          className={twMerge("flex w-1/5 items-center justify-center p-2 rounded", feedType === FeedType.HERO ? "icon-selected" : "icon-normal")}
          onClick={() => handleChange(FeedType.HERO)}
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button
          type="button"
          className={twMerge("flex w-1/5 items-center justify-center p-2 rounded", feedType === FeedType.CARDS ? "icon-selected" : "icon-normal")}
          onClick={() => handleChange(FeedType.CARDS)}
        >
          <FontAwesomeIcon icon={faTableColumns} />
        </button>
        <button
          type="button"
          className={twMerge("flex w-1/5 items-center justify-center p-2 rounded", feedType === FeedType.VIDEO ? "icon-selected" : "icon-normal")}
          onClick={() => handleChange(FeedType.VIDEO)}
        >
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button
          type="button"
          className={twMerge("flex w-1/5 items-center justify-center p-2 rounded", feedType === FeedType.SIGNUP ? "icon-selected" : "icon-normal")}
          onClick={() => handleChange(FeedType.SIGNUP)}
        >
          <FontAwesomeIcon icon={faIdCard} />
        </button>
      </div>
    </div>
  );
}

export default BlockControl;