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
];
const ButtonList = () => {
  return (
    <div className='flex px-2 sm:px-0  lg:justify-center '>
      {names.map((name) => {
        return <Button name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
