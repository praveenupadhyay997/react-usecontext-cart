import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductSummary = () => {
  const { cart, setCart } = useCart();
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../src/assets/MOCK_DATA.json");
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        } else {
          const data = await response.json();
          setProductData(data.products); // Assuming the JSON structure based on the provided context
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  const addToCart = (id) => {
    const product = productData.find((product) => product.id === id);
    if (product) {
      setCart((currentCart) => [...currentCart, product]);
    }
  };

  return (
    <div className="flex flex-wrap  gap-2 justify-between items-center p-4 m-4 border rounded shadow">
      {productData.map((product) => (
        <div key={product.id} className="mb-4 bg-neutral-400 p-2 rounded">
          <div>
            <h2 className="font-bold  text-lg">{product.product_name}</h2>
            <p>{product.product_cost}</p>
          </div>
          <button
            className="bg-white text-black hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductSummary;
