"use client"

import React, { useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { ProductRatingPropType } from '@/types/Product';

const Rating = ({ rate, count }: ProductRatingPropType ) => {
    const [rating, setRating] = useState<number>(Math.round(rate));

  return (
    <div className="flex flex-row items-center gap-1">
      {[...Array(rating)].map((_, index) => {
        const starValue = index + 1;
        return (
            <IoStar
                key={index}
                className="text-lg text-yellow-400"
                color={starValue <= Math.round(rating) ? '#facc15' : '#e4e5e9'}
            />
        )
      })}
      <p className="ml-3 text-xs text-slate-400">
        {rate} ({count} Avaliações)
      </p>
    </div>
  );
};

export default Rating;
