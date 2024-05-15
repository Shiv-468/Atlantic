import React from 'react'
import LubricantWhite from '../assets/images/webp/Lubricant_white.png'
import LubricantGold from '../assets/images/webp/Lubricant.png'
const Pioneers = () => {
  return (
  <section className='bg_black section_margin_-1 position-relative Pioneer_Section_padding_top Pioneer_Section_padding_bottom'>
     <div className=" position-absolute LubricantWhite z-0">
      <img src={LubricantWhite} alt="LubricantWhite" className=' w-100 h-100' />
    </div>
    <div className=" position-absolute Lubricant_gold z-0 max_width_680 d-none d-xl-block">
      <img src={LubricantGold} alt="LubricantGold" className=' w-100' />
    </div>
    <div className=" container max_width_1140 ">
      <div className=" d-flex justify-content-end ">
      <h2 className=' mb-0 font_size_lg line_height_lg font_family_poppins font_weight_800 text-white text-uppercase max_width_745'>Pioneers of  <span className=' fst-italic fw-normal lubricant_red position-relative z-1'>Lubricants </span> 
 & Grease Manufacturing</h2>
      </div>
      <div className=" row justify-content-end">
      <div className=" col-8 d-flex justify-content-end">
   
        <div className="max_width_556 z-1">
          <p className=' mb-0 font_size_xlg line_height_xlg font_family_DM_Sans fw-normal text_black pioneer_section_para_padding'>Atlantic Grease & Lubricants is one of the leading manufacturers in the <span className=' fw-bold'>automotive industry</span> providing high-performance products certified by renowned European and American automobile industries.</p>
          <button className='common_button text-white Read_button_margin_top font_family_chivo font_size_sm line_height_md font_weight_900 text-uppercase '>read our story</button>
        </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Pioneers