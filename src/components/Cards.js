import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { moviesRef } from "../firebase/firebase";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="w-30 md:w-full flex flex-wrap justify-between  p-3 mt-2 ">
      {loading ? (
        <div className="w-full flex justify-center items-center  h-96">
          <TailSpin />
        </div>
      ) : (
        data.map((e, i) => {
          return (
            <Link to={`/detail/${e.id}`}>
              <div
                key={i}
                className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer  mt-6 transition-all duration-500"
              >
                <img
                  className="h-60 md:h-60 sm:w-36 md:w-full"
                  src={e.image}
                  alt=""
                />
                <h1>
                  {/* <span className="text-gray-500">Name:</span> */}
                  {e.title}
                </h1>
                <h1 className="flex items-center ">
                  <span className="text-gray-500 mr-1">Rating:</span>
                  <ReactStars
                    size={20}
                    half={true}
                    value={e.rating / e.rated}
                    edit={false}
                  />
                </h1>
                <h1>
                  <span className="text-gray-500">Year:</span> {e.year}
                </h1>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;
