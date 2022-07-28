import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../redux/slices/user.slice";
import Character from "./Character";

const Characters = () => {

    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(characterActions.getAll())
    })
    return (
        <div>
            hello
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;