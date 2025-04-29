import { twMerge } from 'tailwind-merge';
import { Feed, Controls } from './modules';
import useControls, { ViewType } from './stores/useControls';

function App() {
  const { view } = useControls();

  return (
    <div className={twMerge('flex h-dvh justify-between', view === ViewType.DESKTOP ? 'w-full' : 'w-3/4 mx-auto')}>
      <div className='flex h-full w-3/4 overflow-auto'>
        <Feed />
      </div>
      <div className='flex h-full w-1/4 bg-slate-500 '>
        <Controls />
      </div>
    </div>
  )
}

export default App
