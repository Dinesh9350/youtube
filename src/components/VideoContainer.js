import React, { useEffect, useState } from 'react';
import { YT_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(YT_VIDEO_API);
      const json = await response.json();
      setVideos(json?.items);
      console.log(json?.items);
    };
    fetchData();
  }, []);
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
