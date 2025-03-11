import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';

interface CaseStudyCardProps {
  title: string;
  category: string;
  imageUrl: string;
  href: string;
}

export default function CaseStudyCard({ title, category, imageUrl, href }: CaseStudyCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-primary font-medium mb-2">{category}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="mt-4 text-primary font-medium">View case study →</div>
        </div>
      </Card>
    </Link>
  );
}
