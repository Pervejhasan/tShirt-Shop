// import React from 'react';
import { useLoaderData } from "react-router-dom";
import "./Home";
const Home = () => {
  const tShirts = useLoaderData();
  console.log(tShirts);
  return (
    <div>
      <h4>{tShirts.length}</h4>
    </div>
  );
};

export default Home;
