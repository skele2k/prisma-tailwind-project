import Head from "next/head";
import React from "react";
import { Navbar } from "../components/navbar/Navbar";

type HomePageType = {};

const HomePage: React.FC<HomePageType> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Tody app</title>
      </Head>
      <Navbar />
      <div className="mx-auto">Hello World~!</div>
    </div>
  );
};

export default HomePage;
