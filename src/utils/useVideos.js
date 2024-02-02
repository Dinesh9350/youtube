import { useEffect, useState } from 'react';
import { YT_VIDEO_API } from '../utils/constants';

const useVideos = () => {
  const [videos, setVideos] = useState();
  const fetchData = async () => {
    const response = await fetch(YT_VIDEO_API);
    const json = await response.json();
    setVideos(json?.items);
    console.log(json?.items);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { videos, setVideos };
};

export default useVideos;
