import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import { useState } from 'react';
import ViewFiles from './components/filesView/ViewFiles';
import { auth, provider } from './Firebase';

import facebook_icon from './media/facebook.png';
import google_icon from './media/google.png';
import twitter_icon from './media/twitter.png';
import mainLogo from './media/logo_login.png';
import image_login from './media/cloud.gif';


function App() {

  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
      <div className="App">
        {
        user ? (
          <>
            <Header userPhoto={user.photoUrl} />
            <div className="App_main">
              <Sidebar/>
              <ViewFiles/>
            </div>
          </>
        ) : (
          <>  
            <div className='main_login'>
              <div className='login_left'>
                <img src={image_login} alt='image_left'></img>
              </div>
              <div className='login_right'>
                <div className='logo_main'>
                  <img src={mainLogo} alt='logo_image'></img>
                </div>
                <div className='login_message'>
                  <p>Welcome to <span>DriveIn</span></p><br/>
                  <p className='login_desc'>DriveIn is a free cloud storage web application, that you can easly use to store all of your files.</p>
                </div>
                <div className='login_btn'>
                  <button onClick={handleLogin} ><img src={google_icon} alt='google'></img></button>
                  <button disabled><img src={facebook_icon} alt='facebook'></img></button>
                  <button disabled><img src={twitter_icon} alt='twitter'></img></button>
                </div>
              </div>
            </div>
          </>
        )

        }
    </div>
  );
}

export default App;
