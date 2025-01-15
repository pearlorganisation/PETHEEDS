import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { getBlogBySlug } from "../../features/actions/blogAction";

const BlogDetails = () => {
  const { slug } = useParams()
  const { blogData: state, isLoading } = useSelector(state => state.blogs)
  const dispatch = useDispatch()
  console.log(slug, "slug")

  console.log("state::", state);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  useEffect(() => {
    if (slug) {
      dispatch(getBlogBySlug({ slug }))
    }
  }, [slug])
  return (
    <article className=" mt-10 min-h-[90vh] rounded-md duration-300 hover:shadow-sm container mx-auto py-12">
      {
        isLoading ? <div className="grid  gap-3 w-70% mx-auto animate-pulse">
          <div className="w-full max-h-40rem bg-gray-200 rounded-t-md h-64" />
          <div className="space-y-2 py-3 flex flex-col justify-center gap-1 items-start p-1">
            <div className="">
              <div className="h-8 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-full mt-4 mb-4" />
            </div>
          </div>
          <div className="h-64 bg-gray-200 rounded w-full" />
        </div> :

          <div className="grid  gap-3 w-[70%] mx-auto">
            <img
              src={`${state?.banner}`}
              loading="lazy"
              className="w-full max-h-[40rem] rounded-t-md"
              onError={(event) => {
                event.target.src =
                  "/placeholder.jpg";
                event.onerror = null;
              }}
            />
            <div className="space-y-2 py-3 flex flex-col justify-center gap-1 items-start p-1">

              <div className="">
                <p className=" text-2xl mt-1">{state?.topic}</p>
                <p>{state?.topicDescription}</p>
              </div>
            </div>
            <div>{parse(state?.description || '')}</div>
          </div>
      }
    </article>
  );
};

export default BlogDetails;
