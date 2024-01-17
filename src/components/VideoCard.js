import React from 'react';
import placeholderimg from '../images/placeholder_img.jpg';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=' mt-2 sm:mb-0 mb-3 sm:m-2 sm:w-80 rounded-lg '>
      <img
        className='sm:rounded-lg'
        src={thumbnails ? thumbnails.medium?.url : placeholderimg}
        loading='lazy'
        alt='thumbnail'
      />
      <ul className='px-5 py-2 mb-2'>
        <li className='font-semibold flex-wrap'>{title}</li>
        <span className='flex sm:flex-none items-center'>
          <li className='text-md text-gray-600 flex-wrap mr-5'>
            {channelTitle}
          </li>
          <li className='text-sm text-gray-600 flex-wrap'>
            {statistics.viewCount}
          </li>
        </span>
      </ul>
    </div>
  );
};

export default VideoCard;
