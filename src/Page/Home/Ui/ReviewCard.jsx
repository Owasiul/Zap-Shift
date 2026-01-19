import React from "react";
import icon from "../../../assets/reviewQuote.png";
const ReviewCard = ({ info }) => {
  const { userName, review, user_photoURL, user_email } = info;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center p-3 sm:p-4 w-full h-full">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm">
          {/* Quote Icon */}
          <div className="mb-3 sm:mb-4">
            <img
              src={icon}
              alt="quote icon"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-4">
            {review}
          </p>

          {/* Divider */}
          <div className="border-t-2 border-dashed border-gray-300 mb-4 sm:mb-6"></div>

          {/* Author Info */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0">
              <img
                className="rounded-full w-full h-full object-cover"
                src={user_photoURL}
                alt={userName}
              />
            </div>

            {/* Name and Email */}
            <div className="min-w-0 flex-1">
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base truncate">
                {userName}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm truncate">
                {user_email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
