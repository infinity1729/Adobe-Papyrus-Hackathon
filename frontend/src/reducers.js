import {
    UPDATE_FORM_FIELD,
    ADD_SKILL,
    REMOVE_SKILL,
    ADD_EDUCATION,
    REMOVE_EDUCATION,
    UPDATE_EDUCATION_FIELD,
    ADD_WORK_EXPERIENCE,
    REMOVE_WORK_EXPERIENCE,
    UPDATE_WORK_EXPERIENCE_FIELD,
    ADD_ACHIEVEMENT,
    REMOVE_ACHIEVEMENT,
    UPDATE_ACHIEVEMENT_FIELD,
    SUBMIT_FORM,
} from './actions';

import { combineReducers } from 'redux';

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    template: '',
    skills: [],
    education: [],
    workExperience: [],
    achievements: [],
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORM_FIELD:
            const { fieldName, value } = action.payload;
            return { ...state, [fieldName]: value };
        case ADD_SKILL:
            return { ...state, skills: [...state.skills, ''] };
        case REMOVE_SKILL:
            const { index } = action.payload;
            return {
                ...state,
                skills: state.skills.filter((_, i) => i !== index),
            };
        case ADD_EDUCATION:
            return {
                ...state,
                education: [...state.education, { schoolName: '', year: '', description: '' }],
            };
        case REMOVE_EDUCATION:
            const edIndex = action.payload.index;
            return {
                ...state,
                education: state.education.filter((_, index) => index !== edIndex),
            };
        case UPDATE_EDUCATION_FIELD:
            const { index: eduIndex, fieldName: eduFieldName, value: eduValue } = action.payload;
            const updatedEducation = state.education.map((edu, index) => {
                if (index === eduIndex) {
                    return { ...edu, [eduFieldName]: eduValue };
                }
                return edu;
            });
            return { ...state, education: updatedEducation };
        case ADD_WORK_EXPERIENCE:
            return {
                ...state,
                workExperience: [...state.workExperience, { companyName: '', year: '', description: '' }],
            };
        case REMOVE_WORK_EXPERIENCE:
            const workExperienceIndex = action.payload.index;
            return {
                ...state,
                workExperience: state.workExperience.filter((_, index) => index !== workExperienceIndex),
            };
        case UPDATE_WORK_EXPERIENCE_FIELD:
            const { index: workExpIndex, fieldName: workExpFieldName, value: workExpValue } = action.payload;
            const updatedWorkExperience = state.workExperience.map((exp, index) => {
                if (index === workExpIndex) {
                    return { ...exp, [workExpFieldName]: workExpValue };
                }
                return exp;
            });
            return { ...state, workExperience: updatedWorkExperience };
        case ADD_ACHIEVEMENT:
            return {
                ...state,
                achievements: [...state.achievements, { type: '', description: '' }],
            };
        case REMOVE_ACHIEVEMENT:
            const achievementsIndex = action.payload.index;
            return {
                ...state,
                achievements: state.achievements.filter((_, index) => index !== achievementsIndex),
            };
        case UPDATE_ACHIEVEMENT_FIELD:
            const { index: achievementIndex, fieldName: achievementFieldName, value: achievementValue } = action.payload;
            const updatedAchievements = state.achievements.map((ach, index) => {
                if (index === achievementIndex) {
                    return { ...ach, [achievementFieldName]: achievementValue };
                }
                return ach;
            });
            return { ...state, achievements: updatedAchievements };

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    form: formReducer
});

export default rootReducer;
