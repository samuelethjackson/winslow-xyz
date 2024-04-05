import React from 'react';

interface CloseIconProps {
  color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ color = 'black' }) => {
  return (
    <div className='size-8 overflow-hidden'>
        <div className={`absolute border border-${color} w-8 rotate-45 mt-4`}/>
        <div className={`absolute border border-${color} w-8 -rotate-45 mt-4`}/>
    </div>
  );
};

export default CloseIcon;
