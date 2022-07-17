import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";

const customRender = (ui: JSX.Element, { ...options } = {}) => {
  const CombinedProviders = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient();

    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  return render(ui, { wrapper: CombinedProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render, userEvent };
