import Link from 'next/link';
import React from 'react';

interface Props {
  itemName: string;
  subitems: {
    itemName: string;
    path: string;
  }[];
}

const MenuItem: React.FC<Props> = ({ itemName, subitems }) => {
  return (
    <div>
      <p>{itemName}</p>
      {subitems.map((item, i) => (
        <Link key={i} href={item.path}>
          {item.itemName}
        </Link>
      ))}
    </div>
  );
};

export default MenuItem;
