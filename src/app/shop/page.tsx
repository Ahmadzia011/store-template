import NavBar from "@/src/component/Navbar";
import Products from "./products/page";
import { prisma } from "@/src/lib/prisma";

export default async function Shop() {

  const fetchedProducts = await prisma.product.findMany();
  console.log(fetchedProducts)

  return (
    <div>
      <NavBar />
      {/* Prop would be sent as this -> props = {products:PRODUCTS} */}
      <Products products={fetchedProducts}/> 
    </div>
  );
}

