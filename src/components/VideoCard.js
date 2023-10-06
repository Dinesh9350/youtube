import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(thumbnails);
  return (
    <div className='mt-2 sm:mb-0 mb-3 sm:m-2 sm:w-96 rounded-lg'>
      <img className='sm:rounded-lg' src={thumbnails.maxres.url} alt='' />
      <ul className='px-5 py-2 mb-2'>
        <li className='font-semibold'>{title}</li>
        <li className='text-md'>{channelTitle}</li>
        <li className='text-sm'>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
