import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        CredoTribe
      </SectionTitle>
      {/* // Value, bring value to community and companies */}
      <SectionText> 
        CredoTribe is my personal site that I created to learn React.js and showcase my many different projects. I hope you enjoy my site.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;