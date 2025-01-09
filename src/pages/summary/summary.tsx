
import Info from "../home/section/info/info"
import DeliveryAddress from "./components/deliveryAddress/deliveryAddress"
import Invoice from "./components/invoice/invoice"
import OrderSummary from "./components/orderSummary/orderSummary"


const Summary = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-12 lg:col-span-8">
      <OrderSummary />
      </div>
      <div className="md:col-span-12 lg:col-span-4">
      <div className="rounded-2xl shadow-lg ">
        <DeliveryAddress/>
        <Invoice/>
      </div>
      </div>
      
     
     
      </div>
      

        <hr className="my-8 w-full" />
        <Info/>
    </div>
  )
}

export default Summary