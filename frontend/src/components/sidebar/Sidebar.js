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
              <td>First Name:</td>
              <td>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => updateFormField('firstName', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => updateFormField('lastName', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => updateFormField('phoneNumber', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Email ID:</td>
              <td>
                <input
                  type="text"
                  value={emailAddress}
                  onChange={(e) => updateFormField('emailAddress', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>LinkedIn URL:</td>
              <td>
                <input
                  type="text"
                  value={linkedInURL}
                  onChange={(e) => updateFormField('linkedInURL', e.target.value)}
                />
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
            <tr>
              <td>Summary:</td>
              <td>
                <input
                  type="text"
                  value={summary}
                  onChange={(e) => updateFormField('summary', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Skills:</td>
              <td>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e)}
                    />
                    <button type="button" onClick={() => removeSkill(index)} className="skills-remove-button">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addSkill}>
                  Add Skill
                </button>
              </td>
            </tr>
            <tr>
              <td>Education:</td>
              <td>
                {education.map((edu, index) => (
                  <div className="education-container" key={index}>
                    <label className="education-label">Institution:</label>
                    <input
                      type="text"
                      value={edu.schoolName}
                      onChange={(e) => handleEducationFieldChange(index, 'schoolName', e.target.value)}
                      className="education-input"
                    />
                    <label className="education-label">Year:</label>
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => handleEducationFieldChange(index, 'year', e.target.value)}
                      className="education-input"
                    />
                    <label className="education-label">Description:</label>
                    <input
                      type="text"
                      value={edu.description}
                      onChange={(e) => handleEducationFieldChange(index, 'description', e.target.value)}
                      className="education-input"
                    />
                    <button type="button" onClick={() => handleRemoveEducation(index)} className="education-remove-button">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddEducation}>
                  Add Education
                </button>
              </td>
            </tr>
            <tr>
              <td>Work Experience:</td>
              <td>
                {workExperience.map((experience, index) => (
                  <div className="work-experience-container" key={index}>
                    <label className="work-experience-label">Company Name:</label>
                    <input
                      type="text"
                      value={experience.companyName}
                      onChange={(e) => handleWorkExperienceFieldChange(index, 'companyName', e.target.value)}
                      className="work-experience-input"
                    />
                    <label className="work-experience-label">Year:</label>
                    <input
                      type="text"
                      value={experience.year}
                      onChange={(e) => handleWorkExperienceFieldChange(index, 'year', e.target.value)}
                      className="work-experience-input"
                    />
                    <label className="work-experience-label">Description:</label>
                    <input
                      type="text"
                      value={experience.description}
                      onChange={(e) => handleWorkExperienceFieldChange(index, 'description', e.target.value)}
                      className="work-experience-input"
                    />
                    <button type="button" onClick={() => handleRemoveWorkExperience(index)} className="work-experience-remove-button">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddWorkExperience}>
                  Add Work Experience
                </button>
              </td>
            </tr>
            <tr>
              <td>Achievements:</td>
              <td>
                {achievements.map((achievement, index) => (
                  <div className="achievement-container" key={index}>
                    <label className="achievement-label">Type:</label>
                    <input
                      type="text"
                      value={achievement.type}
                      onChange={(e) => handleAchievementFieldChange(index, 'type', e.target.value)}
                      className="achievement-input"
                    />
                    <label className="achievement-label">Description:</label>
                    <input
                      type="text"
                      value={achievement.description}
                      onChange={(e) => handleAchievementFieldChange(index, 'description', e.target.value)}
                      className="achievement-input"
                    />
                    <button type="button" onClick={() => handleRemoveAchievement(index)} className="achievement-remove-button">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddAchievement}>
                  Add Achievement
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
