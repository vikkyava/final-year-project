import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(code, title, unit, status) {
  return { code, title, unit, status };
}

const harmarttanSemesterCourses = [
  createData('CHM 131', 'General Physical Chemistry', '3', 'R'),
  createData('CHM 151', 'Practical Chemistry I', '1', 'R'),
  createData('MTH 101', 'Elementary Mathematic (Math I)', '3', 'R'),
  createData('MTH 103', 'Elementary Diff an Integral Cal.', '3', 'R'),
  createData('STA 101', 'Introduction to Probability', '2', 'R'),
];

const rainSemesterCourses = [
  createData('CHM 131', 'General Physical Chemistry', '3', 'R'),
  createData('CHM 151', 'Practical Chemistry I', '1', 'R'),
  createData('MTH 101', 'Elementary Mathematic (Math I)', '3', 'R'),
  createData('MTH 103', 'Elementary Diff an Integral Cal.', '3', 'R'),
  createData('STA 101', 'Introduction to Probability', '2', 'R'),
];

export default function LevelThree() {
  return (
   <div className='border-t pt-5'>
    <h1 className='text-lg font-bold mb-5'>300 Level Harmattan Semester Courses</h1>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>S/N</StyledTableCell>
            <StyledTableCell align="center">Course Code</StyledTableCell>
            <StyledTableCell align="center">Course Title</StyledTableCell>
            <StyledTableCell align="center">Course Unit</StyledTableCell>
            <StyledTableCell align="center">Course Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {harmarttanSemesterCourses.map((course, index) => (
            <StyledTableRow key={course.title}>
              <StyledTableCell component="th" scope="row" align='center'>
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{course.code}</StyledTableCell>
              <StyledTableCell align="center">{course.title}</StyledTableCell>
              <StyledTableCell align="center">{course.unit}</StyledTableCell>
              <StyledTableCell align="center">{course.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <h1 className='text-lg font-bold my-5'>300 Level Rain Semester Courses</h1>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>S/N</StyledTableCell>
            <StyledTableCell align="center">Course Code</StyledTableCell>
            <StyledTableCell align="center">Course Title</StyledTableCell>
            <StyledTableCell align="center">Course Unit</StyledTableCell>
            <StyledTableCell align="center">Course Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rainSemesterCourses.map((course, index) => (
            <StyledTableRow key={course.title}>
              <StyledTableCell component="th" scope="row" align='center'>
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{course.code}</StyledTableCell>
              <StyledTableCell align="center">{course.title}</StyledTableCell>
              <StyledTableCell align="center">{course.unit}</StyledTableCell>
              <StyledTableCell align="center">{course.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
  );
}