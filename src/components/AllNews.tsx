"use client";
import { useState } from "react";
import Link from "next/link";

interface News {
  id: number;
  title: string;
  category: string;
  content: string;
}

const newsData: News[] = [
  { id: 1, title: "AI Revolution in Healthcare", category: "Tech", content: "AI is transforming the healthcare sector..." },
  { id: 2, title: "Stock Market Hits Record High", category: "Business", content: "The stock market sees an all-time high due to..." },
  { id: 3, title: "New Sports League Announced", category: "Sports", content: "A new global sports league is set to launch..." },
  { id: 4, title: "Election Updates 2025", category: "Politics", content: "The latest updates on the 2025 elections..." },
  { id: 5, title: "Advancements in Quantum Computing", category: "Tech", content: "Quantum computers are now capable of..." },
  { id: 6, title: "Global Warming Reaches Critical Levels", category: "Environment", content: "Scientists warn about rising global temperatures..." },
  { id: 7, title: "Champions League Final Results", category: "Sports", content: "The final match ended with an exciting victory..." },
  { id: 8, title: "New Tax Policies Announced", category: "Politics", content: "Government introduces new tax reforms for 2025..." },
  { id: 9, title: "Electric Cars Overtake Petrol Sales", category: "Business", content: "EV sales surpass petrol vehicles for the first time..." },
  { id: 10, title: "Breakthrough in Cancer Research", category: "Health", content: "A new cancer treatment shows promising results..." },
];

const categories: string[] = ["All", "Tech", "Business", "Sports", "Politics", "Environment", "Health"];

const AllNews: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredNews = newsData.filter(
    (news) =>
      (selectedCategory === "All" || news.category === selectedCategory) &&
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-50 to-gray-100">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">📰 Explore All News</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search news..."
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-full md:w-1/4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news) => (
          <div 
            key={news.id} 
            className="p-5 border border-gray-200 rounded-xl shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-lg font-bold text-gray-900">{news.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{news.category}</p>
            <p className="text-sm text-gray-700">{news.content.substring(0, 50)}...</p>
            <Link 
              href={`/allnews/${news.id}`} 
              className="text-blue-600 font-medium mt-3 inline-block hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
