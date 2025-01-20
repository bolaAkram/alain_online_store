import ProductsFilter from "./components/filter/filter";

import adProducts from "../../assets/images/ADProduct.png";
import fastShipping from "../../assets/images/fastShaap.png";
import customerServices from "../../assets/images/customerServices.png";
import onlinePayment from "../../assets/images/onlinePayment.png";
import Products from "./components/products/products";
import MobileFilter from "./components/mobileFilter/mobileFilter";
import useProductsFilterPage from "./hooks/useProductsFilterPage";
import { Spinner } from "@nextui-org/react";

const ProductsFilterPage = () => {
  const { productList, numberOfPages, maxPrice, minPrice, isLoaded } =
    useProductsFilterPage();
  return (
    <>
      {isLoaded ? (
        <Spinner />
      ) : (
        <>
          <MobileFilter
            price={{
              maxPrice,
              minPrice,
            }}
          />
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-3">
              <ProductsFilter
                price={{
                  maxPrice,
                  minPrice,
                }}
              />
            </div>
            <div className="md:col-span-9 md:px-10">
              <div className="flex justify-center items-center">
                <img src={adProducts} alt="" />
              </div>
              <div className="my-10">
                <h3 className="font-bold text-gray-400">
                  Looking For{" "}
                  <span className="text-secondary-600 ms-2">“Beauty Care”</span>
                </h3>
                <Products
                  productList={productList}
                  numberOfPages={numberOfPages}
                />
              </div>
            </div>
            <div className="md:col-span-12 mt-14">
              <hr className="bg-[#E5E5EA]" />

              <div className="mt-14  grid md:grid-cols-12  gap-6">
                <div className="md:col-span-4">
                  <div className="bg-[#6D59A6] bg-opacity-50 rounded-3xl">
                    <div className="bg-black rounded-t-3xl flex justify-center items-center py-5">
                      <p className="text-xl text-white font-bold">
                        Fast Shipping
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={fastShipping}
                        className="w-full h-64 object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="bg-[#6D59A6] bg-opacity-50 rounded-3xl">
                    <div className="bg-black rounded-t-3xl flex justify-center items-center py-5">
                      <p className="text-xl text-white font-bold">
                        Online Payment
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={onlinePayment}
                        className="w-full h-64 object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="bg-[#6D59A6] bg-opacity-50 rounded-3xl">
                    <div className="bg-black rounded-t-3xl flex justify-center items-center py-5">
                      <p className="text-xl text-white font-bold">
                        Customer Services
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={customerServices}
                        className="w-full h-64 object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* {isLoaded ? (
        <Spinner color="default" size="lg" />
      ) : (
        <>
          <MobileFilter price={price}/>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-3">
              <ProductsFilter price={{
                maxPrice,
                minPrice
              }}/>
            </div>
            <div className="md:col-span-9 md:px-10">
              <div className="flex justify-center items-center">
                <img src={adProducts} alt="" />
              </div>
              <div className="my-10">
                <h3 className="font-bold text-gray-400">
                  Looking For{" "}
                  <span className="text-secondary-600 ms-2">“Beauty Care”</span>
                </h3>
                <Products productList={productList} numberOfPages={numberOfPages}/>
              </div>
            </div>
            <div className="md:col-span-12 mt-14">
              <hr className="bg-[#E5E5EA]" />

              <div className="mt-14  grid md:grid-cols-12  gap-6">
                <div className="md:col-span-4">
                  <div className="bg-[#6D59A6] bg-opacity-50 rounded-3xl">
                    <div className="bg-black rounded-t-3xl flex justify-center items-center py-5">
                      <p className="text-xl text-white font-bold">
                        Fast Shipping
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={fastShipping}
                        className="w-full h-64 object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="bg-[#6D59A6] bg-opacity-50 rounded-3xl">
                    <div className="bg-black rounded-t-3xl flex justify-center items-center py-5">
                      <p className="text-xl text-white font-bold">
                        Online Payment
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={onlinePayment}
                        className="w-full h-64 object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="bg-[#6D59A6] bg-opacity-50 rounded-3xl">
                    <div className="bg-black rounded-t-3xl flex justify-center items-center py-5">
                      <p className="text-xl text-white font-bold">
                        Customer Services
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={customerServices}
                        className="w-full h-64 object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};

export default ProductsFilterPage;
