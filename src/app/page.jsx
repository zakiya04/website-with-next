import React from "react";
import API from "@/components/mainapi";
import Carousal from "@/components/carousal"

async function Home() {
  const products = await API();
  return (
    <div className="p-4">
      <Carousal products={products}/>
    </div>
  )
}

export default Home
