import { Box, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/layout.css';
import { VscMenu } from 'react-icons/vsc';
import NavigationDialog from '@/components/NavigationDialog';

const DefaultLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box background="background" className="container">
        <Box className="border">
          <Box className="nav-container">
            <Box className="navigation">
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
                About
              </NavLink>
              <NavLink to="/resume" className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
                Resume
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
              >
                Portfolio
              </NavLink>
            </Box>
            <Box className="menu-button">
              <Box>
                <IconButton
                  aria-label="Search database"
                  variant="outline"
                  size="lg"
                  onClick={() => setIsOpen(!isOpen)}
                  className="button"
                >
                  <VscMenu />
                </IconButton>
              </Box>
            </Box>
            <NavigationDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </Box>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
