// const AppFooter = () => {
//   return <h3>Footer</h3>;
// };

// export default AppFooter;

import React from 'react';

const AppFooter = () => {
  return (
    <footer style={footerStyle}>
    {/* <footer > */}
      <p>Made with  by &#10084; Mayuresh  | © {new Date().getFullYear()}   All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  // backgroundColor: '#f0f0f0',
  padding: '10px',
  textAlign: 'center',
  margin:"50px auto"
};

export default AppFooter;
