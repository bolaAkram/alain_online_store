
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure } from '@nextui-org/react'

import Category from '../filter/components/filterBy/components/category/category';
import { Filter, CircleDollarSign, Star, Percent } from 'lucide-react';
import Brand from '../filter/components/brand/brand';
import FilterBy from '../filter/components/filterBy/filterBy';
import FilterSection from '../filter/components/filterSection/filterSection';
import Price from '../filter/components/price/price';
import RelatedProducts from '../filter/components/relatedProducts/relatedProducts';

import adFilter from '../../../../assets/images/AdFilter.png'


const MobileFilter = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
   
    const items = [
        {
            id: '1',
            title: 'Category',
            contant: <Category />
        },
        {
            id: '2',
            title: 'product',
            contant: <Category />
        },
        {
            id: '3',
            title: 'filter Name',
            contant: <Category />
        }
    ]

    return (
        <div className='md:hidden'>
            <Button className="capitalize  fixed z-50 left-0 top-0" onPress={() => onOpen()}>
            <Filter />
            </Button>
            <Drawer isOpen={isOpen} placement={"left"} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
                            <DrawerBody>

                                <div className='  p-5'>
                                    <FilterSection title='Filter By' icon={<Filter />}>
                                        <FilterBy items={items} />
                                    </FilterSection>

                                    <hr className='bg-[#E5E5EA]' />

                                    <div className='mt-6 mb-8'>
                                        <FilterSection title='Pricing' icon={<CircleDollarSign />}>
                                            <Price />
                                        </FilterSection>
                                    </div>

                                    <hr className='bg-[#E5E5EA]' />

                                    <div className='mt-6 mb-8'>
                                        <FilterSection title='Brand' icon={<Star />}>
                                            <Brand />
                                        </FilterSection>
                                    </div>

                                    <hr className='bg-[#E5E5EA]' />
                                    <div className='mt-6 mb-8'>
                                        <FilterSection title='On Sale' icon={
                                            <div className='border-1 rounded-full w-10 h-10 flex justify-center items-center'>
                                                <Percent />
                                            </div>
                                        }>
                                            <img className='my-5' src={adFilter} alt='' />

                                        </FilterSection>
                                    </div>


                                    <hr className='bg-[#E5E5EA]' />

                                    <div className='mt-6 mb-8'>
                                        <FilterSection title='Related Products' icon={
                                            <div className='border-1 rounded-full w-10 h-10 flex justify-center items-center'>
                                                <Percent />
                                            </div>
                                        }>
                                            <RelatedProducts />
                                            <RelatedProducts />
                                            <RelatedProducts />
                                        </FilterSection>
                                    </div>

                                </div>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default MobileFilter