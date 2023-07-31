import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        isLoadind: false,
        error: null,
        search: ''
    },
    reducers: {
        searchUsersRequest: (state) => {
            state.isLoadind = true;
            state.error = null;
        },
        searchUsersSuccess: (state, action) => {
            state.isLoadind = false;
            state.items = action.payload;
        },
        searchUsersFailure: (state,action) => {
            state.isLoadind = false;
            state.error = action.payload;
        },
        changeUsersField: (state, action) => {
            state.search = action.payload.search;
        },
        clearSearch: (state) => {
            state.items = [];
            state.isLoadind = false;
            state.error = null;
            state.search = ''
        }
    }
});

export const {
    searchUsersRequest,
    searchUsersSuccess,
    searchUsersFailure,
    changeUsersField,
    clearSearch
} = usersSlice.actions;

export default usersSlice.reducer;