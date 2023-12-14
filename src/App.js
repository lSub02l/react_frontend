import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="login" element={ <LoginPage/> } />
            <Route path="register" element={ <RegisterPage/> } />
            <Route path="search" element={ <SearchPage/> }/>
            <Route path="dashboard" element={ <DashboardPage/> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;