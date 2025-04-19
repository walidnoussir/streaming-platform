import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import AdminPanel from "./pages/AdminPanel";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import SettingsPage from "./pages/SettingsPage";
import HistoryPage from "./pages/HistoryPage";
import PlaylistsPage from "./pages/PlaylistsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<AppLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="video-page" element={<VideoPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="playlists" element={<PlaylistsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="admin-panel" element={<AdminPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
