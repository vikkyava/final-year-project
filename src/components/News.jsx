import React from "react";
import { Link } from "react-router-dom";
import news from "../content/news";
import NewsCard from "./NewsCard";

function News({ viewAll = false }) {
  const visibleNews = viewAll ? news : news.slice(0, 3);

  return (
    <div className="flex items-center flex-col gap-12">
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {visibleNews.map((newsItem, index) => (
          <NewsCard key={index} {...newsItem} />
        ))}
      </div>
      {news?.length > 3 && !viewAll && (
        <div className="h-8 px-5 bg-green-500 rounded-2xl flex items-center">
          <Link to="/news-and-events" className="text-white">
            View All News
          </Link>
        </div>
      )}
    </div>
  );
}

export default News;
