import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


 
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;

}


/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;

  /* font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background: hsl(var(--clr-dark)); */
  // display: grid;
  // grid-template-rows: min-content 1fr;
  // overflow-x: hidden;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
a,
select {
  font: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export interface Styles {
  justify?: string;
  align?: string;
  padding?: string;
  gap?: string;
  maxWidth?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  smPadding?: string;
  wrap?: string;
  height?: string;
  minHeight?: string;
  position?: string;
  margin?: string;
  inverse?: boolean | string;
  size?: string;
  mb?: string;
  mt?: string;
  weight?: string;
  spacing?: string;
}

export const MainHeading = styled.h1<Styles>`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2<Styles>`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;
export const TextWrapper = styled.span<Styles>`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;
export const Section = styled.section<Styles>`
  margin: ${({ padding }) => (padding ? "1px" : "2px")};
  padding: ${({ padding }) => (padding ? padding : "50px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "#071c2f")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  /* @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  } */
  ${({ theme: { down, breakpoints } }) => down(breakpoints.md)} {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const Row = styled.div<Styles>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;

export const Column = styled.div<Styles>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  display: inline-block;
  border-radius: 4px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  width: auto;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 800%;
  }
  &:hover {
    color: black;
  }
`;
/* aside {
  position: absolute;
  left: 0;
  top: 30%;

  .vertical-upright {
    font-size: 0.5rem;
    @include breakpoint(medium) {
      font-size: 0.7rem;
    }
    writing-mode: vertical-rl;
    text-orientation: upright;
    a {
      color: hsl(var(--clr-white));
      text-decoration: none;
    }
  }
} */
