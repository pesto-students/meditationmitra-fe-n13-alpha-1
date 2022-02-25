import styled from "@emotion/styled";
import { Box as MaterailBox } from "@mui/material";

const Box = styled(MaterailBox)`
  ${({ header }) =>
    header &&
    `
          padding: 1rem;
          background: var(--white);
          min-height: 35px;
          border-bottom: 1px solid var(--orange);
    `};

  ${({ hpPartOne }) =>
    hpPartOne &&
    `
          padding: 1rem;
          background: var(--orange);
          min-height: 35px;
          position: relative;
          color: var(--white);
    `};

  ${({ mobHeader }) =>
    mobHeader &&
    `
          width: 100%;
          margin: auto;
          bottom: 0;
          position: fixed;
          min-height: 65px;
          background: var(--white); 
          border-radius: 30px 30px 0px 0px; 
          z-index: 2;
    `};

  ${({ mobBody }) =>
    mobBody &&
    `
          width: 100%;
          bottom: 0;
          position: absolute;
          height: 90%;
          background: var(--bgColor); 
          border-radius: 30px 30px 0px 0px; 
          z-index: 1;
          overflow: auto;
    `};
  ${({ height }) => height && `height: ${height}`}
  ${({ mobCourseCard }) =>
    mobCourseCard &&
    `
          width: 90%;
          padding: 5%;
          background: var(--white); 
          border-radius: 10px; 
    `};
`;

export default Box;
