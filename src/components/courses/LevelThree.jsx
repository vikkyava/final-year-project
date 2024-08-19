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
  createData("ECE 315", "Electric Circuit Theory I", "3", "C"),
  createData("ECE 321", "Electronic Circuit I", "3", "C"),
  createData("ECE 331", "Electromagnetic Fields and Waves I", "3", "C"),
  createData("ECE 341", "Data Comm. & Computer Networks", "3", "C"),
  createData("ECE 361", "Electrical Machines I", "3", "C"),
  createData("ECE 381", "Laboratory Course and Mini Project I", "1", "C"),
  createData("GET 361", "Engineering Mathematics III", "3", "C"),
  createData("GET 373", "Engineer in Society", "1", "C"),
  createData("GNS 307", "Politics and Inter-Governmental Relations", "1", "R"),
  createData("VTE 303", "Entrepreneurship Mentorship", "0", "C"),
];

const rainSemesterCourses = [
  createData("ECE 312", "Measurement and Instrumentation", "2", "C"),
  createData("ECE 316", "Electric Circuit Theory II", "3", "C"),
  createData("ECE 322", "Electronic Circuit II", "3", "C"),
  createData("ECE 342", "Applied Computer Programming", "2", "C"),
  createData("ECE 362", "Electrical Machines II", "3", "C"),
  createData("ECE 382", "Laboratory Course & Mini Project II", "1", "C"),
  createData("GET 302", "Engineering Economics", "3", "C"),
  createData("GET 362", "Engineering Mathematics IV", "3", "C"),
  createData("GET 376", "Engineering Communication", "1", "C"),
  createData("VTE 304", "Enterprise Resource Planning", "2", "E"),
];

export default function LevelThree() {
  return (
    <div className="border-t pt-5">
      <h1 className="text-lg font-bold mb-5">
        300 Level Harmattan Semester Courses
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
        300 Level Rain Semester Courses
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
