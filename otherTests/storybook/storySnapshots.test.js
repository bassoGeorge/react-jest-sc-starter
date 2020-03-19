import initStoryshots from "@storybook/addon-storyshots";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import React from "react";

/* React test renderer has an issue with portals. Seems like react testing library also screws up a bit */
beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
    return element;
  });
});

afterEach(() => {
  ReactDOM.createPortal.mockClear();
});

initStoryshots({
  // In case you need to wait a tick, turn asyncJest true and in the test function, call done() when its done
  asyncJest: false,
  test: ({ story, context, done }) => {
    const StoryElement = story.render;
    const { container } = render(<StoryElement />);
    expect(container.firstChild).toMatchSnapshot();
  }
});
