import React from 'react'
import LubricantWhite from '../assets/images/webp/Lubricant_white.webp'
import LubricantGold from '../assets/images/webp/Lubricant.webp'
const Pioneers = () => {
  return (
    <section className='bg_black section_margin_-1 position-relative Pioneer_Section_padding_top Pioneer_Section_padding_bottom'>
      <div className=" position-absolute LubricantWhite d-none d-lg-block z-0">
        <img src={LubricantWhite} alt="LubricantWhite" className=' w-100 h-100' />
      </div>
      <div className=" position-absolute Lubricant_gold z-0 max_width_720 d-none d-lg-block" data-aos="fade-right">
        <img src={LubricantGold} alt="LubricantGold" className=' w-100 ' />
      </div>
      <div className=" container max_width_1140 ">
        <div className=" d-flex justify-content-end " data-aos="fade-left">
          <h2 className=' mb-0 font_size_lg line_height_lg font_family_poppins font_weight_800 text-white text-uppercase max_width_745'>Pioneers of  <span className=' fst-italic fw-normal lubricant_red position-relative z-1'>Lubricants </span>
            <span className=' d-inline-block'>& Grease Manufacturing</span></h2>
        </div>
        <div className=" row justify-content-end pioneer_section_para_padding" data-aos="fade-left">
          <div className=" col-12 col-lg-8 d-flex justify-content-end Lubricant_md_White">

            <div className="max_width_556 z-1 pt-4 pt-lg-0 pb-lg-0 pb-4">
              <p className=' mb-0 font_size_xlg line_height_xlg font_family_DM_Sans fw-normal text_black '>Atlantic Grease & Lubricants is one of the leading manufacturers in the <span className=' fw-bold'>automotive industry</span> providing high-performance products certified by renowned European and American automobile industries.</p>
              <button className='common_button text-white Read_button_margin_top font_family_chivo font_size_sm line_height_md font_weight_900 text-uppercase '>read our story</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pioneers