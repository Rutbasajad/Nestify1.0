import React, { useState } from 'react';
import { assets } from '../assets/assets';  

const Hero = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");  

  const locations = ["Chennai", "Bangalore", "Mumbai", "Delhi"];
  const propertyTypes = ["Home", "Apartment", "Land", "Plot", "Office Space"];

  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>
        The Ultimate Property Experience
      </p>
      <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-extrabold max-w-xl mt-4'>
        Find Your Dream Place
      </h1>
      <p className='max-w-130 mt-2 text-sm md:text-base'>
        Browse exclusive listings of apartments, houses, and commercial spaces in your city.
      </p>

      <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
        {/* Location */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.locationIcon} alt="" className='h-4'/>
            <label htmlFor="location">Location</label>
          </div>
          <select
            id="location"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-h-48 overflow-y-auto"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Select city</option>
            {locations.map((city, index) => (
              <option key={index} value={city.toLowerCase()}>{city}</option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.propertyIcon} alt="" className='h-4' />
            <label htmlFor="propertyType">Property Type</label>
          </div>
          <select
            id="propertyType"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            required
          >
            <option value="">Select type</option>
            {propertyTypes.map((type, index) => (
              <option key={index} value={type.toLowerCase()}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.priceRangeIcon} alt="" className='h-4' />
            <label htmlFor="priceRange">Price Range</label>
          </div>
          <input id="priceRange" type="text" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="e.g. ₹20L - ₹60L" />
        </div>

        {/* Bedrooms */}
        {(propertyType === "home" || propertyType === "apartment") && (
          <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
            <label htmlFor="bedrooms">Bedrooms</label>
            <input id="bedrooms" type="number" min={1} max={10} className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16" placeholder="2" />
          </div>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
          <img src={assets.searchIcon} alt="" className='h-4' />
          <span>Search Property</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
