import { Box, CloseButton, Dialog, Portal } from '@chakra-ui/react';
import type React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation-dialog.css';

interface NavigationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationDialog: React.FC<NavigationDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog.Root placement={'center'} open={isOpen}>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content bg="background" width="90vw">
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={onClose} />
            </Dialog.CloseTrigger>

            <Dialog.Body>
              <Box className="link-container">
                <Box className="links">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
                    onClick={onClose}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
                    onClick={onClose}
                  >
                    Resume
                  </NavLink>
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
                    onClick={onClose}
                  >
                    Portfolio
                  </NavLink>
                </Box>
              </Box>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default NavigationDialog;
