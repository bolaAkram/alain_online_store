import { useState } from "react"
import product1 from '../../../../../../assets/images/products/product1.png';

const useBasket = () => {
    const [isOpenShoppingCard, setIsOpenShoppingCard] = useState(false);
    const numberOfItems = [
        {
            id:1,
            productImg:product1,
            disc:"Topicrem HYDRA + Rich Ultra Moisturizing Cream, 40ml",
            price:"160.00"
        },
        {
            id:2,
            productImg:product1,
            disc:"Topicrem HYDRA + Rich Ultra Moisturizing Cream, 40ml",
            price:"160.00"
        },
        {
            id:3,
            productImg:product1,
            disc:"Topicrem HYDRA + Rich Ultra Moisturizing Cream, 40ml",
            price:"160.00"
        }
    ]

    const [productCount,setProductCount]=useState(0)


  return {
    numberOfItems,
    productCount,setProductCount,
    isOpenShoppingCard, setIsOpenShoppingCard
  }
}

export default useBasket
