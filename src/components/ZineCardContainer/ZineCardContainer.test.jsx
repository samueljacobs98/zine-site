import { customRender } from "../../utils/testUtils";
import ZineCardContainer from "../../components/ZineCardContainer/ZineCardContainer";

it("should match ZineCardContainer component snapshot", () => {
  const { container } = customRender(<ZineCardContainer />);

  expect(container).toMatchSnapshot();
});
