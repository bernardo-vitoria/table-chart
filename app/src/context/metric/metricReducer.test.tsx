import metricReducer from "context/metric/metricReducer";
import { metricTypes } from "context/metric/metricTypes";

const mockMetric = {
  id: "cln_shift",
  label: "Cleaning in shift",
  value: 2280,
  type: "secs",
  description:
    "Time spent (in seconds) cleaning the machines during the last shift",
  category: "shift",
};

const initialState = {
  selectedMetric: undefined,
  setSelectedMetric: jest.fn(),
};

describe("Metric Reducer", () => {
  it("SELECTED_METRIC", () => {
    const action = {
      type: metricTypes.SELECTED_METRIC,
      payload: { selectedMetric: mockMetric },
    };

    const result = metricReducer(initialState, action);

    expect(result.selectedMetric).toBe(mockMetric);
  });
});
