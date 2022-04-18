import { createSlice } from "@reduxjs/toolkit";

export const builderSlice = createSlice({
    name: "builder",
    initialState: {
        personal: { firstName: '', lastName: '', email: '' },
        education: {},
        experience: {},
        skills: {},
    },
    reducers: {
        setPersonal: (state, action) => {
            console.log(state.personal);
            state.personal = action.payload;
        },
        setEducation: (state, action) => {
            state.education = action.payload;
        },
        setExperience: (state, action) => {
            state.experience = action.payload;
        },
        setSkills: (state, action) => {
            state.skills = action.payload;
        }
    }
})

export const { setPersonal, setEducation, setExperience, setSkills } = builderSlice.actions;
export default builderSlice.reducer;


