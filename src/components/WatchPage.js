import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('v');
  return (
    <div className='mt-3'>
      <div>
        <iframe
          className='rounded-lg'
          width='950'
          height='500'
          src={
            'https://www.youtube.com/embed/' + search + '?si=gAcf9AuUqIP_p-0f'
          }
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
