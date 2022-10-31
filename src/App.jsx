import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import UseCounter from './UseCounter';
import UseReducer from "./UseReducer";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UseCounter />}></Route>
      <Route path="/use-reducer" element={<UseReducer />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
