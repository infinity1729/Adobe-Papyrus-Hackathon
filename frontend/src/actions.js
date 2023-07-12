export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const ADD_SKILL = 'ADD_SKILL';
export const REMOVE_SKILL = 'REMOVE_SKILL';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';
export const UPDATE_EDUCATION_FIELD = 'UPDATE_EDUCATION_FIELD';
export const ADD_WORK_EXPERIENCE = 'ADD_WORK_EXPERIENCE';
export const REMOVE_WORK_EXPERIENCE = 'REMOVE_WORK_EXPERIENCE';
export const UPDATE_WORK_EXPERIENCE_FIELD = 'UPDATE_WORK_EXPERIENCE_FIELD';
export const ADD_ACHIEVEMENT = 'ADD_ACHIEVEMENT';
export const REMOVE_ACHIEVEMENT = 'REMOVE_ACHIEVEMENT';
export const UPDATE_ACHIEVEMENT_FIELD = 'UPDATE_ACHIEVEMENT_FIELD';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const updateFormField = (fieldName, value) => ({
  type: UPDATE_FORM_FIELD,
  payload: { fieldName, value },
});

export const addSkill = () => ({
  type: ADD_SKILL,
});

export const removeSkill = (index) => ({
  type: REMOVE_SKILL,
  payload: { index },
});

export const addEducation = () => ({
  type: ADD_EDUCATION,
});

export const removeEducation = (index) => ({
  type: REMOVE_EDUCATION,
  payload: { index },
});

export const updateEducationField = (index, fieldName, value) => ({
  type: UPDATE_EDUCATION_FIELD,
  payload: { index, fieldName, value },
});

export const addWorkExperience = () => ({
  type: ADD_WORK_EXPERIENCE,
});

export const removeWorkExperience = (index) => ({
  type: REMOVE_WORK_EXPERIENCE,
  payload: { index },
});

export const updateWorkExperienceField = (index, fieldName, value) => ({
  type: UPDATE_WORK_EXPERIENCE_FIELD,
  payload: { index, fieldName, value },
});

export const addAchievement = () => ({
  type: ADD_ACHIEVEMENT,
});

export const removeAchievement = (index) => ({
  type: REMOVE_ACHIEVEMENT,
  payload: { index },
});

export const updateAchievementField = (index, fieldName, value) => ({
  type: UPDATE_ACHIEVEMENT_FIELD,
  payload: { index, fieldName, value },
});

export const submitForm = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});
