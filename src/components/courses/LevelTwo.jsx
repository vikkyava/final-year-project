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

const harmarttanSemesterCourses = [
  createData("GET 201", "Applied Electricity I", "3", "C"),
  createData("GET 215", "Engineering Graphics I", "2", "C"),
  createData("GET 233", "Engineering Technology", "2", "C"),
  createData("GET 241", "Fundamentals of Fluid Mechanics", "3", "C"),
  createData("GET 251", "Engineering Mechanics I", "2", "C"),
  createData("GET 261", "Computer Programming I", "1", "C"),
  createData("GET 263", "Engineering Mathematics I", "3", "C"),
  createData("GET 283", "General Engineering Lab. Course I", "2", "C"),
  createData("VTE 203", "Enterprise creation and development", "0", "C"),
];

const rainSemesterCourses = [
  createData("GET 202", "Applied Electricity II", "3", "C"),
  createData("GET 216", "Engineering Graphics II", "2", "C"),
  createData("GET 242", "Fundamental of Thermodynamics", "3", "C"),
  createData("GET 252", "Engineering Mechanics II", "2", "C"),
  createData("GET 262", "Computer Programming II", "2", "C"),
  createData("GET 264", "Engineering Mathematics II", "3", "C"),
  createData("GET 272", "Engineering Materials", "2", "C"),
  createData("GET 284", "GET Labs. Course II", "2", "C"),
  createData("GNS 206", "Introduction to Entrepreneurship", "2", "R"),
  createData("VTE 204", "Innovation and product development", "0", "C"),
];

export default function LevelTwo() {
  return (
    <div className="border-t pt-5">
      <h1 className="text-lg font-bold mb-5">
        200 Level Harmattan Semester Courses
      </h1>
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
            {harmarttanSemesterCourses.map((course, index) => (
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
        200 Level Rain Semester Courses
      </h1>
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
            {rainSemesterCourses.map((course, index) => (
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
