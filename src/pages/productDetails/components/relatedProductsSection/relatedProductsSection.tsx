

import { relatedProducts } from '../../../../assets/data/products'

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
                   brandImage={product.brand_photo_url}
                   price={product.price}
                   productEvaluation={product.rate}
                   // productImages={product.photos}
                   productImage={product.photo_url}
                   isNew={product.is_new}
                   description={product.short_description_english}
                   discount={product.have_discount}
                   isFavorite={product.is_wish_list}
                   numberOfProducts={product.quantity}
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