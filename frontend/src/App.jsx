import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <Layout key="layout">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
