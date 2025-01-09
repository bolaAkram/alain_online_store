

import { relatedProducts } from '../../../../assets/data/products'
import brand1 from '../../../../assets/svg/brands/larocheposay.svg'
import ProductCard from '../../../../core/components/productCard/productCard'
import Section from '../../../../core/components/section/section'
const RelatedProductsSection = () => {
  return (
    <>
    <div className="mt-10">
        <Section title="Related Products" titleButton={""}>
        <div className="grid grid-cols-12 gap-3">
            {
                relatedProducts.map((product) => (
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 '>
                    <ProductCard
                    key={product.id}
                        productID={product.id}
                        brandImage={brand1}
                        price={product.price}
                        productEvaluation="4.8"
                        productImages={product.photos}
                        description={product.description_english}
                    />
                    </div>
                ))
            }
       </div>
        </Section>
   
         
        </div>
    </>
  )
}

export default RelatedProductsSection