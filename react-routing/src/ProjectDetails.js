import React from 'react'
import { myProjects } from './Projects';

export default function ProjectDetails(props) {


	// this is where react router dom puts the route parameter
	const projectId = props.match.params.id;
	console.log(projectId);

	const project = myProjects.find(project => project.id === projectId)
	console.log()

	if (project === undefined) return <h1>Not a valid project id</h1>
	return (
		<div>
			<h1>Project Details: </h1>
			<h3>{project.name}</h3>
			<h3>Used technologies: {project.technologies}</h3>
			<h5>{project.description}</h5>
		</div>
	)
}
