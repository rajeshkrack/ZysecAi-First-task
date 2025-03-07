"use client"; // Add this at the top

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
      setShowPopup(true);

      // Hide popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="relative max-w-xs mx-auto">
      {/* Subscription Box */}
      <section className="bg-gray-100 p-3 rounded-md shadow-md flex items-center">
        <Input
          type="email"
          placeholder="Your email"
          className="w-40 text-sm px-3 py-2 rounded-md bg-white text-black border border-gray-200 focus:ring-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={subscribed}
        />
        <div className="ml-auto">
          <Button
            className={`text-white px-4 py-2 text-sm rounded-md border transition-all duration-300 ${
              subscribed
                ? "bg-blue-600 border-blue-500 hover:bg-blue-700"
                : "bg-red-600 border-red-500 hover:bg-red-700 hover:pr-6 relative"
            }`}
            onClick={handleSubscribe}
            disabled={subscribed}
          >
            {subscribed ? "Subscribed" : "Subscribe"}
            {!subscribed && (
              <span className="absolute right-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                →
              </span>
            )}
          </Button>
        </div>
      </section>

      {/* Popup Notification */}
      {showPopup && (
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
          🎉 Thank you for subscribing! Enjoy our premium features.
        </div>
      )}
    </div>
  );
};

export default NewsLetter;
