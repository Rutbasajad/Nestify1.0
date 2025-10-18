import React from 'react';
import { userBookingsDummyData, assets } from '../assets/assets';
import StarRating from '../components/StarRating';

const MyProperty = () => {
  // Filter bookings for properties owned by the logged-in user
  const myProperties = userBookingsDummyData.filter(
    booking => booking.hotel.owner._id === 'user_2unqyL4diJFP1E3pIBnasc7w8hP'
  );

  return (
    <div className="px-4 md:px-26 lg:px-24 xl:px-42 py-20">
      <h1 className="text-4xl font-playfair mb-6">My Properties</h1>

      {myProperties.map((booking) => (
        <div key={booking._id} className="flex flex-col md:flex-row gap-6 border-b border-gray-300 py-6">
          {/* Property Image */}
          <img
            src={booking.room.images[0]}
            alt={booking.room.roomType}
            className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow-lg"
          />

          {/* Property Details */}
          <div className="md:w-2/3 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">{booking.room.hotel.name}</h2>
            <p className="text-gray-500">{booking.room.hotel.address}, {booking.room.hotel.city}</p>
            <p className="text-gray-700 font-medium">{booking.room.roomType}</p>

            {/* Status */}
            <div className="flex gap-4 items-center mt-2">
              <span className={`px-3 py-1 rounded-full text-white ${booking.isPaid ? 'bg-green-500' : 'bg-orange-500'}`}>
                {booking.isPaid ? 'Payment Done' : 'Pending Payment'}
              </span>
              <span className={`px-3 py-1 rounded-full text-white ${booking.status === 'verified' ? 'bg-blue-500' : 'bg-gray-500'}`}>
                {booking.status === 'verified' ? 'Verified' : 'Not Verified'}
              </span>
              <span className={`px-3 py-1 rounded-full text-white ${booking.room.isAvailable ? 'bg-green-400' : 'bg-red-500'}`}>
                {booking.room.isAvailable ? 'Available' : 'Booked'}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dull transition">
                Edit Property
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
                View Bookings
              </button>
            </div>

            {/* Additional info */}
            <div className="flex items-center gap-2 mt-3">
              <StarRating />
              <p className="ml-2 text-gray-500">200+ reviews</p>
              <p className="ml-auto text-gray-700 font-medium">${booking.room.price} / property</p>
            </div>
          </div>
        </div>
      ))}

      {myProperties.length === 0 && (
        <p className="text-gray-500 mt-6">You do not own any properties yet.</p>
      )}
    </div>
  );
};

export default MyProperty;
