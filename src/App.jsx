import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/login/Login'; // Adjust the path if needed
import AssessmentRoll from '../src/AssessmentRoll/AssessmentRoll'; // Adjust the path if needed
import Layout from './Layout/layout';


function App() {
  return (
    <Router>
      <Routes>
        {/* No layout for the login page */}
        <Route path="/" element={<Login />} />

        {/* Routes that use the layout */}
        <Route element={<Layout />}>
          <Route path="/assessment-roll" element={<AssessmentRoll />} />
          {/* Add other routes that need the layout here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
