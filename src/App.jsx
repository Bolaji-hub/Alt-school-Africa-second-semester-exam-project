import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import UseCounter from "./Pages/UseCounter";
import UseReducer from "./Pages/UseReducer";
import TestErrorBoundary from  "./Pages/ErrorBoundary";
import ErrorBoundary from "./componenets/ErrorBoundary";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";


export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Use-Counter">CustomHook</Link>
          <Link to="/Use-Reducer">UseReducer</Link>
          <Link to="/Error-Boundary">ErrorBoundary</Link>
        </nav>
        <Routes>
        <Route path="/" element={<Home />}></Route> 
          <Route path="/use-counter" element={<UseCounter />}></Route>
          <Route path="/use-reducer" element={<UseReducer />}></Route>
          <Route path="/Error-Boundary" element={<TestErrorBoundary />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
