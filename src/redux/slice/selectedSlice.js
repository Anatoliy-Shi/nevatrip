import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    direction: 'из A в B',
    time: '18:00',
    timeBack: '18:30',
    count: '',
    filterTime: [],
    price: 700,
    timeTravel: 0,
    finishTravel: 0
}

export const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        checkedDirection: (state, action) => {
            state.direction = action.payload
            state.filterTime= []
        },
        checkedTime: (state, action) => {
            state.time = action.payload
            state.filterTime= []
        },
        checkedTimeBack: (state, action) => {
            state.timeBack = action.payload
        },
        setCount: (state, action) => {
            state.count = action.payload
        },
        setFilterTime: (state, action) => {
            state.filterTime.push(action.payload)
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setTimeTravel: (state, action) => {
            state.timeTravel = action.payload
        },
        setFinishTravel: (state, action) => {
            state.finishTravel = action.payload
        }


    }
})

export const { checkedDirection, checkedTime, checkedTimeBack, setCount, setFilterTime, setPrice, setTimeTravel, setFinishTravel } = selectedSlice.actions

export default selectedSlice.reducer