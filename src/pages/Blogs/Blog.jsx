import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { getBlog } from "../../../features/actions/blogAction";
import { getBlog } from "../../features/actions/blogAction";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogData, isLoading } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog());
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  //  Hello
  return (
    <>
      <style jsx>{`
        .custom-loader { 
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: conic-gradient(#0000 10%, #766df4);
          -webkit-mask: radial-gradient(
            farthest-side,
            #0000 calc(100% - 8px),
            #000 0
          );
          animation: s3 1s infinite linear;
        }

        @keyframes s3 {
          to {
            transform: rotate(1turn);
          }
        }
      `}</style>

      <div className="container mx-auto pt-16">
        <div className="text-center">
          <span className="text-xs font-semibold text-gray-500 uppercase">
            Our Blogs
          </span>
          <h1 className="mt-2 text-3xl font-bold">News & Articles</h1>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>



      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:grid-rows-3 gap-4 gap-y-6 container mx-auto place-items-center py-5 ">


        {isLoading ? (
          Array(8).fill(true).map(i => {
            return <div class="w-full grid  bg-white border border-gray-200 rounded-lg shadow animate-pulse">
              <div class="rounded-t-lg h-60 w-full bg-gray-200"></div>
              <div class="p-5">
                <div class="h-6 mb-2 bg-gray-200 rounded w-3/4"></div>
                <div class="h-4 mb-3 bg-gray-200 rounded w-full"></div>
                <div class="h-6 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          })
        ) : Array.isArray(blogData) && blogData?.length > 0 && blogData?.map((item) => {
          return (
            <Link
              to={`/blog/${item?.blogSlug}`}
              state={item}
              class="max-w-sm grid w-full  bg-white border border-gray-200 rounded-lg shadow "
            >
              <img
                class="rounded-t-lg h-[15rem]  w-full object-cover"
                src={item?.banner}
                alt=""
                onError={(event) => {
                  event.target.src =
                    "/placeholder.jpg";
                  event.onerror = null;
                }}
              />
              <div class="p-5">
                <h5 class="mb-2 md:text-2xl  font-bold line-clamp-2 tracking-tight text-gray-900 ">
                  {item?.topic}
                </h5>
                <p class="mb-3 font-normal line-clamp-3 text-gray-700 ">
                  {item?.topicDescription}
                </p>
                <span
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
                </span>
              </div>
            </Link>
          );
        })}
      </div>

    </>
  );
};

export default Blog;
