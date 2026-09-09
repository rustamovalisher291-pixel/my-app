import loyihalar from "./loyiha.json"
import { useState, useEffect } from "react"


function Part() {

  const [Post, setPost] = useState([]);

  useEffect(() => {
    setPost(loyihalar.projects)
  }, []);

  return (
    <div>
      {Post.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  )
}

export default Part
