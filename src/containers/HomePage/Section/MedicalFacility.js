import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl'
import Slider from 'react-slick'

class MedicalFacility extends Component {

    render() {
        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Bệnh viện tỉnh Phú Thọ</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Bệnh viện tỉnh Phú Thọ</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Bệnh viện tỉnh Phú Thọ</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Bệnh viện tỉnh Phú Thọ</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Bệnh viện tỉnh Phú Thọ</div>
                                <div>xo xuong khop 2</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
