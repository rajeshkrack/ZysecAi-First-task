import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import NewsList from "@/components/NewsCard";
import AllNews from "@/components/AllNews";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default async function Home() {

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Banner />

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div>
          <NewsList></NewsList>
        </div>
      </div>

      
      <AllNews></AllNews>
      <NewsLetter />
      
    </div>
  );
}
