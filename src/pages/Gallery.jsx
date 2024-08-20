import { gallery } from "../content/gallery";

function GalleryPage() {
  return (
    <div className="bg-gray-100 px-5 py-10 mx-auto flex flex-col items-center">
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {gallery.map((item) => (
          <div
            key={item.title}
            className="max-w-xs w-full relative group overflow-hidden shadow-lg rounded-lg"
          >
            <img
              className="w-full aspect-square mx-auto rounded-md"
              src={item.img}
              alt={`${item.title}'s profile`}
            />
            <div className="absolute inset-0 bg-black/30 hidden group-hover:block">
              <div className="text-center mt-4 absolute inset-0 top-1/2 bg-[#bb9457] p-4">
                <h2 className="text-lg text-dark-gray">{item.title}</h2>
                <p className="text-dark-gray text-lg">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
