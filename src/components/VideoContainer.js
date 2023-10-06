import React, { useEffect, useState } from 'react';
import { YT_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(YT_VIDEO_API);
      const json = await response.json();
      setVideos(json?.items);
    };
    fetchData();
  }, []);
  return (
    <div className='flex justify-center items-start flex-wrap mt-5'>
      {videos?.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
