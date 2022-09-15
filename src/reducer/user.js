import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: [{
            title: '',
            date: '',
            description: '',
            id: ''
        }],
        viewDetail: {
            title: '',
            date: '',
            description: '',
            id: ''
        },
        editStatus: {
            status: false
        },
        editItem: {
            title: '',
            date: '',
            description: '',
            id: ''
        },
        editfinal: {
            title: '',
            date: '',
            description: '',
            id: ''
        }
    },
    reducers: {
        login: (state, action) => {
            state.userDetails = [...state.userDetails, action.payload]
        },
        deleteItem: (state, action) => {
            state.userDetails = state.userDetails.filter(del => {
                return del.id !== action.payload
            });
            const viewConfirm = state.userDetails.filter(del => {
                return del.id !== action.payload
            }).map(e => {
                return e.id
            })

            viewConfirm.includes(state.viewDetail.id) ? state.viewDetail = state.viewDetail : state.viewDetail = {
                title: '',
                date: '',
                description: '',
                id: ''
            }

        },
        viewItem: (state, action) => {
            state.viewDetail = state.userDetails.find(view => {
                return view.id == action.payload
            })
        },
        editStatus: (state, action) => {
            state.editStatus.status = action.payload;
        },
        editItem: (state, action) => {
            state.editItem = state.userDetails.find(e => {
                return e.id == action.payload
            })
            const viewConfirm = state.userDetails.filter(del => {
                return del.id !== action.payload
            }).map(e => {
                return e.id
            })
            viewConfirm.includes(state.viewDetail.id) ? state.viewDetail = state.viewDetail : state.viewDetail = {
                title: '',
                date: '',
                description: '',
                id: ''
            }
        },
        finalEdit: (state, action) => {
            state.editfinal = action.payload
            const valueLength = state.userDetails
            for (let i = 0; i < valueLength.length; i++) {
                if (action.payload.id == valueLength[i]['id']) {
                    state.userDetails[i] = action.payload
                }
            }
        }
    }
})

export default userSlice.reducer

export const { login, deleteItem, viewItem, editStatus, editItem, finalEdit } = userSlice.actions