import { MainPage } from "pages";
import { render } from "utils/testing";

describe("mainPage", () => {
  it("should render properly", async () => {
    const { findByTestId, findAllByTestId } = render(<MainPage />);

    const table = await findByTestId("table");
    const menuBar = await findByTestId("menuBar");
    const tableRows = await findAllByTestId("metricsRow");

    expect(table).toBeInTheDocument();
    expect(menuBar).toBeInTheDocument();
    expect(tableRows).toHaveLength(2);
  });
});
