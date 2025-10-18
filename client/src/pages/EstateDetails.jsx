import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roomsDummyData, assets, roomCommonData } from '../assets/assets';
import StarRating from '../components/StarRating';

const EstateDetails = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const selectedEstate = roomsDummyData.find((item) => item._id === id);
    if (selectedEstate) {
      setEstate(selectedEstate);
      setMainImage(selectedEstate.images[0]);
    }
  }, [id]);

  if (!estate) return null;

  return (
    <div className="py-24 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Title + Offer */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {estate.hotel.name}{' '}
          <span className="font-inter text-sm">({estate.roomType})</span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
          Exclusive Deal
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        <StarRating />
        <p className="ml-2 text-gray-600">200+ reviews</p>
      </div>

      {/* Address */}
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
        <span>{estate.hotel.address}</span>
      </div>

      {/* Images Section */}
      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        {/* Main Image */}
        <div className="w-full">
          <img
            src={mainImage}
            alt="Estate"
            className="w-full h-[400px] rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 gap-4">
          {estate.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Estate ${index}`}
              onClick={() => setMainImage(image)}
              className={`w-full h-48 object-cover rounded-xl shadow-md cursor-pointer transition-all ${
                mainImage === image ? 'outline outline-3 outline-orange-500' : ''
              }`}
            />
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-playfair mb-4">
          Property Highlights
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="px-3 py-2 bg-gray-100 rounded-lg text-xs">Spacious Area</div>
          <div className="px-3 py-2 bg-gray-100 rounded-lg text-xs">Prime Location</div>
          <div className="px-3 py-2 bg-gray-100 rounded-lg text-xs">Modern Infrastructure</div>
        </div>
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold mt-6">₹{estate.price}</p>

      {/* Contact Form */}
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-14 max-w-6xl">
        <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500 w-full">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="contact" className="font-medium">Contact Number</label>
            <input
              type="tel"
              id="contact"
              placeholder="Enter your phone number"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-8 py-3 md:py-4 text-base cursor-pointer mt-4 md:mt-0"
        >
          Contact Agent
        </button>
      </form>

      {/* Common Specs */}
      <div className="mt-12 space-y-4">
        {roomCommonData
          .filter((spec) => !['Double Bed', 'Single Bed'].includes(spec.title))
          .map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img src={spec.icon} alt={`${spec.title}-icon`} className="w-5 h-5" />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Seller Section */}
      <div className="flex flex-col items-start gap-4 mt-12">
        <div className="flex gap-4">
          <img
            src={estate.hotel.owner.image}
            alt="Seller"
            className="h-14 w-14 md:h-18 md:w-18 rounded-full object-cover"
          />
          <div>
            <p className="text-lg md:text-xl">Listed by {estate.hotel.name}</p>
            <div className="flex items-center mt-1">
              <StarRating />
              <p className="ml-2 text-gray-600">200+ reviews</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl border-y border-gray-300 my-6 py-6 text-gray-500">
          <p>
            This property offers modern amenities and is located in a highly
            sought-after area, making it a perfect choice for both investment
            and residential purposes.
          </p>
        </div>

        <button className="px-6 py-2.5 mt-2 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
          Schedule a Visit
        </button>
      </div>
    </div>
  );
};

export default EstateDetails;
