import getAllReducers from "./getAllReducers";

const noOp = () => {};

describe("getAllReducers", () => {
  it("returns reducers hash from pages", () => {
    const pages = {
      pageA: { component: noOp, reducer: noOp },
      pageB: { component: noOp, reducer: noOp },
      pageC: { component: noOp }
    };

    const result = getAllReducers(pages);

    expect(result).toEqual({ pageA: noOp, pageB: noOp });
  });
});
