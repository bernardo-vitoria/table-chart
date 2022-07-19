import { MetricState } from "context";
import { MainPage } from "pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { URL } from "api";

function App() {
  const queryClient = new QueryClient();
  const client = new ApolloClient({
    uri: URL.getMetricsQL,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <MetricState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </MetricState>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
