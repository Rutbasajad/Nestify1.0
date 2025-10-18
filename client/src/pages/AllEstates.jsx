import React from 'react';
import { roomsDummyData, assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';

const AllEstates = () => {
  const navigate = useNavigate();

  // Filter data
  const propertyTypes = ['Studio Apartment', '2 BHK Apartment', '3 BHK Apartment', 'Villa / Luxury Home'];
  const priceRanges = ['0 - 50,000', '50,000 - 100,000', '100,000 - 200,000', '200,000+'];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-9 md:pt-12 px-4 md:px-16 lg:px-24 xl:px-32">
      
      {/* Rooms List */}
      <div className="flex flex-col items-start text-left w-full lg:w-3/4">
        <h1 className="font-playfair text-4xl md:text-[40px]">Estates Available</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl">
          Explore exclusive deals and attractive property packages to help you find your perfect place with ease.
        </p>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="estate-img"
              title="View Estate Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />

            <div className="md:w-1/2 flex flex-col gap-2 mt-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>

              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>

              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>

              {/* Price */}
              <p className="text-xl font-medium text-gray-700 mt-2">
                ${room.price} / property
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="w-full lg:w-1/4 sticky top-20 flex flex-col gap-4">
        {/* Popular Filters */}
        <div>
          <h2 className="text-lg font-medium mb-2 text-gray-700">Popular Filters</h2>
          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 font-normal hover:bg-gray-50"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Price Ranges */}
        <div>
          <h2 className="text-lg font-medium mb-2 text-gray-700">Price</h2>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <button
                key={range}
                className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 font-normal hover:bg-gray-50"
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button className="text-red-500 font-medium mt-2 hover:underline">Clear Filters</button>
      </div>
    </div>
  );
};

export default AllEstates;
