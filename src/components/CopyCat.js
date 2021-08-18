import React from 'react';
import PropTypes from 'prop-types';

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export const CopyCat = props => {
    const { toggleTape, tape, inputValue, handleChange } = props;
    return (
        <div>
            <h1>Copy Cat {props.name}</h1>
            <input type="text" value={inputValue} onChange={handleChange} />
            <img
                alt='cat'
                src={tape ? images.quietcat : images.copycat}
                onClick={toggleTape}
            />
            <p>{tape ? null : inputValue}</p>
        </div>
    );
};

CopyCat.propTypes = {
    toggleTape:     PropTypes.func.isRequired,
    tape:           PropTypes.bool.isRequired,
    inputValue:     PropTypes.string.isRequired,
    handleChange:   PropTypes.func.isRequired,
    name:           PropTypes.string,
};

CopyCat.defaultProps = {
    name: 'Tom',
};