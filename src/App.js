import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './components/Container';

import './App.css';

const Header = lazy(() =>
  import('./pages/Header' /* webpackChunkName: "Example" */),
);

function App() {
  return (
    <Container>
      <Suspense fallback={<div>Downloading...</div>}>
        <Routes>
          <Route end path="/" element={<Header />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
