import React from "react";
import API from "@/components/product/mainapi";
import Carousal from "@/components/ui/carousal";
import ThreeGrid from "@/components/ui/ThreeGrid";

async function Home() {
  const products = await API();
  return (
    <div className="p-4">
      <ThreeGrid/>
      <Carousal products={products}/>
    </div>
  )
}

export default Home
