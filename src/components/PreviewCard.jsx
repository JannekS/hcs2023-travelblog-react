import { Link } from "wouter";

function PreviewCard({ blogPost }) {
  return (
    <div className="flex flex-col max-w-xl rounded-md shadow-lg bg-amber-50 text-orange-950">
      <div className="relative w-full h-64 rounded-t-md">
        <img
          src={blogPost.imageSrc}
          alt=""
          className="w-full h-64 object-cover overflow-hidden rounded-t-md"
        />
        <div className="absolute bottom-0 right-0 left-0 flex flex-row items-center justify-between space-x-2 bg-gradient-to-b from-transparent to-gray-900 p-4 text-orange-50">
          <div className="flex flex-row items-center space-x-1">
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <p>
              {blogPost.location}, {blogPost.country}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-4 font-title font-bold text-3xl line-clamp-1">
          {blogPost.title}
        </h3>
        <div className="flex flex-row items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          <p>July 2018</p>
        </div>
        <p className="line-clamp-3 my-4">{blogPost.text}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-2">
            <div className="rounded-full shadow-md w-12 h-12">
              <img
                src={blogPost.authorImg}
                alt=""
                className="rounded-full object-cover w-full h-full overflow-hidden"
              />
            </div>
            <p className="font-handwriting text-3xl">{blogPost.authorName}</p>
          </div>
          <Link
            href="#"
            className="pb-1 border-b-2 border-opacity-75 border-orange-900 hover:border-b-4 hover:pb-0"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
