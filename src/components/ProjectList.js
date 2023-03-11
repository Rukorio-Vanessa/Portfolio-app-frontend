import React from "react"
import { useState } from "react";

function Projectlist(){
    const [projects, setProjects] = useState([]);

    return(
        <div>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </div>
    )

}

export default Projectlist;