import React from 'react';
import './SassComponent.scss';

const SassComponent = () => {
    return(
        <div className="SassComponent">
            <div className="box red">레드</div>
            <div className="box orange">오렌지</div>
            <div className="box yellow">옐로</div>
            <div className="box green">그린</div>
            <div className="box blue">블루</div>
            <div className="box indigo">인디고</div>
            <div className="box violet">바이올렛</div>
        </div>
    );
};

export default SassComponent;
