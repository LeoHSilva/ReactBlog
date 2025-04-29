import { BlockControl, FormDisplay, PreviewControl, SeedButton } from "../components";

const Controls = () => {

  return (
    <div className="flex flex-col w-full gap-4 p-4">
      <PreviewControl />
      <BlockControl />
      <FormDisplay />
      <SeedButton />
    </div>
  );
}

export default Controls;