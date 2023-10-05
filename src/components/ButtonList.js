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
    <div className='flex mx-5 px-5'>
      {names.map((name) => {
        return <Button name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
