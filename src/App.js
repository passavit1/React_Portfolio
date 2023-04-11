import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
