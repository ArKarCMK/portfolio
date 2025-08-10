import { RouterProvider } from 'react-router-dom';
import About from './pages/about';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import DefaultLayout from './layouts/default';
import { createBrowserRouter, Route, createRoutesFromElements, Navigate } from 'react-router-dom';
import { system } from './theme';
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Navigate to="/about" replace />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
