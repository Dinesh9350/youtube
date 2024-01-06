import React from 'react';

const Recommendation = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(thumbnails);
  return (
    <div className=' mx-5 mt-5 lg:mt-0 mb-3'>
      <div className='flex items-center rounded-xl w-full'>
        <div className=''>
          <img
            className='w- lg:w-44 rounded-xl'
            src={thumbnails.maxres?.url}
            loading='lazy'
            alt='img'
          />
        </div>
        <div className='px-3 max-w-52 w-52 sm:w-64 '>
          <h3 className='font-bold overflow-hidden overflow-ellipsis whitespace-nowrap'>
            {title}
          </h3>
          <h3 className='text-xs text-gray-600 flex-wrap'>{channelTitle}</h3>
          <h3 className='text-xs text-gray-600 flex-wrap'>{channelTitle}</h3>
          <h3 className='text-xs text-gray-600 flex-wrap'>
            {statistics.viewCount}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
