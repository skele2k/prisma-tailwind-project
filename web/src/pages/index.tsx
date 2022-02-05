import Head from "next/head";
import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { TagList } from "../components/TagList";

type HomePageType = {};

const HomePage: React.FC<HomePageType> = ({}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Tody app</title>
      </Head>
      <Navbar />
      <div className="block pt-4">
        <div className="mx-auto flex max-w-4xl flex-row ">
          <TagList />
          <div className="ml-5 inline-block">Todo-list</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
