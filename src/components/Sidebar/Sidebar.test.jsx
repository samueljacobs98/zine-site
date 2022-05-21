import { customRender } from "../../utils/testUtils";
import Sidebar from "./Sidebar.jsx";

it("should match NavBar component snapshot", () => {
  const { container } = customRender(<Sidebar />);

  expect(container).toMatchSnapshot();
});
