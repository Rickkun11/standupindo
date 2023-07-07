import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

import UsersHomepage from "./pages/UsersHomepage";
import UsersVideo from "./pages/UsersVideo";
import UsersHistori from "./pages/UsersHistori";
import UserStreamingPage from "./pages/StreamingPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/users" element={<UsersHomepage />} />
        <Route path="/users/video" element={<UsersVideo />} />
        <Route path="/users/histori" element={<UsersHistori />} />
        <Route path="/users/VideoID" element={<UserStreamingPage />} />
    </Routes>
</BrowserRouter>





  );
}

export default App;
