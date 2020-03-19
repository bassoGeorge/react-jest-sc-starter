import { addDecorator } from "@storybook/react";
import React, { Fragment } from "react";

import { GlobalStyles } from "../src/atoms/GlobalStyles/GlobalStyles";

import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

/**
 * Add any Global Styles component you need here
 */
addDecorator(storyFn => (
  <Fragment>
    <GlobalStyles />
    {storyFn()}
  </Fragment>
));

addDecorator(withA11y);
addDecorator(withKnobs);
