import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl'
import Slider from 'react-slick'
//import css files

class Specialty extends Component {
    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyen Khoa Pho bien</span>
                        <button className='btn-section'>Them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>co xuong khop 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>co xuong khop 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>co xuong khop 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>co xuong khop 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-specialty'></div>
                                <div>co xuong khop 1</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
