import React from 'react';

const ShimmerCard = () => {
  return (
    <div className='mt-5 sm:mb-0 mb-3 sm:m-2 sm:w-80  rounded-lg'>
      <div className='shimmerCard m-1 '>
        <div className='shimmerBG media'></div>
        <div className='p-32'>
          <div className='shimmerBG title-line'></div>
          <div className='shimmerBG title-line end'></div>

          <div className='shimmerBG content-line mt-24'></div>
          <div className='shimmerBG content-line'></div>
          <div className='shimmerBG content-line'></div>
          <div className='shimmerBG content-line'></div>
          <div className='shimmerBG content-line end'></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
