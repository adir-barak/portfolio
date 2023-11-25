import { CircleNotch } from '@phosphor-icons/react/dist/ssr';
type Props = {};

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className='h-screen w-screen mx-auto grid place-items-center place-content-center text-8xl text-secondary-1'>
      <CircleNotch className='animate-spin' />
    </div>
  );
}
