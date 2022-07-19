import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";
import { MetricContext, MetricStore } from "context";

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
      <QueryClientProvider client={queryClient}>
        <MetricContext.Provider value={store.MetricStore()}>
          {children}
        </MetricContext.Provider>
      </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: CombinedProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render, userEvent };
