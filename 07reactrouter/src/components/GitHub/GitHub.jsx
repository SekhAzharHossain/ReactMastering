import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function GitHub() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/SekhAzharHossain")
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
      }, []);
  });
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub followers
    </div>
  );
}

export default GitHub;
