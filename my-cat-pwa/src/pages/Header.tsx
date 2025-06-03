import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/Button';
import { BUTTON_KIND, BUTTON_SIZE } from '@/components/Button/ButtonTypes';
import { useRef } from 'react';

export function Header() {
  const { signOut } = useAuth();

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleFocus = () => {
    if (buttonRef.current) {
      buttonRef.current.focus();
      signOut();
    }
  };

  return (
    <div
      className='sticky inset-x-0 top-0 z-20 grid grid-cols-[2.25rem,1fr,2.25rem] min-h-[3.75rem] 
      items-center gap-3 bg-white text-center text-2xl px-4 py-3 shadow-card'
    >
      <span className='text-black'>Cat PWA</span>
      <div className='flex justify-end mr-20 text-2xl'>
        <Button
          ref={buttonRef}
          onClick={signOut}
          text={'Sign Out'}
          size={BUTTON_SIZE.M}
          kind={BUTTON_KIND.PRIMARY}
        />
      </div>
      <div className='grid grid-cols-2 gap-10'>
        <Link
          to='/cats'
          className='text-center text-3xl bg-orange-200 text-black  rounded-2xl'
        >
          Cats
        </Link>
        <Link
          to='/info'
          className='text-center text-3xl bg-orange-200 text-black  rounded-2xl'
        >
          Info
        </Link>
      </div>
    </div>
  );
}
