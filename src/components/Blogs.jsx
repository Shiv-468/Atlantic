import React from 'react'
import CarImage from '../assets/images/webp/Car_img.webp'
const Blogs = () => {
    return (
        <section className=' bg_black section_margin_-1' id='Blogs'>
            <div className=" container max_width_1140 Blog_Section_Padding_bottom Blog_Section_Padding_top z-3">
                <h2 className=' mb-0 font_size_lg line_height_lg text-white text-uppercase font_weight_800 font_family_poppins text-center padding_botton_87 z-3'>explore our <span className=' fw-normal blog_text position-relative fst-italic z-3'> blogs</span></h2>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4" data-aos="zoom-in">
                        <div className="last_card">
                            <div className=" position-relative z-0">
                            <img src={CarImage} alt="CarImage" className=' w-100 pointer_event_none' />
                            <div className=" position-absolute blog_date_text">
                                <p className=' mb-0 text-white font_family_DM_Sans'>10-March-2024</p>
                            </div>
                            </div>
                            <p className=' mb-0 text-white text-capitalize fw-medium font_family_DM_Sans font_size_md line_height_md pt-3 padding_bottom_27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</p>
                            <button className='common_button text-white font_family_chivo font_size_sm line_height_md font_weight_900 text-uppercase '>read more</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" data-aos="zoom-in">
                        <div className="last_card">
                          <div className=" position-relative z-0">
                          <img src={CarImage} alt="CarImage" className=' w-100 pointer_event_none' />
                          <div className=" position-absolute blog_date_text">
                            <p className=' mb-0 text-white font_family_DM_Sans'>10-March-2024</p>
                          </div>
                          </div>
                            <p className=' mb-0 text-white text-capitalize fw-medium font_family_DM_Sans font_size_md line_height_md pt-3 padding_bottom_27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</p>
                            <button className='common_button text-white font_family_chivo font_size_sm line_height_md font_weight_900 text-uppercase '>read more</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mt-4 mt-md-0" data-aos="zoom-in">
                        <div className="last_card">
                            <div className=" position-relative z-0">
                            <img src={CarImage} alt="CarImage" className=' w-100 pointer_event_none' />
                            <div className=" position-absolute blog_date_text">
                                <p className=' mb-0 text-white font_family_DM_Sans'>10-March-2024</p>
                            </div>
                            </div>
                            <p className=' mb-0 text-white text-capitalize fw-medium font_family_DM_Sans font_size_md line_height_md pt-3 padding_bottom_27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</p>
                            <button className='common_button text-white font_family_chivo font_size_sm line_height_md font_weight_900 text-uppercase '>read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs