import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import Recommendation from './Recommendation';
import useVideos from '../utils/useVideos';

const WatchPage = () => {
  const { videos } = useVideos();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('v');

  return (
    <div className='m-0 p-0 xl:p-5 w-full'>
      <div className='xl:flex items-start'>
        <div className='container w-9/12'>
          {window.innerWidth > 1000 ? (
            <iframe
              className='rounded-lg absolute top-0 '
              width='900'
              height='500'
              src={
                'https://www.youtube.com/embed/' +
                search +
                'rel=0&amp;autoplay=1'
              }
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              className='sm:rounded-lg responsive-iframe '
              src={
                'https://www.youtube.com/embed/' +
                search +
                '?si=gAcf9AuUqIP_p-0f?rel=0&amp;autoplay=1'
              }
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className='xl:w-7/12'>
          {videos?.map((video) => (
            <Link key={video.id} to={'/watch?v=' + video.id}>
              <Recommendation info={video} />
            </Link>
          ))}
        </div>
      </div>
      <div className='my-5'>comments</div>
    </div>
  );
};

export default WatchPage;
