import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  imageURL: string;
}

const Card: React.FC<Props> = ({
  title,
  description,
  buttonText = 'Buy Now',
  imageURL
}) => {
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <Image src={imageURL} alt='Shoes' height={227} width={384} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
