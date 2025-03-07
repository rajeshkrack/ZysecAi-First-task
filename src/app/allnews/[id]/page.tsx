import { notFound } from "next/navigation";

// Define the News Type
interface News {
  id: number;
  title: string;
  category: string;
  content: string;
}

// Your hardcoded news data (same as in `allcard.tsx`)
const newsData: News[] = [
  { id: 1, title: "AI Revolution in Healthcare", category: "Tech", content: "AI is transforming healthcare with new innovations." },
  { id: 2, title: "Stock Market Hits Record High", category: "Business", content: "The stock market has reached a record high today due to economic stability." },
  { id: 3, title: "New Sports League Announced", category: "Sports", content: "A new international sports league has been introduced." },
  { id: 4, title: "Election Updates 2025", category: "Politics", content: "The upcoming elections are seeing major changes in campaigns." },
  { id: 5, title: "Breakthrough in Cancer Research", category: "Health", content: "A new treatment for cancer is showing promising results." }
];

const NewsPage = ({ params }: { params: { id: string } }) => {
  // Find the news article based on the ID
  const news = newsData.find((n) => n.id.toString() === params.id);

  if (!news) {
    return notFound(); // Show 404 if news not found
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{news.title}</h1>
      <p className="text-sm text-gray-600">{news.category}</p>
      <p className="mt-4 text-lg">{news.content}</p>
    </div>
  );
};

export default NewsPage;
