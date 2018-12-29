import React from "react";
import { shallow } from "enzyme";
import View from "./View";

describe("View", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      create: jest.fn()
    };

    wrapper = shallow(<View {...props} />);
  });

  it("calls create method", () => {
    wrapper.find(".create-todo").simulate("click");
    expect(props.create).toBeCalled();
  });
});
