import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import "../../../../node_modules/swiper/swiper.min.css";
import "../../../../node_modules/swiper/modules/pagination.min.css";
import "../../../../node_modules/swiper/modules/effect-fade.min.css";
import "../../../../node_modules/swiper/modules/free-mode.min.css";
import "../../../../node_modules/swiper/modules/grid.min.css";
import "../../../../node_modules/swiper/modules/thumbs.min.css";
import { useState } from "react";

const HomeLayout = () => {
   const [isDark,setIsDark]=useState(false)
  return (
    <div className="relative flex flex-col h-screen font-Tajawal">
        <Navbar isDark={isDark} setIsDark={setIsDark}/>
        <Header/>
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 ">
        <Outlet/>
        </main>

        <div className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <footer className="w-full flex items-center  py-3">
        <Footer isDark={isDark}/>
        </footer>
        </div>
    </div>

  )
}

export default HomeLayout