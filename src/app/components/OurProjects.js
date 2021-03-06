import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import SectionSubtitle from './SectionSubtitle';
import ProjectCard from './ProjectCard';

import ptv from '../assets/images/projects/ptv.jpg';
import harmony from '../assets/images/projects/harmony.png';

const projects = [
  {
    image: ptv,
    title: 'Program for Torture Victims',
    desc: 'PTV helps support refugees escaping violence and human rights abuse.',
    link: 'ptv',
  },
  {
    image: harmony,
    title: 'Harmony Project',
    desc: 'Harmony Project uses music education to provide students with the skills and resources needed to thrive in school, in their community, and in life.',
    link: 'harmony',
  },
];

export default function OurProjects() {
  const projectCards = projects.map((item) => (
    <ProjectCard
      key={JSON.stringify(item)}
      image={item.image}
      title={item.title}
      link={item.link}
      desc=""
      className="card-home"
    />
  ));
  return (
    <SectionContainer className="our-projects">
      <Container>
        <SectionHeading>Our Projects</SectionHeading>

        <SectionSubtitle>
          Every year, teams of 4-6 developers and 1-2 designers work with nonprofits to deliver
          an application that best suits their needs.
        </SectionSubtitle>

        <h3 className="subtitle-blue">
          <Link className="link" to="/projects">
            Check out our current projects!
          </Link>
        </h3>
        <div className="card-deck">{projectCards}</div>
      </Container>
    </SectionContainer>
  );
}
