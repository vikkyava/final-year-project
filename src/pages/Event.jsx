import news from "../content/news";


function EventPage() {
    return (<div>
      <h1 className="text-4xl font-bold mt-5">Recent News</h1>
      <div className="flex gap-10 items-center justify-center flex-wrap py-12">
        {news.map((newsItem) => (
            <div key={newsItem.id} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-96 h-60">
                <img src={newsItem.imageSrc} alt={newsItem.title} className="object-cover w-full h-full rounded-lg" />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <h1 className="text-2xl font-bold underline">{newsItem.title}</h1>
                <p className="text-gray-600">{newsItem.date}</p>
                <p className="text-gray-800">{newsItem.content}</p>
              </div>
            </div>
        ))}
    </div>
    </div>);
}

export default EventPage;