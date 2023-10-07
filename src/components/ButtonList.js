import React from 'react';
import Button from './Button';

const names = [
  'All',
  'Live',
  'Computer Programming',
  'Animae',
  'React',
  'React Native',
  'Redux',
  'Tailwind',
  'Javascript',
  'Gaming',
  'Music',
  'Android',
  'Death Note',
];
const ButtonList = () => {
  return (
    <div className='flex mx-2 sm:px-0 xl:justify-center  '>
      {names.map((name, index) => {
        return <Button key={index} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
