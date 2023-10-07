import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import Recommendation from './Recommendation';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('v');

  return (
    <div className='p-0 xl:p-5'>
      <div className='xl:flex'>
        <div className=''>
          {window.innerWidth > 500 ? (
            <iframe
              className='rounded-lg aspect-video'
              width='900'
              height='500'
              src={
                'https://www.youtube.com/embed/' +
                search +
                '?si=gAcf9AuUqIP_p-0f'
              }
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              className='sm:rounded-lg aspect-video '
              width='450'
              height='255'
              src={
                'https://www.youtube.com/embed/' +
                search +
                '?si=gAcf9AuUqIP_p-0f'
              }
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className=''>
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
          <Recommendation />
        </div>
      </div>
      <div className='my-5'>comments</div>
    </div>
  );
};

export default WatchPage;
