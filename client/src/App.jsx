import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Register from "./pages/Register";
import Login from "./pages/Login";
import AppLayout from "./components/AppLayout";
import AdminPanel from "./pages/AdminPanel";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import HistoryPage from "./pages/HistoryPage";
import SavedVideosPage from "./pages/SavedVideosPage";
import VideoPageBySearch from "./pages/VideoPageBySearch";
import ProfilePage from "./pages/ProfilePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="video-page/:id" element={<VideoPage />} />
            <Route
              path="video-page/search/:id"
              element={<VideoPageBySearch />}
            />
            <Route path="history" element={<HistoryPage />} />
            <Route path="saved-videos" element={<SavedVideosPage />} />
            <Route path="profile/:id" element={<ProfilePage />} />
            <Route path="admin-panel" element={<AdminPanel />} />
          </Route>
        </Routes>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              maxWidth: "500px",
              fontSize: "16px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#374151",
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
