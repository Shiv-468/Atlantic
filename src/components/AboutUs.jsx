import React from 'react'
import AboutSectionEllipse from '../assets/images/webp/About_section_ellipse.png'
import NumbersGridImage from '../assets/images/webp/Numbers_grid_image.png'
import VW1 from '../assets/images/webp/VW1.png'
import VW2 from '../assets/images/webp/VW2.png'
import VW3 from '../assets/images/webp/VW3.png'
import mini1 from '../assets/images/webp/mini1.png'
import mini2 from '../assets/images/webp/mini2.png'
import mercadise from '../assets/images/webp/mercadise.png'
import CAT from '../assets/images/webp/CAT.png'
const AboutUs = () => {
    return (
        <section className=' bg_black position-relative section_margin_-1 About_section_padding_top'>
            <div className=" position-absolute z-1 Number_grid_image">
                <img src={NumbersGridImage} alt="Number_grid_image" className=' w-100 z-1' />
            </div>
            <div className=" position-absolute About_section_ellipse z-0">
                <img src={AboutSectionEllipse} alt="AboutSectionEllipse" className=' w-100 z-0' />
            </div>
            <div className=" Semicircle position-relative z-3">
            <div className=" position-absolute VW1 z-1">
<img src={VW1} alt="VW1" />
                </div>  
                 <div className=" position-absolute VW2 z-1">
                 <img src={VW2} alt="VW2" />

                </div>  
                 <div className=" position-absolute VW3 z-1">
                 <img src={VW3} alt="VW3" />
                </div> 
                <div className=" position-absolute mini1 z-1">
                 <img src={mini1} alt="VW3" />
                </div> 
                <div className=" position-absolute mini2 z-1">
                 <img src={mini2} alt="VW3" />
                </div> 
                <div className=" position-absolute mercadise z-1">
                 <img src={mercadise} alt="VW3" />
                </div> 
                <div className=" position-absolute CAT z-1">
                 <img src={CAT} alt="VW3" />
                </div> 

            </div>
            <div className="container max_width_1140 ">
                {/* logo_code */}








                <div className=" d-flex justify-content-center margin_top">
                    <h2 className=' mb-0 max_width_570 text-white text-uppercase font_size_lg line_height_lg text-center font_weight_800 font_family_poppins z-3'>our <span className=' fw-normal fst-italic'>numbers</span> say about us</h2>
                </div>
                <div className=" row About_row_padding_top About_row_padding_bottom">
                    <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center justify-content-lg-start">
                        <div className=" d-flex flex-column max_width_200">
                            <h3 className=' mb-0 font_size_2xl line_height_2xl font_family_poppins text-white font_weight_800'>20k+</h3>
                            <p className=' mb-0 font_size_sm line_height_md text-white text-center'>Happy customers</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-sm-0 d-flex justify-content-center">
                        <div className=" d-flex flex-column max_width_200">
                            <h3 className=' mb-0 font_size_2xl line_height_2xl font_family_poppins text-white font_weight_800'>35%</h3>
                            <p className=' mb-0 font_size_sm line_height_md text-white text-center'>Export Volume</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                        <div className=" d-flex flex-column max_width_200">
                            <h3 className=' mb-0 font_size_2xl line_height_2xl font_family_poppins text-white font_weight_800'>20%</h3>
                            <p className=' mb-0 font_size_sm line_height_md text-white text-center'>Market Share</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                        <div className=" d-flex flex-column max_width_200">
                            <h3 className=' mb-0 font_size_2xl line_height_2xl font_family_poppins text-white font_weight_800'>65+</h3>
                            <p className=' mb-0 font_size_sm line_height_md text-white text-center'>Country</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs