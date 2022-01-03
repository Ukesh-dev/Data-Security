interface breakpoints {
  xs: string;
  md: string;
  lg: string;
}
export interface theme {
  colors: {
    primary?: string;
    secondary?: string;
  };
  "font-family": {};
  breakpoints: {
    xs: string;
    md: string;
    lg: string;
  };
  up: (breakpoint: string) => string;
  down: (breakpoing: string) => string;
  between: (breakpoint: string, breakpointmin: string) => string;
}
export const Theme: theme = {
  colors: {},
  "font-family": {},
  breakpoints: {
    xs: "565px",
    md: "960px",
    lg: "1100px",
  },
  // up: (breakpoint: string): string =>
  //   `@media (min-width:calc(${breakpoint} + 0.02px )) `,
  // down: (breakpoint: string): string => `@media (max-width:${breakpoint}) `,
  up: (breakpoint, vertical = false) =>
    `@media (min-${
      vertical ? "height" : "width"
    }: calc(${breakpoint} + 0.02px))`,
  down: (breakpoint, vertical = false) =>
    `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,
  between: (breakpointMin, breakpointMax, vertical = false) =>
    `@media (max-${vertical ? "height" : "width"}: ${breakpointMax}) and (min-${
      vertical ? "height" : "width"
    }: calc(${breakpointMin} + 0.02px))`,
};

// export default as Theme
