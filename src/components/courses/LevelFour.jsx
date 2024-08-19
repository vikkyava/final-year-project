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
  createData("ECE 421", "Digital Electronics", "3", "C"),
  createData("ECE 431", "Electromagnetic Fields and Waves II", "2", "C"),
  createData("ECE 441", "Control Engineering I", "3", "C"),
  createData("ECE 445", "Assembly Language Programming", "2", "C"),
  createData("ECE 451", "Principles of Communication Engineering", "3", "C"),
  createData("ECE 471", "Electric Power Principles", "3", "C"),
  createData("ECE 481", "Laboratory course and Mini Project III", "1", "C"),
  createData("CVE 485", "Civil Engineering Practice", "2", "C"),
  createData("GET 463", "Engineering Statistics", "2", "C"),
];

const rainSemesterCourses = [
  createData(
    "ECE 392",
    "Student Industrial Work Experience Scheme I (SIWES I)",
    "2",
    "C"
  ),
  createData(
    "ECE 492",
    "Student Industrial Work Experience Scheme II (SIWES II)",
    "6",
    "C"
  ),
  createData("GET 222", "Student Work Experience Programme (SWEP)", "3", "C"),
];

export default function LevelFour() {
  return (
    <div className="border-t pt-5">
      <h1 className="text-lg font-bold mb-5">
        400 Level Harmattan Semester Courses
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
        400 Level Rain Semester Courses
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
