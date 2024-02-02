import React from 'react';
import ytplaceholderimg from '../images/yt_placeholderimg.jpg';
import { formatNumber, getTimeDifference } from '../utils/helper';

const Recommendation = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  console.log(thumbnails);
  const statsCount = formatNumber(statistics.viewCount);

  return (
    <div
      data-aos='fade-up'
      data-aos-offset='0'
      className=' mx-5 mt-5 lg:mt-0 mb-3'
    >
      <div className='flex items-center rounded-xl w-full'>
        <div className=''>
          <img
            className='w-36 rounded-xl'
            src={thumbnails ? thumbnails.medium?.url : ytplaceholderimg}
            loading='lazy'
            alt='img'
          />
        </div>
        <div className='px-3 w-48 lg:w-64'>
          <h3 className='font-bold line-clamp-2'>{title}</h3>
          <h3 className='text-xs text-gray-600 flex-wrap'>{channelTitle}</h3>
          <h3 className='text-xs text-gray-600 flex-wrap'>
            {statsCount} · {getTimeDifference(publishedAt)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
