import React from "react";
import API from "@/core/mainapi";
import Carousal from "@/components/carousal"

async function Home() {
  const products = await API();
  return (
    <div>
      <Carousal products={products}/>
    </div>
  )
}

export default Home
