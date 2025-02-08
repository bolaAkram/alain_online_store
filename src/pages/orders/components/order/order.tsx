import {
    Badge,
    Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import AddProductButton from "../../../productDetails/components/addProductButton/addProductButton";
import DOMPurify from "dompurify";
import { topSellerProducts } from "../../../../assets/data/products";
const Order = () => {
  return (
    <div className="border-1 border-gray-300 rounded-3xl p-8">
      <Chip
        color="secondary"
        radius="sm"
        variant="faded"
        classNames={{
          base: "py-4 px-4",
          content: "font-bold text-sm",
        }}
        className="border-0 "
      >
        In Progress
      </Chip>

      <div className="my-8 border-b-2 border-dashed border-gray-300">
        <div className="flex items-center mb-8">
          <label htmlFor="" className="text-black font-normal text-sm">
            Order ID :
          </label>
          <p className="text-xl font-bold ms-2">#12345678</p>
        </div>
        <div className="grid grid-cols-12 mb-8">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center">
              <label htmlFor="" className="text-black font-normal text-sm">
                Address Name:
              </label>
              <p className="text-lg font-normal ms-2">Home</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center">
              <label htmlFor="" className="text-black font-normal text-sm">
                Date:
              </label>
              <p className="text-lg font-normal ms-2">12 Jan 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block border-b-2 border-dashed border-gray-300 pb-8 mb-8">
        <Table
          classNames={{
            th: "bg-transparent ",
          }}
          removeWrapper
          aria-label="Example empty table"
          className="w-full"
        >
          <TableHeader>
            <TableColumn>Product</TableColumn>
            <TableColumn>QTY</TableColumn>
            <TableColumn>Amount</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>
            {topSellerProducts.map((product) => (
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
                          __html: DOMPurify.sanitize(
                            product.short_description_english
                          ),
                        }}
                      ></div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                3
                </TableCell>
                <TableCell>
                  <p>
                    <span className="text-[#79747E] me-4">AED</span>
                    {product.price}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden border-b-2 border-dashed border-gray-300 pb-8 mb-8">
      
        {topSellerProducts.map((product) => (
          <div className="grid grid-cols-12 gap-3 my-3">
            <div className="col-span-12">
              <div className="flex flex-col">
                
                <div className="flex items-center">
                <Badge color="primary" content="2">
                  <img
                    className="w-20 h-20 object-cover rounded-md border-1 border-gray-200"
                    src={product.photo_url}
                    alt={product.name_english}
                  />
                  </Badge>
                  <div className="ms-3">
                    <div
                      className="text-gray-600 mt-2 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          product.short_description_english
                        ),
                      }}
                    ></div>
                  </div>
                </div>
                <p>
                  <span className="text-[#79747E] me-4">AED</span>
                  {product.price}
                </p>

              
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="flex justify-between items-center pb-8 mb-8">
        <p className="font-bold text-xl">Total</p>
        <div className="flex items-center">
            <p className="font-light text-xl">AED</p>
            <p className="text-xl font-bold ms-2 text-secondary-500">1000,00</p>
        </div>
      </div>

      <Button color="secondary" radius="full" className="w-full">Re-Order</Button>
    </div>
  );
};

export default Order;
