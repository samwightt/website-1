import React from "react";
import { Fade } from "react-reveal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import WhoWeAre from "../components/WhoWeAre";
import OurProjects from "../components/OurProjects";
import ContactButton from "../components/ContactButton";

export default function HomePage() {
  return (
    <>
      <PageHeader
        className="home"
        title="Tech for Social Good"
        render={() => (
          <Button size="md">
            <Link to="/about">Learn More</Link>
          </Button>
        )}
      />
      <Fade>
        <WhoWeAre />
      </Fade>
      <Fade>
        <OurProjects />
      </Fade>
      <Fade>
        <ContactButton />
      </Fade>
    </>
  );
}
