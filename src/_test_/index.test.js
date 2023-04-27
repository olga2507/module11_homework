import { getPercents } from "../index.js";

describe("test getPercents", () => {
  it("getPercents 200 / 100 * 30 to equal 60", () => {
    const result = getPercents(30, 200);
    expect(result).toBe(60);
  }),
  it("getPercents (200 / 100) * 0 to equal 0", () => {
    const result = getPercents(0, 200);
    expect(result).toBe(0);
  }),
  it("getPercents (0 / 100) * 20 to equal 0", () => {
    const result = getPercents(20, 0);
    expect(result).toBe(0);
  });
});