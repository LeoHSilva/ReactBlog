import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import useControls, { ViewType } from "../../stores/useControls";

const PreviewControl = () => {
  const { setView, view } = useControls();

  return (
    <div className="flex flex-col w-full gap-2 pb-4">
      <h1 className="text-2xl font-bold">Preview</h1>
      <div className="flex flex-row space-x-2 ">
        <button
          type="button"
          className={twMerge("flex w-1/2 items-center justify-center p-2 rounded", view === ViewType.MOBILE ? "icon-selected" : "icon-normal")}
          onClick={() => setView(ViewType.MOBILE)}
        >
          <FontAwesomeIcon icon={faMobile} />
        </button>
        <button
          type="button"
          className={twMerge("flex w-1/2 items-center justify-center p-2 rounded", view === ViewType.DESKTOP ? "icon-selected" : "icon-normal")}
          onClick={() => setView(ViewType.DESKTOP)}
        >
          <FontAwesomeIcon icon={faDesktop} />
        </button>
      </div>
    </div>
  );
}

export default PreviewControl;