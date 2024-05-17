import React from 'react'
import AboutWhite from '../assets/images/webp/AboutWhite.png'
import BlueLiquid from '../assets/images/webp/BlueLiquid.png'
const Approvel = () => {
  return (
    <section className=' bg_black position-relative pb_64 section_margin_-1'>
      <div className=" position-absolute AboutWhite z-0">
        <img src={AboutWhite} alt="AboutWhite" className=' w-100' />
      </div>
      <div className=" position-absolute BlueLiquid z-0">
        <img src={BlueLiquid} alt="BlueLiquid" className=' w-100' />
      </div>
      <div className=" container max_width_1140   z-3">
        <h2 className=' mb-0 font_size_lg line_height_lg font_weight_800 font_family_poppins text-white text-uppercase Approvel_section_padding_top'>OEM  <span className=' fw-normal fst-italic'>Approvals</span></h2>
        <div className=" row z-3  approvel_para_padding">
          <div className=" col-8 z-3" >
            <div className="max_width_556 z-1">
              <p className=' mb-0 font_size_xlg line_height_xlg font_family_DM_Sans fw-normal text_black '>At Atlantic Grease and Lubricants, we have <span className=' text-black fw-bold'>secured approvals</span> leading automobile manufacturers. Thus, we demonstrate our commitment to delivering the best possible outcomes to our customers.</p>
             <p className=' mb-0 font_size_xlg line_height_xlg pt-3 font_family_DM_Sans fw-normal text_black '>Recognising the <span className=' text-black fw-bold'>significance of quality</span> to our valued customers, we uphold the utmost standards of excellence in all our endeavors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approvel