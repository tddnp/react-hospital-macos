import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import Slider from 'react-slick'

class HandBook extends Component {

    render() {
        return (
            <div className='section-share section-handBook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-img section-handBook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ</div>
                                    <div>Dentist</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-img section-handBook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ</div>
                                    <div>Dentist</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-img section-handBook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ</div>
                                    <div>Dentist</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-img section-handBook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ</div>
                                    <div>Dentist</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-img section-handBook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ</div>
                                    <div>Dentist</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-img section-handBook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ</div>
                                    <div>Dentist</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-img section-handBook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Giáo sư tiến sĩ</div>
                                    <div>Dentist</div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
