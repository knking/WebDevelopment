import React, { useEffect, useState } from "react";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevdata) => [...prevdata, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 194) setDisable(true);
  }, [products]);

  if (loading) {
    return <div>Loading data, Please wait!</div>;
  }


  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-4 gap-2.5">
        {products && products.length
          ? products.map((items) => (
              <div className="p-5 border-1 flex flex-col gap-2.5">
                <img
                  src={items.thumbnail}
                  alt={items.id}
                  className="w-[200px] h-[200px]"
                />
                <p>{items.title}</p>
              </div>
            ))
          : null}
      </div>

      <button disabled={disable} className="cursor-pointer w-[200px] bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setCount(count + 1)}>
        Load more data
      </button>
      {
        disable ? <p>You have reached at 100 products</p> :null
      }
    </div>
  );
}

export default LoadMoreData;
