import { Checkbox, CheckboxGroup, Spinner } from '@nextui-org/react'
import useCategory from './hooks/useCategory'


const Category = () => {
  const {CategoryList,isLoaded}=useCategory()
  return (
    
        <CheckboxGroup    defaultValue={["buenos-aires", "london"]} >
          {
           isLoaded?    <Spinner/>: CategoryList.map((category)=>(
              <Checkbox key={category.id} value={category.id.toString()}>{category.name_english}</Checkbox>
            ))
          }
     
    </CheckboxGroup>
    
  )
}

export default Category