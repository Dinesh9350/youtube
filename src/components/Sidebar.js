import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return (
      <div className='w-20 p-4 border-r text-xs flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <img
            className='h-8 mx-auto my-2 '
            src='https://th.bing.com/th/id/OIP.O23pWqRhxVaXwaMtN1j9vQHaHa?pid=ImgDet&rs=1'
            alt='home'
          />
          <h3>Home</h3>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img
            className='h-8 mx-auto my-2 '
            src='https://i.pinimg.com/236x/a6/e9/32/a6e932111d00d40b9fb129154bdbc616.jpg'
            alt='home'
          />
          <h3>Shorts</h3>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img
            className='h-6 mx-auto my-2 '
            src='https://th.bing.com/th/id/OIP.9TchOo6ojai9RvZmWoqRCQHaHa?pid=ImgDet&rs=1'
            alt='subscription'
          />
          <h3>Subscriptions</h3>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img
            className='h-6 mx-auto my-2 '
            src='https://mtyt.in/assets/img/lib.png?i=1'
            alt='library'
          />
          <h3>Library</h3>
        </div>
      </div>
    );
  }
  return (
    <div className='w-60 border-r text-sm p-4'>
      <div className='flex items-center p-2'>
        <img
          className='h-8 mr-5'
          src='https://th.bing.com/th/id/OIP.O23pWqRhxVaXwaMtN1j9vQHaHa?pid=ImgDet&rs=1'
          alt='home'
        />
        <h3>Home</h3>
      </div>
      <div className='flex items-center p-2 '>
        <img
          className='h-8 mr-5'
          src='https://i.pinimg.com/236x/a6/e9/32/a6e932111d00d40b9fb129154bdbc616.jpg'
          alt='shorts'
        />
        <h3>Shorts</h3>
      </div>
      <div className='flex items-center p-2'>
        <img
          className='h-6 mr-6'
          src='https://th.bing.com/th/id/OIP.9TchOo6ojai9RvZmWoqRCQHaHa?pid=ImgDet&rs=1'
          alt='subscription'
        />
        <h3>Subscriptions</h3>
      </div>
      <div className='flex items-center p-2'>
        <img
          className='h-6  mr-6'
          src='https://mtyt.in/assets/img/lib.png?i=1'
          alt='library'
        />
        <h3>Library</h3>
      </div>
      <div className='flex items-center p-2'>
        <img
          className='h-5 my-1 mr-6'
          src='https://w7.pngwing.com/pngs/761/659/png-transparent-computer-icons-history-history-angle-text-trademark.png'
          alt='History'
        />
        <h3>History</h3>
      </div>
      <div className='flex items-center p-2'>
        <img
          className='h-6 mr-5'
          src='https://mtyt.in/assets/img/lib.png?i=1'
          alt='library'
        />
        <h3>Your Videos</h3>
      </div>
      <div className='flex items-center p-2'>
        <img
          className='h-7 mr-4'
          src='https://static.thenounproject.com/png/1788272-200.png'
          alt='watch later'
        />
        <h3>Watch Later</h3>
      </div>
    </div>
  );
};

export default Sidebar;
