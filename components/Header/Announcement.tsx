import React from 'react';

interface Props {
  leftSideMessage: string;
}

const Announcement: React.FC<Props> = ({ leftSideMessage }) => {
  return (
    <div className='bg-secondary py-[10px] flex justify-center'>
      <div className='max-w-7xl'>
        <p className='text-sm'>{leftSideMessage}</p>
      </div>
    </div>
  );
};

export default Announcement;
