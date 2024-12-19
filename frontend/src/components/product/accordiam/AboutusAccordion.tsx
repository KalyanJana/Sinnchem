import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function AboutusAccordion() {
  return (
    <div>
      <Accordion >
        <AccordionSummary
          sx={{ bgcolor: 'lightgray', fontWeight: '500'}}
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          About Us
        </AccordionSummary>
      </Accordion>
      <Accordion >
      {/* <Accordion defaultExpanded> */}
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Testimonial
        </AccordionSummary>
        {/* <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails> */}
      </Accordion>
    </div>
  );
}

export default AboutusAccordion;
