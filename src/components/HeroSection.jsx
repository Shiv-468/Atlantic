import React from 'react'
import Logo from '../assets/images/svg/logo.svg'
const HeroSection = () => {
  return (
   <section className='Hero_Bg min-vh-100 d-flex flex-column'>
    <nav className='nav_bg'>
     <div className=" container max_width_1360 nav_padding">
     <div className=" d-flex align-items-center justify-content-between">
          <div className=" d-flex align-items-center gap_55">
            <img src={Logo} alt="logo" />
            <ul className=' mb-0 ps-0 d-flex align-items-center gap_28'>
              <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>About Us</a></li>
              <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>Categories</a></li>
              <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>Services</a></li>
              <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>Testimonials</a></li>
              <li><a href="#" className=' text-white font_size_sm line_height_md font_family_DM_Sans fw-normal'>Blogs</a></li>
            </ul>
          </div>
        </div>
     </div>
    </nav>
    <div className=" d-flex align-items-end justify-content-start flex-grow-1">
    <div className=" container max_width_1140">
    <div className=" d-flex justify-content-between align-items-end pb-3">
    <h1 className=' mb-0 text-white max_width_800 font_weight_800 font_size_xl line_height_xl font_family_poppins text-uppercase'>Optimising your 
Vehicle <span className=' fw-normal'>Performance</span></h1>
    </div>
    </div>
    </div>
   </section>
  )
}

export default HeroSection