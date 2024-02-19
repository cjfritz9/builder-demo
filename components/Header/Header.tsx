import React from 'react';
import MenuItem from './MenuItem';
import logo from '@/public/assets/logo.png';
import Image from 'next/image';

interface Props {
  menuItems: (typeof MenuItem)[];
}

const Header: React.FC<Props> = ({ menuItems }) => {
  return (
    <div className='w-full'>
      <div></div>
      <Image src={logo} alt='Brand Logo' />
    </div>
  );
};

export default Header;
