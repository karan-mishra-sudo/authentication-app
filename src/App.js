import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Component/Profile';
function App() {
  const {user,loginWithRedirect,logout}= useAuth0();
  console.log(user)
  return (
    <div className="App">
      <header className='App-header'>
        <Profile/>
        <button onClick={(e) => loginWithRedirect()}>login with redirect</button>
        <button onClick={(e)=> logout()} >logout</button>
      </header>
    </div>
  );
}

export default App;
