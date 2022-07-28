import React from 'react';

const Character = ({character}) => {
    const {price, name} = character;

    return (
        <div>
            {price} -- {name}
        </div>
    );
};

export default Character;