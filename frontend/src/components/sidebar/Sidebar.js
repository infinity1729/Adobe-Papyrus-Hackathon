import React from 'react';
import { connect } from 'react-redux';
import {
  updateFormField,
  addSkill,
  removeSkill,
  addEducation,
  removeEducation,
  updateEducationField,
  addWorkExperience,
  removeWorkExperience,
  updateWorkExperienceField,
  addAchievement,
  removeAchievement,
  updateAchievementField,
  submitForm,
} from '../../actions';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Sidebar = (props) => {
  const {
    template,
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    linkedInURL,
    jobTitle,
    summary,
    skills,
    education,
    workExperience,
    achievements,
    updateFormField,
    addSkill,
    removeSkill,
    addEducation,
    removeEducation,
    updateEducationField,
    addWorkExperience,
    removeWorkExperience,
    updateWorkExperienceField,
    addAchievement,
    removeAchievement,
    updateAchievementField,
    submitForm,
  } = props;

  const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    updateFormField('skills', newSkills);
  };

  const handleEducationFieldChange = (index, fieldName, value) => {
    updateEducationField(index, fieldName, value);
  };

  const handleAddEducation = () => {
    addEducation();
  };

  const handleRemoveEducation = (index) => {
    removeEducation(index);
  };

  const handleWorkExperienceFieldChange = (index, fieldName, value) => {
    updateWorkExperienceField(index, fieldName, value);
  };

  const handleAddWorkExperience = () => {
    addWorkExperience();
  };

  const handleRemoveWorkExperience = (index) => {
    removeWorkExperience(index);
  };

  const handleAchievementFieldChange = (index, fieldName, value) => {
    updateAchievementField(index, fieldName, value);
  };

  const handleAddAchievement = () => {
    addAchievement();
  };

  const handleRemoveAchievement = (index) => {
    removeAchievement(index);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/', { template, firstName, lastName, phoneNumber, emailAddress, linkedInURL, jobTitle, summary, skills, education, workExperience, achievements });
      submitForm(response);
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }

  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Template:</td>
              <td>
                <select
                  value={template}
                  onChange={(e) => updateFormField('template', e.target.value)}
                >
                  <option value="">Select a template</option>
                  <option value="Template1">Template 1</option>
                  <option value="Template2">Template 2</option>
                  <option value="Template3">Template 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Job Title:</td>
              <td>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => updateFormField('jobTitle', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="block">
          <h3>Personal Details</h3>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => updateFormField('firstName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => updateFormField('lastName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => updateFormField('phoneNumber', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email Id:</label>
            <input
              type="text"
              value={emailAddress}
              onChange={(e) => updateFormField('emailAddress', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>LinkeIn Url:</label>
            <input
              type="text"
              value={linkedInURL}
              onChange={(e) => updateFormField('linkedInURL', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Summary:</label>
            <input
              type="text"
              value={summary}
              onChange={(e) => updateFormField('summary', e.target.value)}
            />
          </div>
        </div>
        <div className="block">
          <h3>Skills</h3>
          {skills.map((skill, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e)}
                    />
                    <button type="button" onClick={() => removeSkill(index)} className="remove-button">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addSkill}>
                  Add Skill
                </button>
        </div>
        <div className="block">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <button type="button" className="remove-button" onClick={() => handleRemoveEducation(index)}>
                  <FontAwesomeIcon icon={faTrash} className="remove-icon" />
                </button>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>School Name:</label>
                  <input
                    type="text"
                    value={edu.schoolName}
                    onChange={(e) => handleEducationFieldChange(index, 'schoolName', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Year:</label>
                  <input
                    type="text"
                    value={edu.year}
                    onChange={(e) => handleEducationFieldChange(index, 'year', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <input
                    type="text"
                    value={edu.description}
                    onChange={(e) => handleEducationFieldChange(index, 'description', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={handleAddEducation}>
            Add Education
          </button>
        </div>
        <div className="block">
          <h3>Work Experience</h3>
          {workExperience.map((experience, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <button type="button" className="remove-button" onClick={() => handleRemoveWorkExperience(index)}>
                  <FontAwesomeIcon icon={faTrash} className="remove-icon" />
                </button>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Company Name:</label>
                  <input
                    type="text"
                    value={experience.companyName}
                    onChange={(e) => handleWorkExperienceFieldChange(index, 'companyName', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Year:</label>
                  <input
                    type="text"
                    value={experience.year}
                    onChange={(e) => handleWorkExperienceFieldChange(index, 'year', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <input
                    type="text"
                    value={experience.description}
                    onChange={(e) => handleWorkExperienceFieldChange(index, 'description', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={handleAddWorkExperience}>
            Add Work Experience
          </button>
        </div>
        <div className="block">
          <h3>Achievements</h3>
          {achievements.map((achievement, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <button type="button" className="remove-button" onClick={() => handleRemoveAchievement(index)}>
                  <FontAwesomeIcon icon={faTrash} className="remove-icon" />
                </button>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Type:</label>
                  <input
                    type="text"
                    value={achievement.type}
                    onChange={(e) => handleAchievementFieldChange(index, 'type', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <input
                    type="text"
                    value={achievement.description}
                    onChange={(e) => handleAchievementFieldChange(index, 'description', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={handleAddAchievement}>
            Add Achievement
          </button>
        </div>
        <br />
        <button type="submit" className='generate-pdf-button'>Generate PDF</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    template: state.form.template,
    firstName: state.form.firstName,
    lastName: state.form.lastName,
    phoneNumber: state.form.phoneNumber,
    emailAddress: state.form.emailAddress,
    linkedInURL: state.form.linkedInURL,
    jobTitle: state.form.jobTitle,
    summary: state.form.summary,
    skills: state.form.skills,
    education: state.form.education,
    workExperience: state.form.workExperience,
    achievements: state.form.achievements
  };
};

const mapDispatchToProps = {
  updateFormField,
  addSkill,
  removeSkill,
  addEducation,
  removeEducation,
  updateEducationField,
  addWorkExperience,
  removeWorkExperience,
  updateWorkExperienceField,
  addAchievement,
  removeAchievement,
  updateAchievementField,
  submitForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);