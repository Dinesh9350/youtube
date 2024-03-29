import React from 'react';
import ytplaceholderimg from '../images/yt_placeholderimg.jpg';
import { formatNumber, getTimeDifference } from '../utils/helper';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const statsCount = formatNumber(statistics.viewCount);

  return (
    <div
      data-aos='fade-up'
      data-aos-offset='0'
      className='mt-2 sm:mb-0 mb-3 sm:m-2 sm:w-80 rounded-lg '
    >
      <img
        className='sm:rounded-lg'
        src={thumbnails ? thumbnails.maxres?.url : ytplaceholderimg}
        loading='lazy'
        alt='thumbnail'
      />
      <ul className='px-5 py-2 mb-2'>
        <li className='font-semibold flex-wrap'>{title}</li>
        <li className='text-md text-gray-600 flex-wrap mr-5'>{channelTitle}</li>
        <span className='flex sm:flex-none items-center'>
          <li className='text-sm text-gray-600 flex-wrap'>
            {statsCount} views · {getTimeDifference(publishedAt)}
          </li>
        </span>
      </ul>
    </div>
  );
};

export default VideoCard;
