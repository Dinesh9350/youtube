import React, { lazy } from 'react';
// import { YT_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useVideos from '../utils/useVideos';
import Shimmer from './shimmer/Shimmer';

const VideoContainer = () => {
  const { videos, setVideos } = useVideos();

  // if (videos?.length === 0) {
  //   return <Shimmer />;
  // }
  return !videos ? (
    <Shimmer />
  ) : (
    <div className='flex justify-center items-start flex-wrap sm:mt-5'>
      {videos?.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
