import React from "react";
import c from './Home.module.css'
import Carousel from "../../component/Carousel/Carousel";
import CarouselItem from "../../component/Carousel/CarouselItems/CarouselItem";
import Partners from "../../component/Partners/Partners";
import Category from "../../component/Category/Category";
import Specials from "../../component/Specials/Specials";
import FnE from "../../component/Fast&Easy/FnE";
import AmazeHol from "../../component/holidAmaze/AmazeHol";
import Promotion from "../../component/Promotion/promotion";
import NatureNCities from "../../component/NatureNCities/NatureNCities";
import Trendy from "../../component/Trendy/Trendy";
import AboutUs from "../../component/AboutUs/AboutUs";
import Footer from "../../component/Footer/footer";
import Modal from "../../component/modal/modal";

// Добавить Редакс и оптимизировать процесс рендринга карусели беря данные с базы
// Динамический увеличивать количество слайдов

const Home = (props) => {
    return(
        <div>
            <Carousel  carouselItems={[
            <CarouselItem>slide 1</CarouselItem>,
            // <CarouselItem>slide 2</CarouselItem>,
            // <CarouselItem>slide 3</CarouselItem>,
            
          ]}></Carousel>
            <Partners></Partners>
            <Category></Category>
            <Specials></Specials>
            <FnE></FnE>
            <AmazeHol></AmazeHol>
            <Promotion></Promotion>
            <NatureNCities></NatureNCities>
            <Trendy></Trendy>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
}

export default Home;