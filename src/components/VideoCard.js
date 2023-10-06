import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(thumbnails);
  return (
    <div className='mt-2 sm:mb-0 mb-3 sm:m-2 sm:w-96 rounded-lg'>
      <img className='sm:rounded-lg' src={thumbnails.maxres.url} alt='' />
      <ul>
        <li className='font-bold'>{title}</li>
        <li className='text-sm'>{channelTitle}</li>
        <li className='text-sm'>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
