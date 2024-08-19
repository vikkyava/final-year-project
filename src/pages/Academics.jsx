import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CourseCard from '../components/CourseInfoCard';
import LevelOne from '../components/courses/LevelOne';
import LevelTwo from '../components/courses/LevelTwo';
import LevelThree from '../components/courses/LevelThree';
import LevelFour from '../components/courses/LevelFour';
import LevelFive from '../components/courses/LevelFive';

export default function CoursePage() {
  return (
    <div className='my-12'>
        <h1 className="text-center text-3xl">Course Options</h1>
      <div className="flex flex-wrap gap-5 py-20">
        <CourseCard
          imageSrc="/assets/communications.jpg"
          // date="June 13, 2024"
          title="Communications Engineering"
          description="Communication Engineering in the ECE (Electrical and Computer Engineering) Department at Kwara State University focuses on the study and application of communication technologies. The course covers fundamental concepts of analog and digital communication, signal processing, wireless communication, and network systems. Students learn about the design, analysis, and implementation of communication systems used in various industries, including telecommunications, broadcasting, and data networks.

          The curriculum is designed to equip students with both theoretical knowledge and practical skills, preparing them for careers in communication engineering, telecommunications, and related fields. Students also explore emerging trends in communication technology, such as 5G networks, IoT, and satellite communication."
        />
        <CourseCard
          imageSrc="/assets/control.jpg"
          // date="June 13, 2024"
          title="Control Engineering"
          description="Control Engineering in the ECE (Electrical and Computer Engineering) Department at Kwara State University focuses on the analysis and design of control systems that govern the behavior of dynamic systems. The course covers key concepts such as system modeling, feedback control, stability analysis, and the implementation of control strategies for various engineering applications.

          Students gain a deep understanding of how to design and optimize control systems for different industries, including automotive, aerospace, manufacturing, and robotics. The curriculum includes both theoretical foundations and hands-on experience with tools and technologies used in modern control engineering. Graduates are well-prepared for careers in automation, robotics, and systems engineering, with a strong ability to develop solutions that ensure the stability and efficiency of complex systems."
        />
        <CourseCard
          imageSrc="/assets/power.jpg"
          // date="June 13, 2024"
          title="Power system and Electrical Machine"
          description="Power System and Electrical Machine in the ECE (Electrical and Computer Engineering) Department at Kwara State University focuses on the principles and applications of power generation, transmission, distribution, and the operation of electrical machines. The course covers key topics such as power system analysis, electrical machine theory, power electronics, and the integration of renewable energy sources into the grid.

          Students learn about the design, operation, and maintenance of power systems and electrical machines, including transformers, generators, and motors. The curriculum emphasizes both theoretical knowledge and practical skills, preparing students to tackle challenges in the energy sector. Graduates are equipped to work in industries such as power generation, transmission, distribution, and manufacturing, contributing to the development and management of efficient and sustainable electrical systems"
        />
      </div>

        <h1 className='text-center text-3xl mb-10'>Departmental Course Outlines and Curricula</h1>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          100 LEVEL
        </AccordionSummary>
        <AccordionDetails>
         <LevelOne />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          200 LEVEL
        </AccordionSummary>
        <AccordionDetails>
          <LevelTwo />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          300 LEVEL
        </AccordionSummary>
        <AccordionDetails>
          <LevelThree />
        </AccordionDetails>
      </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
            >
            400 LEVEL
            </AccordionSummary>
            <AccordionDetails>
              <LevelFour />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
            >
            500 LEVEL
            </AccordionSummary>
            <AccordionDetails>
              <LevelFive />
            </AccordionDetails>
        </Accordion>
    </div>
  );
}
