"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const hardcodedNews: NewsItem[] = [
  {
    _id: "1",
    title: "Champions League Final: Exciting Showdown Between Top Teams",
    description:
      "The UEFA Champions League final is set to be a thrilling match as two of the best football clubs face off in a battle for the prestigious trophy.",
    imageUrl: "/images/sports.jpeg",
  },
  {
    _id: "2",
    title: "Stock Market Sees Record Highs Amid Tech Boom",
    description:
      "The stock market surged to an all-time high today as major tech companies reported record-breaking earnings, boosting investor confidence.",
    imageUrl: "/images/stocks.jpeg",
  },
  {
    _id: "3",
    title: "Home Decor Trends: Minimalism and Sustainable Designs Gain Popularity",
    description:
      "Interior designers highlight the growing trend of minimalism and eco-friendly materials in modern home decor, making sustainability a key focus in 2025.",
    imageUrl: "/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg",
  },
];

const NewsCard = () => {
  const [isSaved, setIsSaved] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem("savedNews") || "[]");
    const savedIds = savedArticles.reduce((acc: any, news: NewsItem) => {
      acc[news._id] = true;
      return acc;
    }, {});
    setIsSaved(savedIds);
  }, []);

  const handleSave = (news: NewsItem) => {
    const savedArticles = JSON.parse(localStorage.getItem("savedNews") || "[]");
    if (!isSaved[news._id]) {
      localStorage.setItem("savedNews", JSON.stringify([...savedArticles, news]));
      setIsSaved((prev) => ({ ...prev, [news._id]: true }));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hardcodedNews.map((news) => (
        <div
          key={news._id}
          className="border p-4 rounded-lg shadow-md flex flex-col justify-between"
        >
          <Link href={`/newsdetails/${news._id}`}>
            <Image
              src={news.imageUrl}
              alt={news.title}
              width={500}
              height={500}
              className="mb-5 h-56 w-full rounded-lg object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </Link>
          <h2 className="text-lg font-semibold my-2">{news.title}</h2>
          <p className="mb-4 text-gray-600">
            {news.description.length > 100 ? `${news.description.slice(0, 100)}...` : news.description}
          </p>
          <div className="flex justify-between items-center mt-auto">
            <Link href={`/newsdetails/${news._id}`}>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 cursor-pointer">
                Read More
              </Button>
            </Link>
            <Button
              className={`ml-4 px-4 py-2 ${
                isSaved[news._id]
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 transition-all duration-200 cursor-pointer"
              }`}
              onClick={() => handleSave(news)}
              disabled={isSaved[news._id]}
            >
              {isSaved[news._id] ? "Saved" : "Save"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
