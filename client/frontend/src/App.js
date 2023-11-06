
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Messages from './components/Messages';
import Buddy from './components/Buddy';
import Market from './components/Market';
import Activity from './components/RideList';
import CreateRide from './components/CreateRide';
import JoinRide from './components/JoinRide';
import ViewRide from './components/ViewRide';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path={'/'} element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/buddy" element={<Buddy />} />
        <Route path="/market" element={<Market />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/createRide" element={<CreateRide />} />
        <Route path="/joinRide" element={<JoinRide />} />
        <Route path="/viewRide" element={<ViewRide />} />

        
        {/* <Route path="" element={<NotFound />} />*/}
        
      </Routes>
    </Router>
  );
}

export default App;
