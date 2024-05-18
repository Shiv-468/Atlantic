import React,{ useState }  from 'react'
import Logo from '../assets/images/svg/logo.svg'
import SearchSvg from '../assets/images/svg/SearchSvg.svg'
import DropDownArrow from '../assets/images/svg/DropDownArrow.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const HeroSection = () => {
  const [data , setdata]=useState(false);
  function view (){setdata(!data)
 if(data === false){
     document.body.classList.add("overflow_hidden");
 }
 else{
     document.body.classList.remove("overflow_hidden");
 }
 }
  return (
    <section className='Hero_Bg min_height_777 d-flex flex-column overflow-hidden'>
      <nav className='nav_bg position-relative' data-aos="fade-down">
        <div className=" container max_width_1360 nav_padding">
          <div className=" d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center gap-3 gap_55 ">
              <img src={Logo} alt="logo" className='pointer_event_none' />
              <ul className={`${data ? "navShow":"navhide"} gap-4 gap_28 d-flex align-items-center mobile_view ps-0 mb-0`}>
                <li><a href="#" className=' text-white nav_links text-nowrap font_size_sm line_height_md font_family_DM_Sans fw-normal'>About Us</a></li>
                <li class="nav-item dropdown nav_links">
                  <DropdownButton id="dropdown-basic-button" title="Categories">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </li>
                <li><a href="#" className=' text-white nav_links font_size_sm line_height_md font_family_DM_Sans fw-normal'>Services</a></li>
                <li><a href="#" className=' text-white nav_links font_size_sm line_height_md font_family_DM_Sans fw-normal'>Testimonials</a></li>
                <li><a href="#" className=' text-white nav_links font_size_sm line_height_md font_family_DM_Sans fw-normal'>Blogs</a></li>
              </ul>
            </div>
            <div onClick={view} className="menuicon d-flex flex-column gap-2 d-lg-none">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            <div className=" d-flex align-items-center gap-3 d-none d-lg-block">
              <form action="/action_page.php" className=' d-flex align-items-center gap-3'>
                <div className=" input_div d-flex align-items-center">
                  <span>
                    <img src={SearchSvg} alt="SearchSvg" className='pointer_event_none' />
                  </span>
                  <input type="text" id='none' placeholder='Search' className=' py-3 font_size_xmd line_height_sm text-white' />
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