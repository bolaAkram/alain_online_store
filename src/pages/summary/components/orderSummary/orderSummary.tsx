import { Table,TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"


import AddProductButton from "../../../productDetails/components/addProductButton/addProductButton"

import { Product } from "../../../../core/types/types"
import DOMPurify from "dompurify";

interface OrderSummaryProps {
  productList:Product[]
}

const OrderSummary = ({productList}:OrderSummaryProps) => {
  return (
    <>
    <h3 className="font-semibold mb-3">Order Summary</h3>
 
 

    <div className="hidden md:block">
   <Table classNames={{
        th:"bg-transparent ",
    }
    
    } removeWrapper aria-label="Example empty table" className="w-full">
    <TableHeader>
      <TableColumn>Product</TableColumn>
      <TableColumn>QTY</TableColumn>
      <TableColumn>Amount</TableColumn>
    </TableHeader>
    <TableBody emptyContent={"No rows to display."}>{
productList.map((product) => (
    <TableRow key={product.id} className="hover:bg-gray-50">
          <TableCell>
            <div className="flex items-center">
              <img
                className="w-20 h-20 object-cover rounded-md border-1 border-gray-200"
                src={product.photo_url}
                alt={product.name_english}
              />
              <div className="ml-3">
              <div
                className="text-gray-600 mt-2 line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.short_description_english),
                }}
              ></div>
                
              </div>
            </div>
          </TableCell>
          <TableCell>
            <AddProductButton textColor={"dark"} iconColor={"gray-400"} numberOfProduct={product.quantity} productId={product.id}/>
          </TableCell>
          <TableCell>
            <p><span className="text-[#79747E] me-4">AED</span>{product.price}</p>
          </TableCell>
        </TableRow>
))
}</TableBody>
  </Table>
    </div>

    <div className="md:hidden">
      {
        productList.map((product) => (
          <div className="grid grid-cols-12 gap-3 my-3">
          <div className="col-span-12">
            <div className="flex flex-col">
            <div className="flex items-center">
                <img
                  className="w-20 h-20 object-cover rounded-md border-1 border-gray-200"
                  src={product.photo_url}
                  alt={product.name_english}
                />
                <div className="ms-3">
                <div
                className="text-gray-600 mt-2 line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.short_description_english),
                }}
              ></div>
                </div>
                
              </div>
            <p><span className="text-[#79747E] me-4">AED</span>{product.price}</p>

            <AddProductButton textColor={"dark"} iconColor={"gray-400"} numberOfProduct={product.quantity} productId={product.id}/>
            </div>

          </div>
        </div>
        ))
      }
  
    </div>
    </>
  )
}

export default OrderSummary