import React from 'react';
import Image from 'next/image';
import Card from './Card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
}

export default function TestimonialCard({ 
  quote, 
  name, 
  title, 
  company, 
  avatarUrl 
}: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="flex flex-col h-full">
        <div className="text-primary text-3xl mb-4">❝</div>
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image 
              src={avatarUrl} 
              alt={name} 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">{title}, {company}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
