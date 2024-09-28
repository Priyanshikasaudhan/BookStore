import  {} from "react";
import list from '../../public/list.json'
import Cards from "./Cards";
import { Link } from "react-router-dom";

function x() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :) </span>
          </h1>
          <p className="mt-12 ">
            This app is designed to help students with their English paragraphs
            for exams like SSC and HSC. It includes a collection of paragraphs
            in simple English that can help students improve their English
            skills. The app works offline and online, and is optimized for
            mobile and tablets. This app is designed to help students with their
            English paragraphs for exams like SSC and HSC. It includes a
            collection of paragraphs in simple English that can help students
            improve their English skills. The app works offline and online, and
            is optimized for mobile and tablets.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-600 px-4 py-2 hover:bg-pink-700 duration-100 rounded-lg text-white">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default x;
