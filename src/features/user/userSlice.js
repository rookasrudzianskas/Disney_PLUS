import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    photo: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload;
        },
        setSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

export const { setUser } = userSlice.actions;

export const select = (state) => state.user.movies;

export default userSlice.reducer;