import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";
import { MetricContext, MetricStore } from "context";
import { MockedProvider } from "@apollo/client/testing";
import { METRICS_QUERY } from "service/useMetricsGet";

const mocks = [
  {
    request: {
      query: METRICS_QUERY,
      variables: {},
    },
    result: {
      data: {
        metrics: [
          {
            __typename: "Metric",
            id: "oee",
            label: "oee",
            value: 0.68,
            type: "percentage",
            description: "The overall equipment efficiency in %",
            category: "efficiency",
          },
          {
            __typename: "Metric",
            id: "sl",
            label: "Speed loss",
            value: -10.5,
            type: "number",
            description: "The line speed loss",
            category: "efficiency",
          },
        ],
      },
    },
  },
];

const defaultStore = {
  MetricStore,
};

const customRender = (
  ui: JSX.Element,
  { store = defaultStore, ...options } = {}
) => {
  const CombinedProviders = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient();

    return (
      <MockedProvider mocks={mocks} addTypename={false}>
        <QueryClientProvider client={queryClient}>
          <MetricContext.Provider value={store.MetricStore()}>
            {children}
          </MetricContext.Provider>
        </QueryClientProvider>
      </MockedProvider>
    );
  };

  return render(ui, { wrapper: CombinedProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render, userEvent };
