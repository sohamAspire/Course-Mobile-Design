import React from 'react';
import { useLocation } from 'react-router-dom';
import { SECTIONS } from '../constants/constant';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

const OtherInfo = () => {
    const queryParams = useLocation();
    const active = new URLSearchParams(queryParams.search).get('title');

    const renderContent = () => {
        switch (active) {
            case SECTIONS.section1:
                return (
                    <Section2 />
                );
            case SECTIONS.section2:
                return (
                    <Section3 />
                );
            default:
                return (
                    <div className='flex justify-center items-center'>
                        Page Not Found.
                    </div>
                );
        }
    };

    return (
        <>
            {renderContent()}
        </>
    );
};

export default OtherInfo;
