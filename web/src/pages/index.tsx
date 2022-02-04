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
      <Navbar styles="mb-6" />
      <div className="max-w-3xl mx-auto bg-red-200">Tody app</div>
    </div>
  );
};

export default HomePage;
