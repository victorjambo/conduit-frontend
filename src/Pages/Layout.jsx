import React, { Fragment } from 'react';

import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Root from '../routes';

const Layout = () => (
  <Fragment>
    <Navbar />
    <Root />
    <Footer />
  </Fragment>
);

export default Layout;
