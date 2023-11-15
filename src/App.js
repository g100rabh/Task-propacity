import { Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./Components/Layout/Root";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />} />
      </Routes>
    </div>
  );
}

export default App;
