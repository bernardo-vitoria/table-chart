import { MetricsTable, Chart } from "pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MetricsTable />} />
        </Routes>
        <Routes>
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
