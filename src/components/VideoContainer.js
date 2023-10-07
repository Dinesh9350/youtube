import React from 'react';
import { YT_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useVideos from '../utils/useVideos';

const VideoContainer = () => {
  const { videos, setVideos } = useVideos();

  return (
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
