import React from 'react';

const Recommendation = () => {
  const img = 'https://i.ytimg.com/vi/X8PtFxXxa5k/maxresdefault.jpg';
  return (
    <div className='w-100 mx-5 mt-5 lg:mt-0 mb-3'>
      <div className='flex items-center lg:justify-between rounded-xl'>
        <div className=''>
          <img
            className='w-40 object-cover rounded-xl border z-0'
            src={img}
            loading='lazy'
            alt='img'
          />
        </div>
        <div className='px-2'>
          <h3 className='font-bold'>fdfd</h3>
          <h3>fdfdf</h3>
          <h3 className='text-xs text-gray-600 flex-wrap'>
            fdfd
          </h3>
          <h3 className='text-xs text-gray-600 flex-wrap'>
            fdfdf
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
