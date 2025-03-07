import { notFound } from "next/navigation";

// Define the News Type
interface News {
  id: number;
  title: string;
  category: string;
  content: string;
}

// Hardcoded news data (same as in `AllNews.tsx`)
const newsData: News[] = [
  { id: 1, title: "AI Revolution in Healthcare", category: "Tech", content: "AI is transforming the healthcare sector with advancements in diagnostics, treatment plans, and personalized medicine. Experts believe AI could revolutionize patient care by making it more efficient and accurate." },
  { id: 2, title: "Stock Market Hits Record High", category: "Business", content: "The stock market reached an all-time high today, driven by strong corporate earnings and investor confidence. Analysts predict continued growth in the coming months, but caution remains about potential market corrections." },
  { id: 3, title: "New Sports League Announced", category: "Sports", content: "A new global sports league has been announced, featuring top athletes from around the world. The league aims to bring new levels of competition and entertainment to fans." },
  { id: 4, title: "Election Updates 2025", category: "Politics", content: "With the 2025 elections approaching, candidates are ramping up their campaigns. Major policy discussions are taking center stage, shaping the political landscape for the coming years." },
  { id: 5, title: "Advancements in Quantum Computing", category: "Tech", content: "Quantum computing has reached a new milestone, with researchers demonstrating capabilities far beyond classical computers. This breakthrough could revolutionize industries such as cryptography and artificial intelligence." },
  { id: 6, title: "Global Warming Reaches Critical Levels", category: "Environment", content: "Scientists warn that global temperatures are reaching critical levels, with severe consequences for climate patterns, sea levels, and biodiversity. Urgent action is required to mitigate these effects." },
  { id: 7, title: "Champions League Final Results", category: "Sports", content: "The Champions League final concluded with an intense match, seeing an unexpected victory that left fans around the world in awe. Analysts are calling it one of the greatest finals in recent history." },
  { id: 8, title: "New Tax Policies Announced", category: "Politics", content: "The government has introduced new tax reforms for 2025, aiming to boost economic growth while ensuring fair taxation across different income groups." },
  { id: 9, title: "Electric Cars Overtake Petrol Sales", category: "Business", content: "For the first time in history, electric vehicle sales have surpassed petrol-powered cars, marking a significant shift towards sustainable transportation." },
  { id: 10, title: "Breakthrough in Cancer Research", category: "Health", content: "A revolutionary new cancer treatment has shown promising results in clinical trials, offering hope to millions of patients worldwide." }
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
