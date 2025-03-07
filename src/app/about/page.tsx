"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const AboutPage = () => {
  const [savedNews, setSavedNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem("savedNews") || "[]");
    setSavedNews(savedArticles);
  }, []);

  const handleUnsave = (id: string) => {
    const updatedArticles = savedNews.filter((news) => news._id !== id);
    setSavedNews(updatedArticles);
    localStorage.setItem("savedNews", JSON.stringify(updatedArticles));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Saved News</h2>

      {savedNews.length === 0 ? (
        <p>No saved news articles yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedNews.map((news) => (
            <div key={news._id} className="border p-4 rounded-md shadow-sm">
              <Image
                src={news.imageUrl}
                alt={news.title}
                width={500}
                height={500}
                className="mb-5 md:h-56 rounded"
              />
              <h2 className="text-xl font-semibold my-3">{news.title}</h2>
              <p className="mb-4">{news.description}</p>
              <Button className="ml-4 bg-red-500" onClick={() => handleUnsave(news._id)}>
                Unsave
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutPage;
