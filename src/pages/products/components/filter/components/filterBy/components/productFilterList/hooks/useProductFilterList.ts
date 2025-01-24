import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../../../../../../core/store/store"


const useProductFilterList = () => {
    const productsTypeList=[
        {
            id:1,
            name:"TopSeller",
        },
        {
            id:2,
            name:"Highlights",
        }
    ]
    const dispatch = useDispatch()

    const selectedProductType:string[] = useSelector((state:RootState)=>state.productFilter.productTypeFilter)

  return{
    productsTypeList,
    dispatch,
    selectedProductType
  }
}

export default useProductFilterList
