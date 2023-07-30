import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadMenu = createAsyncThunk(
    'menu/loadMenu', async (id) =>{
        const response = await fetch('https://www.reddit.com/r/'+ id +'.json')
        const json = await response.json();
        console.log(json)
        return json
    }
)

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: {},
        isLoading: false,
        failed: false
    },
    extraReducers: (builder) => {
        builder.addCase(loadMenu.pending, (state)=>{
            state.isLoading = true;
            state.failed = false;
        }).addCase(loadMenu.fulfilled, (state, action) =>{
            state.menu = {[action.payload.data.title]: action.payload.data.children}
            state.isLoading = false;
            state.failed = false
        }).addCase(loadMenu.rejected, (state) =>{
            state.isLoading = false;
            state.failed = true;
        })
    }
})

export const selectMenu = (state) => state.menu.menu

export default menuSlice.reducer