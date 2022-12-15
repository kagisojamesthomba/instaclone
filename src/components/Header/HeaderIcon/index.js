import React from 'react';

const HeaderIcon = ({ Icon, name }) => {
  return (
    <div className='cursor-pointer rounded p-1 transition hover:bg-slate-200'>
      <Icon className='text-slate-700 hover:text-slate-800' size={25} />
    </div>
  );
};

export default HeaderIcon;
