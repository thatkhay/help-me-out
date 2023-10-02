
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/log-in" element={<LoginPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
