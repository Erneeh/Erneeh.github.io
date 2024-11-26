import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Router } from "react-router-dom";
=======
import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> bcddcfb (Initial commit)
import { AnimatePresence } from "framer-motion";
import NavigationBar from "./components/NavigationBar";
import AppRoutes from "./Routes";


function App() {

  return (
    <>
      <AnimatePresence mode="wait">
        <NavigationBar AppRoutes={<AppRoutes />} />
      </AnimatePresence>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}