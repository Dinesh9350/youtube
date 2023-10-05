import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='grid grid-flow-col items-center  '>
      <div className='flex items-center col-span-1'>
        <img
          onClick={() => dispatch(toggleMenu())}
          className='h-8 mx-5 cursor-pointer'
          src='https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256'
          alt='hambruger menu'
        />
        <img
          className='h-16'
          src='https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg'
          alt='yt'
        />
      </div>
      <div className='col-span-10 pl-48 flex items-center '>
        <input
          className='w-1/2 px-5 py-2 rounded-l-full border border-gray-300'
          type='text'
          placeholder='Search'
        />
        <button className='border px-5 py-3 bg-gray-100 rounded-r-full'>
          <img
            className='h-4 cursor-text'
            src='https://www.svgrepo.com/show/7109/search.svg'
            alt='search'
          />
        </button>
      </div>
      <div className='col-span-1'>
        <img
          className='h-12 cursor-pointer'
          src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png'
          alt='user'
        />
      </div>
    </div>
  );
};

export default Header;
