import React from 'react';

const Recommendation = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(thumbnails);
  return (
    <div className=' mx-5 mt-5 lg:mt-0 mb-3'>
      <div className='flex items-center rounded-xl'>
        <div className=''>
          <img
            className='w-64 object-cover rounded-xl border z-0'
            src={thumbnails.maxres?.url}
            loading='lazy'
            alt='img'
          />
        </div>
        <div className='px-2 w-96'>
          <h3 className='font-bold'>{title}</h3>
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
