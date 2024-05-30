import React from 'react';

const GBtns = (props) => {
    return (
        <div className='gbtn' onClick={props.onClick}>
            {props.imgBefore && <img src={props.imgBefore} alt="" className='img-before' />}
            {props.content}
            {props.imgAfter && <img src={props.imgAfter} alt="" className='img-after' />}
        </div>
    );
};

export default GBtns;
