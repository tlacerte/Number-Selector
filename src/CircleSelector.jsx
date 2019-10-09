import React from 'react';

const CircleSelector = (props) => {

    const handleClick = (e) => {
        props.handleChange(e.target.value)
    }


    return (
        <div className="CircleSelector">
            <button 
                className={props.numSelected === '1' ? 'selected' : 'null'}
                onClick={handleClick}
                value='1'
                >
                {props.numSelected === '1' ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}
            </button>
            <button 
                className={props.numSelected === '2' ? 'selected' : 'null'}
                onClick={handleClick}
                value='2'
                >
                {props.numSelected === '2' ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}
            </button>
            <button 
                className={props.numSelected === '3' ? 'selected' : 'null'}
                onClick={handleClick}
                value='3'
                >
                {props.numSelected === '3' ? 'CIRCLE 3 SELECTED' : 'SELECT CIRCLE 3'}
            </button>
            <button 
                className={props.numSelected === '4' ? 'selected' : 'null'}
                onClick={handleClick}
                value='4'
                >
                {props.numSelected === '4' ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}
            </button>

        </div>
    )
}


export default CircleSelector;