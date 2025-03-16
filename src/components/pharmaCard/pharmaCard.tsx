import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-[#008080]">
      {/* Image Section */}
      <div className="relative w-full h-48">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
        ) : null}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#008080] transition duration-300 ease-in-out hover:text-[#005555]">
          {title}
        </h3>
        <p className="text-gray-600 mt-2">
          {description.length > 75
            ? description.slice(0, 75) + ", ..."
            : description}
        </p>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-[#008080] opacity-0 transition-opacity duration-300 hover:opacity-20"></div>

        {/* Button */}
        <button className="mt-4 w-full py-2 text-white bg-[#008080] rounded-lg font-medium transition-all duration-300 hover:bg-[#005555]">
          View Product →
        </button>
      </div>
    </div>
  );
};

export default Card;
