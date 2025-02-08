import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomeLayout from '../layout/homeLayout/homeLayout'
import Home from '../../pages/home/home'
import { ROUTES } from './Routes'
import Blogs from '../../pages/blogs/blogs'
import ContactUs from '../../pages/contactUs/contactUs'
import ProductDetails from '../../pages/productDetails/productDetails'
import ProductsFilterPage from '../../pages/products/products'
import Summary from '../../pages/summary/summary'
import BlogDetails from '../../pages/blogDetails/blogDetails'
import Policy from '../../pages/policy/policy'
import Returns from '../../pages/returns/returns'
import Terms from '../../pages/terms/terms'
import Orders from '../../pages/orders/orders'



export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.SLASH} element={<HomeLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SLASH} element={<Home />} />
        <Route path={ROUTES.BLOGS} element={<Blogs />} />
        <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
        <Route path={ROUTES.PRODUCTS_FILTER} element={<ProductsFilterPage />} />
        <Route path={ROUTES.SUMMARY} element={<Summary />} />
        <Route path={ROUTES.BLOG_DETAILS} element={<BlogDetails />} />
        <Route path={ROUTES.POLICY} element={<Policy />} />
        <Route path={ROUTES.RETURNS} element={<Returns />} />
        <Route path={ROUTES.TERMS} element={<Terms />} />
        <Route path={ROUTES.ORDERS} element={<Orders />} />
     
      </Route>
    )
  )