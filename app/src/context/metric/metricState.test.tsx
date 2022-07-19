import { useEffect } from "react";
import { render } from "utils/testing";
import { useMetricContext } from "./metricsContext";

interface ITestMetricState {
  request: string;
  // eslint-disable-next-line
  params: any;
}

function TestMetricState({ request, params }: ITestMetricState) {
  const { setSelectedMetric } = useMetricContext();

  useEffect(() => {
    switch (request) {
      case "setSelectedMetric":
        setSelectedMetric(params);
        break;

      default:
    }
  }, []);

  return <div />;
}

describe("Metric State", () => {
  it("should call setSelectedMetric with right params", () => {
    const expectedFilters = {
      id: "cln_shift",
      label: "Cleaning in shift",
      value: 2280,
      type: "secs",
      description:
        "Time spent (in seconds) cleaning the machines during the last shift",
      category: "shift",
    };

    const props = {
      request: "setSelectedMetric",
      params: expectedFilters,
    };

    const setSelectedMetric = jest.fn();

    render(<TestMetricState request={props.request} params={props.params} />, {
      store: {
        MetricStore: () => ({
          setSelectedMetric,
          selectedMetric: undefined,
        }),
      },
    });

    expect(setSelectedMetric).toHaveBeenCalledTimes(1);
    expect(setSelectedMetric).toHaveBeenCalledWith(expectedFilters);
  });
});
