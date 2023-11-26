import { CircleNotch } from '@phosphor-icons/react/dist/ssr';
type Props = {};

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className='fallback-section'>
      <CircleNotch className='animate-spin text-8xl' />
    </div>
  );
}
