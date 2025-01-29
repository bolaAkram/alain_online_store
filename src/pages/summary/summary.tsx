import { Spinner } from "@nextui-org/react";
import Info from "../home/section/info/info";
import DeliveryAddress from "./components/deliveryAddress/deliveryAddress";
import Invoice from "./components/invoice/invoice";
import OrderSummary from "./components/orderSummary/orderSummary";
import useSummary from "./hooks/useSummary";
import { CartDetails } from "../../core/types/types";

const Summary = () => {
  const { isLoaded, cartDetails,productList } = useSummary();
  return (
    <div>
   
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-12 lg:col-span-8">
            {
                isLoaded?
                <div className="flex justify-center w-full h-screen">
              <Spinner/>
                 </div>: <OrderSummary productList={productList}/>
            }
           
          </div>
          <div className="md:col-span-12 lg:col-span-4">
            <div className="rounded-2xl shadow-lg ">
              <DeliveryAddress />
              <Invoice cartDetails={cartDetails as CartDetails}/>
            </div>
          </div>
        </div>
     
     

      <hr className="my-8 w-full" />
      <Info />
    </div>
  );
};

export default Summary;
