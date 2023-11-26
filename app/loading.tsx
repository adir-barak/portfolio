import { Viewport } from 'next';
import { CircleNotch } from '@phosphor-icons/react/dist/ssr';

export const viewport: Viewport = {
  themeColor: '#9B15F4',
};

type Props = {};

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className='fallback-section'>
      <CircleNotch className='animate-spin text-8xl' />
    </div>
  );
}
