import React, { useEffect } from "react";
import blog from "../../../images/blog.png";
import funnydog from "../../../images/funnydog.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../../features/actions/blogAction";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
const Blog = () => {
  const { blogData } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog());
  }, []);

  return (
    <>
      <div className="container mx-auto ">
        <div className="text-center p-5">
          <span className="text-xs font-semibold text-gray-500 uppercase">
            Our Blog
          </span>
          <h1 className="mt-2 text-4xl font-bold">News & Articles</h1>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-rows-3 gap-4 gap-y-6 container mx-auto place-items-center py-5 ">
        {blogData?.map((item) => {
          return (
            <Link
              to="/blogDetails"
              state={item}
              class="max-w-sm grid  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a className="" href="#">
                <img
                  class="rounded-t-lg h-[15rem] border w-full object-cover"
                  src={item?.banner}
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl  font-bold line-clamp-1 tracking-tight text-gray-900 dark:text-white">
                    {item?.topic}
                  </h5>
                </a>
                <p class="mb-3 font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
                  {item?.topicDescription}
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
