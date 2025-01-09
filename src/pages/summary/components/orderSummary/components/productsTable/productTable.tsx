



import { TableHeader, TableColumn, TableBody, Table, TableCell, TableRow } from "@nextui-org/react"
import { orders } from "../../../../../../assets/data/products"
import AddProductButton from "../../../../../productDetails/components/addProductButton/addProductButton"



const ProductTable = () => {
  return (
    <>
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
orders.map((order) => (
    <TableRow key={order.id} className="hover:bg-gray-50">
          <TableCell>
            <div className="flex items-center">
              <img
                className="w-20 h-20 object-cover rounded-md border-1 border-gray-200"
                src={order.image}
                alt={order.description}
              />
              <div className="ml-3">
                <p className="text-sm font-semibold">{order.description}</p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <AddProductButton textColor={"dark"} iconColor={"gray-400"} numberOfProduct={order.number} />
          </TableCell>
          <TableCell>
            <p><span className="text-[#79747E] me-4">AED</span>{order.price}</p>
          </TableCell>
        </TableRow>
))
}</TableBody>
  </Table>
    </div>

    <div className="md:hidden">
      {
        orders.map((order) => (
          <div className="grid grid-cols-12 gap-3 my-3">
          <div className="col-span-12">
            <div className="flex flex-col">
            <div className="flex items-center">
                <img
                  className="w-20 h-20 object-cover rounded-md border-1 border-gray-200"
                  src={order.image}
                  alt={order.description}
                />
                <div className="ms-3">
                  <p className="text-sm font-semibold">{order.description}</p>
                </div>
                
              </div>
            <p><span className="text-[#79747E] me-4">AED</span>{order.price}</p>

            <AddProductButton textColor={"dark"} iconColor={"gray-400"} numberOfProduct={order.number} />
            </div>

          </div>
        </div>
        ))
      }
  
    </div>
     
    </>

  )
}

export default ProductTable