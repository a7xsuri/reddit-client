import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// const loadMenu = createAsyncThunk(
//     'menu/menuLoading', async ()
// )

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: {}
    },
    reducers: {
        addMenu: (state, action ) =>{
            state.menu[action.payload.display_name] = {
                icon: action.payload.icon_img
            }
        }
    }
})

const selectMenu = (state) => state.menu.menu

export default menuSlice.reducer