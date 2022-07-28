
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services/character.service";

const initialState = {
    characters: []
}

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ()=>{
        const {data} = await characterService.getAll()
        return data
    }
)

 const characterSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.characters = action.payload;
            })
})

const {reducer: characterReducer} = characterSlice;

const characterActions = {
    getAll
}

export {
    characterReducer,
    characterActions
}