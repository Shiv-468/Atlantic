import React from 'react'
import Logo from '../assets/images/svg/logo.svg'
import SearchSvg from '../assets/images/svg/SearchSvg.svg'
const HeroSection = () => {
  return (
    <section className='Hero_Bg min_height_777 d-flex flex-column'>
      <nav className='nav_bg position-relative'>
        <div className=" container max_width_1360 nav_padding">
          <div className=" d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center gap-3 gap_55 ">
              <img src={Logo} alt="logo" />
              <ul className=' mb-0 ps-0 d-lg-flex align-items-center gap-3 gap_28 d-no ne d-lg-b lock mobile_view'>
                <li><a href="#" className=' text-white text-nowrap font_size_sm line_height_md font_family_DM_Sans fw-normal'>About Us</a></li>
                <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>Categories</a></li>
                <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>Services</a></li>
                <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>Testimonials</a></li>
                <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>Blogs</a></li>
              </ul>
            </div>
            <input type="checkbox" id="menu_box" hidden />
            <label htmlFor="menu_box" className='menu_box'>
            <span class="line"></span>
                    <span class="line mt-10 mb-10"></span>
                    <span class="line"></span>
            </label>
            <div className=" d-flex align-items-center gap-3 d-none d-lg-block">
              <form action="/action_page.php" className=' d-flex align-items-center gap-3'>
              <div className=" input_div d-flex align-items-center">
                <span>
                  <img src={SearchSvg} alt="SearchSvg" />
                </span>
              <input type="text" id='none' placeholder='Search' className=' py-3' />
              </div>
          <button className='common_button text-white text-nowrap font_family_chivo font_size_sm line_height_md font_weight_900 text-uppercase '>Get in touch</button>
          </form>
            </div>
          </div>
        </div>
      </nav>
      <div className=" d-flex align-items-end justify-content-start flex-grow-1">
        <div className=" container max_width_1140">
          <div className=" d-flex justify-content-between flex-column flex-sm-row align-items-start align-items-md-end pb-3">
            <h1 className=' mb-0 text-white max_width_800 font_weight_800 font_size_xl line_height_xl font_family_poppins text-uppercase'>Optimising your
              Vehicle <span className=' fw-normal'>Performance</span></h1>
            <button className='common_button mt-4 mt-sm-0 text-white font_family_chivo font_size_sm line_height_md font_weight_900 text-uppercase '>explore</button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection