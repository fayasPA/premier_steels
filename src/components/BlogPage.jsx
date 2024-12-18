import React from "react";
import { blogPosts } from "../utils/constants";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="text-selRed py-8 px-4 sm:px-6 lg:px-8 bg-selWhite">
      <div className="max-w-7xl mx-auto">
        <p className="text-center mb-5 md:mb-10 uppercase text-lg md:text-xl">
          Discover comprehensive information on steel production, grades, and applications in various industries.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 text-black">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <h2 className="text-2xl font-semibold mb-2 text-selRed" itemProp="headline">
                  {post.title}
              </h2>
              <meta itemProp="datePublished" content={post.date} />
              <p className="mb-4" itemProp="description">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
