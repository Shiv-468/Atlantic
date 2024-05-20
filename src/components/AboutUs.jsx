import React from 'react'
import AboutSectionEllipse from '../assets/images/webp/About_section_ellipse.webp'
import NumbersGridImage from '../assets/images/webp/Numbers_grid_image.webp'
import VW1 from '../assets/images/webp/VW1.webp'
import VW2 from '../assets/images/webp/VW2.webp'
import VW3 from '../assets/images/webp/VW3.webp'
import mini1 from '../assets/images/webp/mini1.webp'
import mini2 from '../assets/images/webp/mini2.webp'
import mercadise from '../assets/images/webp/mercadise.webp'
import CAT from '../assets/images/webp/CAT.webp'
const AboutUs = () => {
    return (
        <section className=' bg_black position-relative section_margin_-1 About_section_padding_top'>
            <div className=" position-absolute z-0 Number_grid_image">
                <img src={NumbersGridImage} alt="Number_grid_image" className=' w-100 z-0 pointer_event_none' />
            </div>
            <div className=" position-absolute About_section_ellipse z-0" >
                <img src={AboutSectionEllipse} alt="AboutSectionEllipse" className=' w-100 z-0 pointer_event_none' />
            </div>
            <div className=" Semicircle position-relative z-0" data-aos="zoom-in">
                <div className=" position-absolute all_logos VW1 z-1">
                    <img src={VW1} alt="VW1" className='pointer_event_none w-100' />
                </div>
                <div className=" position-absolute all_logos VW2 z-1" data-aos="zoom-in">
                    <img src={VW2} alt="VW2" className='pointer_event_none w-100' />

                </div>
                <div className=" position-absolute all_logos VW3 z-1" data-aos="zoom-in">
                    <img src={VW3} alt="VW3" className='pointer_event_none w-100' />
                </div>
                <div className=" position-absolute all_logos mini1 z-1" data-aos="zoom-in">
                    <img src={mini1} alt="mini1" className='pointer_event_none w-100' />
                </div>
                <div className=" position-absolute all_logos mini2 z-1" data-aos="zoom-in">
                    <img src={mini2} alt="mini2" className='pointer_event_none w-100' />
                </div>
                <div className=" position-absolute all_logos mercadise z-1" data-aos="zoom-in">
                    <img src={mercadise} alt="mercadise" className='pointer_event_none w-100' />
                </div>
                <div className=" position-absolute all_logos CAT z-1" data-aos="zoom-in">
                    <img src={CAT} alt="cat" className='pointer_event_none w-100' />
                </div>

            </div>
            <div className="container max_width_1140 " id='AboutUs'>
                <div className=" d-flex justify-content-center margin_top">
                    <h2 className=' mb-0 max_width_570 text-white text-uppercase font_size_lg line_height_lg text-center font_weight_800 font_family_poppins z-3'>our <span className=' fw-normal fst-italic position-relative z-1 number_text'> numbers </span> say about us</h2>
                </div>
                <div className=" row About_row_padding_top About_row_padding_bottom">
                    <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center justify-content-lg-start" data-aos="zoom-in">
                        <div className=" d-flex flex-column max_width_200">
                            <h3 className=' mb-0 font_size_2xl line_height_2xl font_family_poppins text-white font_weight_800 text-uppercase red_hover_text z-3'>20k+</h3>
                            <p className=' mb-0 font_size_sm line_height_md text-white text-center'>Happy customers</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-sm-0 d-flex justify-content-center" data-aos="zoom-in">
                        <div className=" d-flex flex-column max_width_200">
                            <h3 className=' mb-0 font_size_2xl line_height_2xl font_family_poppins text-white font_weight_800 red_hover_text z-3'>35%</h3>
                            <p className=' mb-0 font_size_sm line_height_md text-white text-center'>Export Volume</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end" data-aos="zoom-in">
                        <div className=" d-flex flex-column max_width_200">
                            <h3 className=' mb-0 font_size_2xl line_height_2xl font_family_poppins text-white font_weight_800 red_hover_text z-3'>20%</h3>
                            <p className=' mb-0 font_size_sm line_height_md text-white text-center'>Market Share</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0 z-3 d-flex justify-content-center justify-content-lg-end" data-aos="zoom-in">
                        <div className=" d-flex flex-column max_width_200 z-3">
                            <h3 className=' mb-0 font_size_2xl line_height_2xl font_family_poppins text-white font_weight_800 red_hover_text z-3'>65+</h3>
                            <p className=' mb-0 font_size_sm line_height_md text-white text-center'>Country</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs