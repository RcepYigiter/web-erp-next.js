import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    activeTab: "Muhasebe",
    toggleMenu: true
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    
    reducers: {

        changeActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },

        changeToggleMenu: (state, action) => {
            state.toggleMenu = action.payload
        }
    }
})

export const { changeActiveTab ,changeToggleMenu} = layoutSlice.actions

export default layoutSlice.reducer