import React from 'react';

const Circles = (props) => {
    return (
        <div className="Circles">
            <div className={props.numSelected === '1' ? 'selected' : ''}>1</div>
            <div className={props.numSelected === '2' ? 'selected' : ''}>2</div>
            <div className={props.numSelected === '3' ? 'selected' : ''}>3</div>
            <div className={props.numSelected === '4' ? 'selected' : ''}>4</div>
        </div>
    )
}

export default Circles;