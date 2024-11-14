import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="projects">
      <h2 className='section-title' style={
        {color:"white"}
      }>My Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <Image src={"/images/Cv.png"}alt='project image' height={1000} width={1000}/>
          <h3>Static Resume</h3>
          <p>Static Resume made by Html,CSS and TypeScript</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://milestone-2-publish-on-git-hub-and-host-on-vercel-gamma.vercel.app/"} target='_blank' style={{color:"white"}}>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/alihashmi2288/Milestone-2-Publish-on-GitHub-and-Host-on-Vercel"} style={{color:"white"}} target='_blank'>Github Link</Link></div>
          </div>
        </div>

        <div className="project-card">
          <Image src={"/images/Resume_Builder.png"} alt='project image' height={1000} width={1000}/>Resume Builder
          <h3></h3>
          <p>Resume Builder where you can create and edit your resume by input</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://milestone-2-assiangment-a.vercel.app/?vercelToolbarCode=KaM1hfp4n7iz8Sw"} target='_blank' style={{color:"white"}}>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/ayesha-aziz123/Milestone-2_Assiangment-FoodWebsite"} target='_blank' style={{color:"white"}}>Github Link</Link></div>
          </div>
        </div>


       



      </div>
    </section>
  )
}

export default Projects