import React from "react";
import { shallow } from "enzyme";
import View from "./View";

describe("View", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      todos: [],
      create: jest.fn()
    };

    wrapper = shallow(<View {...props} />);
  });

  xit("calls create method", () => {
    wrapper.find(".create-todo").simulate("click");
    expect(props.create).toBeCalled();
  });
});
