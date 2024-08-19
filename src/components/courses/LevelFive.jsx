import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(code, title, unit, status) {
  return { code, title, unit, status };
}

const commonCourses = [
  createData("GET 501", "Engineering Management", "2", "C"),
  createData("ECE 503", "Design of Electrical and ICT Services", "2", "C"),
  createData("ECE 523", "Power Electronics", "2", "C"),
  createData("ECE 561", "Electric Energy Conversion and Storage", "2", "C"),
  createData("ECE 591", "Electrical and Compt. Engr. Project I", "3", "C"),
];

const powerCourse = [
  createData("ECE 563", "Electrical Machine Design", "3", "C"),
  createData("ECE 573", "Electric Power System Engineering", "3", "C"),
  createData("ECE 575", "Power System Comm. and Control", "2", "E"),
];
const communicatiionCourse = [
  createData("ECE 551", "Satellite Communications", "3", "C"),
  createData("ECE 553", "Mobile and Wireless Comm. System", "3", "C"),
  createData("ECE 555", "Digital Communication Principle", "2", "E"),
];
const controlCourse = [
  createData("ECE 531", "Introduction to Robotic and Automation", "2", "E"),
  createData("ECE 541", "Microprocessor & Embedded System Design", "3", "C"),
  createData("ECE 545", "Control Engineering II", "3", "C"),
];
const rainCourses = [
  createData("GET 502", "Engineering Law", "2", "C"),
  createData(
    "ECE 504",
    "Reliability & Maintainability of Electrical System",
    "3",
    "C"
  ),
  createData("ECE 532", "Modelling and Simulation", "2", "C"),
  createData("ECE 592", "Electrical and Compt. Engr. Project II", "3", "C"),
];
const rainPowerCourse = [
  createData("ECE 564", "Power System Protection", "3", "C"),
  createData("ECE 576", "Power System Control and Stability", "3", "C"),
  createData("ECE 578", "Compt. Application in Power Systems", "2", "E"),
];
const rainCommunicationCourse = [
  createData("ECE 552", "Digital Signal Processing", "3", "C"),
  createData("ECE 554", "Optical Fibre Communication System", "2", "E"),
  createData("ECE 556", "Broadcasting and Internet Technology", "3", "C"),
];
const rainControlCourse = [
  createData("ECE 524", "Industrial Electronics", "2", "E"),
  createData("ECE 542", "Digital Systems Design & VHDL Programming", "3", "C"),
  createData("ECE 546", "Digital Control Engineering", "3", "C"),
];

export default function LevelFive() {
  return (
    <div className="border-t pt-5">
      <h1 className="text-lg font-bold mb-5">
        500 Level Harmattan Semester Courses
      </h1>
      <h2 className="text-lg font-bold pl-4 mb-5">Common Course</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Course Code</StyledTableCell>
              <StyledTableCell align="center">Course Title</StyledTableCell>
              <StyledTableCell align="center">Course Unit</StyledTableCell>
              <StyledTableCell align="center">Course Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commonCourses.map((course, index) => (
              <StyledTableRow key={course.title}>
                <StyledTableCell component="th" scope="row" align="center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{course.code}</StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">{course.unit}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2 className="text-lg font-bold pl-4 mb-5 mt-5">
        Power System and Electrical Machine Option
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Course Code</StyledTableCell>
              <StyledTableCell align="center">Course Title</StyledTableCell>
              <StyledTableCell align="center">Course Unit</StyledTableCell>
              <StyledTableCell align="center">Course Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {powerCourse.map((course, index) => (
              <StyledTableRow key={course.title}>
                <StyledTableCell component="th" scope="row" align="center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{course.code}</StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">{course.unit}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2 className="text-lg font-bold pl-4 mb-5 mt-5">
        Communication Engineering Option
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Course Code</StyledTableCell>
              <StyledTableCell align="center">Course Title</StyledTableCell>
              <StyledTableCell align="center">Course Unit</StyledTableCell>
              <StyledTableCell align="center">Course Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {communicatiionCourse.map((course, index) => (
              <StyledTableRow key={course.title}>
                <StyledTableCell component="th" scope="row" align="center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{course.code}</StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">{course.unit}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2 className="text-lg font-bold pl-4 mb-5 mt-5">
        Computer and Control Engineering Option
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Course Code</StyledTableCell>
              <StyledTableCell align="center">Course Title</StyledTableCell>
              <StyledTableCell align="center">Course Unit</StyledTableCell>
              <StyledTableCell align="center">Course Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {controlCourse.map((course, index) => (
              <StyledTableRow key={course.title}>
                <StyledTableCell component="th" scope="row" align="center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{course.code}</StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">{course.unit}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h1 className="text-lg font-bold my-5">
        500 Level Rain Semester Courses
      </h1>
      <h2 className="text-lg font-bold pl-4 mb-5">Common Course</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Course Code</StyledTableCell>
              <StyledTableCell align="center">Course Title</StyledTableCell>
              <StyledTableCell align="center">Course Unit</StyledTableCell>
              <StyledTableCell align="center">Course Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rainCourses.map((course, index) => (
              <StyledTableRow key={course.title}>
                <StyledTableCell component="th" scope="row" align="center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{course.code}</StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">{course.unit}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2 className="text-lg font-bold pl-4 mb-5 mt-5">
        Power System and Electrical Machine Option
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Course Code</StyledTableCell>
              <StyledTableCell align="center">Course Title</StyledTableCell>
              <StyledTableCell align="center">Course Unit</StyledTableCell>
              <StyledTableCell align="center">Course Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rainPowerCourse.map((course, index) => (
              <StyledTableRow key={course.title}>
                <StyledTableCell component="th" scope="row" align="center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{course.code}</StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">{course.unit}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2 className="text-lg font-bold pl-4 mb-5 mt-5">
        Communication Engineering Option
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Course Code</StyledTableCell>
              <StyledTableCell align="center">Course Title</StyledTableCell>
              <StyledTableCell align="center">Course Unit</StyledTableCell>
              <StyledTableCell align="center">Course Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rainCommunicationCourse.map((course, index) => (
              <StyledTableRow key={course.title}>
                <StyledTableCell component="th" scope="row" align="center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{course.code}</StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">{course.unit}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2 className="text-lg font-bold pl-4 mb-5 mt-5">
        Computer and Control Engineering Option
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Course Code</StyledTableCell>
              <StyledTableCell align="center">Course Title</StyledTableCell>
              <StyledTableCell align="center">Course Unit</StyledTableCell>
              <StyledTableCell align="center">Course Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rainControlCourse.map((course, index) => (
              <StyledTableRow key={course.title}>
                <StyledTableCell component="th" scope="row" align="center">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{course.code}</StyledTableCell>
                <StyledTableCell align="center">{course.title}</StyledTableCell>
                <StyledTableCell align="center">{course.unit}</StyledTableCell>
                <StyledTableCell align="center">
                  {course.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
