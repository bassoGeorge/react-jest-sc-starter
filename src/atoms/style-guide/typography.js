import { css } from "styled-components";
import React from "react";

export const typography = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
    margin: 0;
  }

  h1 {
    font-size: 4.6rem;
    line-height: 5.4rem;
  }
  h2 {
    font-size: 3.8rem;
    line-height: 4.6rem;
  }
  h3 {
    font-size: 3rem;
    line-height: 3.8rem;
  }
  h4 {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
  h5 {
    font-size: 2rem;
    line-height: 2.8rem;
  }
  body {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  .small-text {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
  .tiny-text {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;
