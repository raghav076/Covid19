import React from "react";
import DataDisplay from "../../components/DataDisplay";
import { Footer } from "../../components/Footer";
import Layout from "../../components/Layout";
import Search from "../../components/Search";

function Home() {
  return (
    <>
      <Layout />
      <Search />
      <DataDisplay />
      <Footer />
    </>
  );
}

export default Home;
