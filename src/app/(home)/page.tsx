"use client";
import Footer from '@/components/Footer';
import Header from '../../components/Header';
import BannerSlider from './components/bannerSlider';
import Products from './components/products';



export default function Home() {
  return (
    <>
    <Header />
    <BannerSlider />
    <div className='px-80 py-20 bg-white'><Products /></div>
    <Footer/>
    </>
  );
}
