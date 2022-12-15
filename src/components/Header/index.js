import Link from 'next/link';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import HeaderIcon from './HeaderIcon';

import {
  Add,
  Close,
  Compass,
  Heart,
  Home,
  Messenger,
  Search,
  Person,
} from '../HeaderIcons';

const headerItems = [
  {
    icon: Home,
    url: '/',
    name: 'Home',
  },
  {
    icon: Messenger,
    url: '/',
    name: 'Messenger',
  },
  {
    icon: Add,
    url: '/',
    name: 'Add',
  },
  {
    icon: Compass,
    url: '/',
    name: 'Discover',
  },
  {
    icon: Heart,
    url: '/',
    name: 'Likes',
  },
  {
    icon: Person,
    url: '/',
    name: 'Profile',
  },
];

function Header() {
  return (
    <header className='flex h-20 items-center justify-around bg-white shadow-md '>
      <Link href='/'>
        <div className='select-none text-center font-serif text-3xl font-semibold tracking-widest  text-[#272627]'>
          Instagram
        </div>
      </Link>
      <div className='flex items-center rounded-sm bg-slate-100'>
        <label htmlFor='search'>
          <BsSearch className='ml-2 text-gray-500 ' />
        </label>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search'
          className=' w-72 rounded-sm  bg-slate-100 py-2 px-2 text-[#272627] outline-none placeholder:text-sm hover:bg-transparent focus:border-gray-400 focus:bg-transparent '
        />
      </div>
      <div className='flex items-center justify-center space-x-3'>
        <div className='flex space-x-4'>
          {headerItems.map((item) => (
            <HeaderIcon key={item.name} Icon={item.icon} />
          ))}
        </div>
        <button className='transform rounded-sm bg-blue-600 py-1 px-7 text-xl font-medium text-white transition active:scale-75 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-blue-300'>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
