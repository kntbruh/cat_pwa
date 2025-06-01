import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <div
      className='sticky inset-x-0 top-0 z-20 grid grid-cols-[2.25rem,1fr,2.25rem] min-h-[3.75rem] 
      items-center gap-3 bg-white text-center text-zinc-800 text-2xl px-4 py-3 shadow-card'
    >
      Header
      <div className='grid grid-cols-2 gap-10'>
        <Link
          to='/cats'
          className='text-center text-3xl bg-orange-200  rounded-2xl'
        >
          Cats
        </Link>
        <Link
          to='/info'
          className='text-center text-3xl bg-orange-200  rounded-2xl'
        >
          Info
        </Link>
      </div>
    </div>
  );
}

export default Header;
