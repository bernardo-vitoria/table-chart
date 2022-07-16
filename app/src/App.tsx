import { Table, Chart } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>
      <Routes>
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
