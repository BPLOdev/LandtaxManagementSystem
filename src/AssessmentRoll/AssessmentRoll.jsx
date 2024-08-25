import { useState, useEffect } from 'react';
import './AssessmentRoll.scss';
import Header from '../header/Header';
import MiniDrawer from '../drawer/Drawer';
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='drawer'>
        <MiniDrawer/>
      </div>

      <Typography paragraph>
            <h1>REAL PROPERTY TAX MANAGEMENT SYSTEM</h1>
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>

    </>
  );
}

export default App;

// {/* <div className="Header">
// <Header />
// {/* Other components and content */}
// </div>

// <div className="card">
// <h1>REAL PROPERTY TAX MANAGEMENT SYSTEM</h1>
// <p>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis architecto repellendus quisquam repudiandae excepturi ullam magni quo consequatur aut. Excepturi iste ab sapiente molestiae recusandae error commodi officia at doloribus?
//   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum animi velit dolorem cum optio! Laboriosam alias ab in quisquam quam fuga optio nulla. Ipsam deleniti laborum dolorem officiis in architecto!
// </p>
// </div>
// <p className="read-the-docs">
// Click HERE to Start
// </p> */}