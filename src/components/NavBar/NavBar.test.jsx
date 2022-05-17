import { customRender } from "../../utils/testUtils";
import NavBar from "./NavBar.jsx";

it("should match NavBar component snapshot", () => {
  const { container } = customRender(<NavBar />);

  expect(container).toMatchSnapshot();
});

it("should match window width resize", () => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 768,
  });

  window.dispatchEvent(new Event("resize"));

  expect(window.innerWidth).toBe(768);
});
