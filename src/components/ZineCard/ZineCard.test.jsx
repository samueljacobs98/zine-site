import { customRender } from "../../utils/testUtils";
import ZineCard from "./ZineCard.jsx";

it("should match ZineCard component snapshot", () => {
  const { container } = customRender(<ZineCard />);

  expect(container).toMatchSnapshot();
});
