import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData;
  // useEffect(() => {
  //   fetch("https://api.github.com/users/SekhAzharHossain")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     }, []);
  // });
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {/* GitHub followers: {data.followers} */}
      GitHub Name:{data.name}
      {/* GitHub url:{data.url} */}
      <img src={data.avatar_url} className=""></img>
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/SekhAzharHossain");
  return response.json();
};
