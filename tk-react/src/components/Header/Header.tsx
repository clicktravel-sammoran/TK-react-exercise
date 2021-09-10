import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';

const Header = ():JSX.Element => (
  <Navbar className={styles.header} variant="dark" expand="lg" sticky="top">
    <Navbar.Brand className={styles.brand} href="/">Sam Moran</Navbar.Brand>
  </Navbar>

);

export default Header;
