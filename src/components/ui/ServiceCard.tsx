import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <Card className="p-6 h-full flex flex-col">
        <div className="mb-4 p-3 bg-light rounded-lg w-16 h-16 flex items-center justify-center">
          <Image src={icon} alt={title} width={32} height={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4 text-primary font-medium">Learn more →</div>
      </Card>
    </Link>
  );
}
