
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { UserProvider } from './components/UserContext';
import Dashboard from './components/Dashboard';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Messages from './components/Messages';
import Buddy from './components/Buddy';
import Market from './components/Market';
import CreateRide from './components/CreateRide';
import JoinRide from './components/JoinRide';
import ViewRide from './components/ViewRide';
import MyRides from './components/MyRides';
import RideList from './components/RideList';
import LiveRide from './components/LiveRide';
import MyBike from './components/MyBike';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';



function App() {
  return (
    //<UserProvider>
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
        <Route path="/rideList" element={<RideList />} />
        <Route path="/createRide" element={<CreateRide />} />
        <Route path="/joinRide" element={<JoinRide />} />
        <Route path="/ride/:rideId" element={<ViewRide />} />
        <Route path="/joinedRide" element={<MyRides />} />
        <Route path="/liveRide" element={<LiveRide />} />
        <Route path="/myBike" element={<MyBike />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />

        {/* <Route path="" element={<NotFound />} />*/}
        
      </Routes>
    </Router>
    //</UserProvider>
  );
}

export default App;
