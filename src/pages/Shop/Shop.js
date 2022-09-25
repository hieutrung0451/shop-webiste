import React from "react";
import Navbar from "../../components/Navbar";
import ShopItem from "./ShopItem";
import News from "../../components/News";
import Footer from "../../components/Footer";

const Shop = () => {
  return (
    <div className="shop">
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
          <div className="shop_sidebar_area">
            {/* ##### Single Widget ##### */}
            <div className="widget catagory mb-50">
              {/* Widget Title */}
              <h6 className="widget-title mb-30">Catagories</h6>
              {/*  Catagories  */}
              <div className="catagories-menu">
                <ul>
                  <li className="active">
                    <a href="#">Chairs</a>
                  </li>
                  <li>
                    <a href="#">Beds</a>
                  </li>
                  <li>
                    <a href="#">Accesories</a>
                  </li>
                  <li>
                    <a href="#">Furniture</a>
                  </li>
                  <li>
                    <a href="#">Home Deco</a>
                  </li>
                  <li>
                    <a href="#">Dressings</a>
                  </li>
                  <li>
                    <a href="#">Tables</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* ##### Single Widget ##### */}
            <div className="widget brands mb-50">
              {/* Widget Title */}
              <h6 className="widget-title mb-30">Brands</h6>
              <div className="widget-desc">
                {/* Single Form Check */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="amado"
                  />
                  <label className="form-check-label" htmlFor="amado">
                    Amado
                  </label>
                </div>
                {/* Single Form Check */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ikea"
                  />
                  <label className="form-check-label" htmlFor="ikea">
                    Ikea
                  </label>
                </div>
                {/* Single Form Check */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="furniture"
                  />
                  <label className="form-check-label" htmlFor="furniture">
                    Furniture Inc
                  </label>
                </div>
                {/* Single Form Check */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="factory"
                  />
                  <label className="form-check-label" htmlFor="factory">
                    The factory
                  </label>
                </div>
                {/* Single Form Check */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="artdeco"
                  />
                  <label className="form-check-label" htmlFor="artdeco">
                    Artdeco
                  </label>
                </div>
              </div>
            </div>
            {/* ##### Single Widget ##### */}
            <div className="widget color mb-50">
              {/* Widget Title */}
              <h6 className="widget-title mb-30">Color</h6>
              <div className="widget-desc">
                <ul className="d-flex">
                  <li>
                    <a href="#" className="color1" />
                  </li>
                  <li>
                    <a href="#" className="color2" />
                  </li>
                  <li>
                    <a href="#" className="color3" />
                  </li>
                  <li>
                    <a href="#" className="color4" />
                  </li>
                  <li>
                    <a href="#" className="color5" />
                  </li>
                  <li>
                    <a href="#" className="color6" />
                  </li>
                  <li>
                    <a href="#" className="color7" />
                  </li>
                  <li>
                    <a href="#" className="color8" />
                  </li>
                </ul>
              </div>
            </div>
            {/* ##### Single Widget ##### */}
            <div className="widget price mb-50">
              {/* Widget Title */}
              <h6 className="widget-title mb-30">Price</h6>
              <div className="widget-desc">
                <div className="slider-range">
                  <div
                    data-min={10}
                    data-max={1000}
                    data-unit="$"
                    className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    data-value-min={10}
                    data-value-max={1000}
                    data-label-result
                  >
                    <div className="ui-slider-range ui-widget-header ui-corner-all" />
                    <span
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      tabIndex={0}
                    />
                    <span
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      tabIndex={0}
                    />
                  </div>
                  <div className="range-price">$10 - $1000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="amado_product_area section-padding-100">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                    {/* Total Products */}
                    <div className="total-products">
                      <p>Showing 1-8 0f 25</p>
                      <div className="view d-flex">
                        <a href="#">
                          <i className="fa fa-th-large" aria-hidden="true" />
                        </a>
                        <a href="#">
                          <i className="fa fa-bars" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    {/* Sorting */}
                    <div className="product-sorting d-flex">
                      <div className="sort-by-date d-flex align-items-center mr-15">
                        <p>Sort by</p>
                        <form action="#" method="get">
                          <select name="select" id="sortBydate">
                            <option value="value">Date</option>
                            <option value="value">Newest</option>
                            <option value="value">Popular</option>
                          </select>
                        </form>
                      </div>
                      <div className="view-product d-flex align-items-center">
                        <p>View</p>
                        <form action="#" method="get">
                          <select name="select" id="viewProduct">
                            <option value="value">12</option>
                            <option value="value">24</option>
                            <option value="value">48</option>
                            <option value="value">96</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <ShopItem
                  image="/img/product-img/product1.jpg"
                  hoverImg="/img/product-img/product2.jpg"
                  price="180"
                  title="Modern Chair"
                />
                <ShopItem
                  image="/img/product-img/product2.jpg"
                  hoverImg="/img/product-img/product3.jpg"
                  price="180"
                  title="Modern Chair"
                />
                <ShopItem
                  image="/img/product-img/product3.jpg"
                  hoverImg="/img/product-img/product4.jpg"
                  price="180"
                  title="Modern Chair"
                />
                <ShopItem
                  image="/img/product-img/product4.jpg"
                  hoverImg="/img/product-img/product5.jpg"
                  price="180"
                  title="Modern Chair"
                />
                <ShopItem
                  image="/img/product-img/product5.jpg"
                  hoverImg="/img/product-img/product6.jpg"
                  price="180"
                  title="Modern Chair"
                />
                <ShopItem
                  image="/img/product-img/product6.jpg"
                  hoverImg="/img/product-img/product7.jpg"
                  price="180"
                  title="Modern Chair"
                />
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Pagination */}
                  <nav aria-label="navigation">
                    <ul className="pagination justify-content-end mt-50">
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          01.
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          02.
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          03.
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          04.
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Main Content Wrapper End ##### */}
        {/* ##### Newsletter Area Start ##### */}
        <News />
        {/* ##### Newsletter Area End ##### */}
        {/* ##### Footer Area Start ##### */}
        <Footer />
        {/* ##### Footer Area End ##### */}
        {/* ##### jQuery (Necessary for All JavaScript Plugins) ##### */}
        {/* Popper js */}
        {/* Bootstrap js */}
        {/* Plugins js */}
        {/* Active js */}
      </div>
    </div>
  );
};

export default Shop;
