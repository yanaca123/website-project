import React from 'react';
import { classNames } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={classNames(
      'card',
      hover ? 'card-hover' : '',
      className
    )}>
      {children}
    </div>
  );
}