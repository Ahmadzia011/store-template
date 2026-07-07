import NavBar from "@/src/component/Navbar";
import Products from "./products/page";
import { prisma } from "@/src/lib/prisma";

export default async function Shop() {

  let fetchedProducts;
  try{
   fetchedProducts = await prisma.product.findMany();
  }
  catch(e){
    console.log('Error while fetching products.')
    fetchedProducts = null
  }

  return (
    <div>
      <NavBar />
      {/* Prop would be sent as this -> props = {products:PRODUCTS} */}
      <Products products={fetchedProducts}/> 
    </div>
  );
}

