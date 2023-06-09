import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { ReadPlanProps } from "../../types"

// const myAction = PayloadAction

type ErrorProps = {
  message: string
}
export type initialStateProps = {
  loading: boolean
  plans: string[]
  error: string
  value: number
}
const initialState: initialStateProps = {
  loading: false,
  plans: [],
  error: "",
  value: 0,
}

export const fetchReadingPlans = createAsyncThunk(
  "readplan/fetchReadingPlans",
  () => {
    return axios
      .get("http://localhost:8000/readingplans")
      .then((respond) => respond.data)
  },
)

const readplanSlice = createSlice({
  name: "readplan",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchReadingPlans.pending, (state: initialStateProps) => {
      state.loading = true
      state.plans = []
      // state.error = ""
    })
    builder.addCase(
      fetchReadingPlans.fulfilled,
      (state: initialStateProps, action: any) => {
        state.loading = false
        state.plans = action.payload
      },
    )
    builder.addCase(
      fetchReadingPlans.rejected,
      (state: initialStateProps, action: any) => {
        state.loading = false
        state.plans = []
        state.error = action.error.message || "failed to fetch"
        // console.log(action.error.message)
      },
    )
  },
})
export default readplanSlice.reducer
