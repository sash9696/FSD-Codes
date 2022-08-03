import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="BOX OFFICE HITS" isLargeRow />
      <Row title="BOX OFFICE HITS" />
      <Row title="BOX OFFICE HITS" />
      <Row title="BOX OFFICE HITS" />
      <Row title="BOX OFFICE HITS" />
    </div>
  );
}

export default HomePage;
