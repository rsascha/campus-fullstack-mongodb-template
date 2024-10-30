import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import QrCode from "./pages/QrCode";
import { RootLayout } from "./pages/RootLayout";
import Scanner from "./pages/Scanner";
import Users from "./pages/Users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Users />} />
      <Route path="qrcode" element={<QrCode />} />
      <Route path="scanner" element={<Scanner />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
