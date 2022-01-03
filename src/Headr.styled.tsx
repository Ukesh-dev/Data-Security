import styled from "styled-components";
// import {theme} from './theme'

interface themeProps {
  primary: boolean;
  secondary: string;
}

export const Header = styled.header<themeProps>(
  ({ theme: { up, down, breakpoints }, primary }) => `
        height: 50px;
        width:500px;
        width: 500 px; 
        height; 500px;

        background-color: ${primary ? "black" : "blue"};
    ${up(breakpoints.md)} {
        // background: white;
        height: 50px;
        width:${breakpoints.lg};
    }
    // compiles to  @media (min-width: 576px) {}
    // where 576px is the breakpoints.sm
    ${down(breakpoints.md)} {
        height: 50px;
        background: #bada55;
        width: 70px;
    }
    // compiles to @media (max-width: 768px) {}
    // where 768px is the breakpoints.md

    // compiles to @media (min-width: 576px) and (max-width: 768px) {}
  `
);

// ! You can do this like as well by destructuring the props
// export const Header = styled.header<themeProps>`
//   ${({ theme }) => theme.down(theme.breakpoints.md)} {
//     background-color: purple;
//     height: 20px;
//     width: 1000px;
//   }

//   background: ${({ primary }) => (primary ? "red" : "black")};
//   height: 600px;
//   width: 300px;
// `;
