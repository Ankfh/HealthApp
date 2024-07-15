import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../../redux/Slice/product/ProductSlice";
import CardContainer from "../../shared/Card/container/CardContainer";

const ProductScreenView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPerPage] = useState(3);
  const {
    data: products,
    error: allProductError,
    isLoading,
  } = useGetAllProductsQuery({ page: currentPage, limit: limitPerPage });

  const handleNextPage = () => {
    console.log(products.data.length,'products.data.length')
    if (products.data.length > 0) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  console.log(products, "========products");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (allProductError) {
    console.log(allProductError, "producterror");
    return <div>Error products</div>;
  }
  if (!products?.data) {
    return <div>No posts :(</div>;
  }
  

  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <div className=" w-full justify-center gap-10 flex flex-wrap">
          {products.data.map((item) => (
            <>
              <CardContainer
                ownerName={item?.userId?.userName}
                poductName={item?.productName}
                price={item?.price}
                imagesName={item?.imagesName}
              />
            </>
          ))}
        </div>
        <div className="w-full flex justify-between px-3">
          <div className="cursor-pointer" onClick={handlePreviousPage}>
            Back
          </div>
          <div className="cursor-pointer" onClick={handleNextPage}>
            Next
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreenView;
