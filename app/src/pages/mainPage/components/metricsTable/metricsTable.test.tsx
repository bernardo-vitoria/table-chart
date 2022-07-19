import MetricsTable from "pages/mainPage/components/metricsTable/MetricsTable";
import * as axios from "axios";
import { URL } from "api";
import { render, waitFor } from "utils/testing";

describe("metricsTable", () => {
  it("should render properly", async () => {
    const { findByTestId, findAllByTestId } = render(<MetricsTable />);

    const table = await findByTestId("table");
    const tableRows = await findAllByTestId("metricsRow");

    expect(table).toBeInTheDocument();
    expect(tableRows).toHaveLength(2);
  });

  it("should call endpoint /metrics", async () => {
    const axiosPatchSpy = jest.spyOn(axios.default, "get");
    const { findAllByTestId } = render(<MetricsTable />);

    await findAllByTestId("metricsRow"); // to prevent console warning

    await waitFor(() => expect(axiosPatchSpy).toHaveBeenCalledTimes(1));

    await waitFor(() =>
      expect(axiosPatchSpy).toHaveBeenCalledWith(URL.getMetrics)
    );
  });
});
