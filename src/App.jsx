import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/login/Login';
import AssessmentRoll from '../src/AssessmentRoll/AssessmentRoll';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/assessment-roll" element={<AssessmentRoll />} />
      </Routes>
    </Router>
  );
}

export default App;
