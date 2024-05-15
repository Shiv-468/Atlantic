import React from 'react'

const AboutUs = () => {
    return (
        <section className=' bg_black'>
            <div className="container max_width_1140">
                {/* logo_code */}







                <div className=" d-flex justify-content-center">
                    <h2 className=' mb-0 max_width_570 text-white text-uppercase font_size_lg line_height_lg text-center font_weight_800 font_family_poppins'>our <span className=' fw-normal fst-italic'>numbers</span> say about us</h2>
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