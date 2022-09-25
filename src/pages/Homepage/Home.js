import React from "react";
import Navbar from "../../components/Navbar";
import News from "../../components/News";
import Footer from "../../components/Footer";
import HomeItem from "./HomeItem";

const Home = () => {
  return (
    <div className="home">
      <div>
        {/* Search Wrapper Area Start */}
        <div className="search-wrapper section-padding-100">
          <div className="search-close">
            <i className="fa fa-close" aria-hidden="true" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="search-content">
                  <form action="#" method="get">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Type your keyword..."
                    />
                    <button type="submit">
                      <img src="img/core-img/search.png" alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Search Wrapper Area End */}
        {/* ##### Main Content Wrapper Start ##### */}
        <div className="main-content-wrapper d-flex clearfix">
          {/* Mobile Nav (max width 767px)*/}
          <div className="mobile-nav">
            {/* Navbar Brand */}
            <div className="amado-navbar-brand">
              <a href="index.html">
                <img src="img/core-img/logo.png" alt="" />
              </a>
            </div>
            {/* Navbar Toggler */}
            <div className="amado-navbar-toggler">
              <span />
              <span />
              <span />
            </div>
          </div>
          {/* Header Area Start */}
          <header className="header-area clearfix">
            {/* Close Icon */}
            <div className="nav-close">
              <i className="fa fa-close" aria-hidden="true" />
            </div>
            {/* Logo */}
            <div className="logo">
              <a href="index.html">
                <img src="img/core-img/logo.png" alt="" />
              </a>
            </div>
            {/* Amado Nav */}
            <Navbar />
            {/* Button Group */}
            <div className="amado-btn-group mt-30 mb-100">
              <a href="#" className="btn amado-btn mb-15">
                %Discount%
              </a>
              <a href="#" className="btn amado-btn active">
                New this week
              </a>
            </div>
            {/* Cart Menu */}
            <div className="cart-fav-search mb-100">
              <a href="cart.html" className="cart-nav">
                <img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span>
              </a>
              <a href="#" className="fav-nav">
                <img src="img/core-img/favorites.png" alt="" /> Favourite
              </a>
              <a href="#" className="search-nav">
                <img src="img/core-img/search.png" alt="" /> Search
              </a>
            </div>
            {/* Social Button */}
            <div className="social-info d-flex justify-content-between">
              <a href="#">
                <i className="fa fa-pinterest" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </div>
          </header>
          {/* Header Area End */}
          {/* Product Catagories Area Start */}
          <div className="products-catagories-area clearfix">
            <div className="amado-pro-catagory clearfix">
              <HomeItem
                image="img/bg-img/1.jpg"
                price="180"
                title="Modern Chair"
              />
              <HomeItem
                image="img/bg-img/2.jpg"
                price="180"
                title="Minimalistic Plant Pot"
              />
              <HomeItem
                image="img/bg-img/3.jpg"
                price="180"
                title="Modern Chair"
              />
              <HomeItem
                image="img/bg-img/4.jpg"
                price="180"
                title="Night Stand"
              />
              <HomeItem image="img/bg-img/5.jpg" price="18" title="Plant Pot" />
              <HomeItem
                image="img/bg-img/6.jpg"
                price="320"
                title="Small Table"
              />
              <HomeItem
                image="img/bg-img/7.jpg"
                price="318"
                title="Metallic Chair"
              />
              <HomeItem
                image="img/bg-img/8.jpg"
                price="318"
                title="Modern Rocking Chair"
              />
              <HomeItem
                image="img/bg-img/9.jpg"
                price="318"
                title="Home Deco"
              />
            </div>
          </div>
          {/* Product Catagories Area End */}
        </div>
        {/* ##### Main Content Wrapper End ##### */}
        {/* ##### Newsletter Area Start ##### */}
        <News />
        {/* ##### Newsletter Area End ##### */}
        {/* ##### Footer Area Start ##### */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
