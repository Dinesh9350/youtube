import React from 'react';
import ShimmerCard from './ShimmerCard';
import './Shimmer.css';

const Shimmer = () => {
  return (
    <div className='mx-10 lg:mx-32 mt-5'>
      <div className='flex flex-wrap justify-center'>
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;
