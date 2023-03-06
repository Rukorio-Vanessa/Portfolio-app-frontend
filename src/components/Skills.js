import React from "react";
import { useState, useEffect } from 'react';

const SKILLS_LIMIT = 10;

function Skills(){

    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [updateSkill, setUpdateSkill] = useState(null);
  
    const handleNewSkillChange = (event) => {
      setNewSkill(event.target.value);
    };
  
    const handleAddSkill = (event) => {
      event.preventDefault();
      if (updateSkill === null) {
        if (skills.length < SKILLS_LIMIT) {
          setSkills([...skills, newSkill]);
          setNewSkill('');
        } else {
          alert(`Skill limit is ${SKILLS_LIMIT}`);
        }
      } else {
        
        const newSkills = [...skills];
        newSkills[updateSkill] = newSkill;
        setSkills(newSkills);
        setNewSkill('');
        setUpdateSkill(null);
      }
    };
  
    const handleEditSkill = (skillEntry) => {
      setNewSkill(skills[skillEntry]);
      setUpdateSkill(skillEntry);
    };
  
    const handleDeleteSkill = (skillEntry) => {
      const newSkills = skills.filter((_, entry) => entry !== skillEntry);
      setSkills(newSkills);
      setUpdateSkill(null);
    };
  
    return (
      <div className='form' id="skills-div">
        <h2 id="skills-header">My Skills</h2>
        <form onSubmit={handleAddSkill} id="skills-form">
          <label htmlFor="new-skill">Enter Skill:</label>
          <input
            type="text"
            id="new-skill"
            value={newSkill}
            onChange={handleNewSkillChange}
          />
          <button type="submit">{updateSkill !== null ? 'Save Skill' : 'Add Skill'}</button>
        </form>
        {skills.length > 0 ? (
          <ul>
            {skills.map((skill, entry) => (
              <li key={entry}>
                {updateSkill === entry ? (
                  <input type="text" value={newSkill} onChange={handleNewSkillChange} />
                ) : (
                  <>{skill}</>
                )}
                {updateSkill === entry ? (
                  <button onClick={() => setUpdateSkill(null)}>Undo</button>
                ) : (
                  <>
                    <button onClick={() => handleEditSkill(entry)}>Update</button>
                    <button onClick={() => handleDeleteSkill(entry)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Add your skills here</p>
        )}
      </div>
    );
  }


export default Skills;