import { UserContext } from '../../data';
import { useState } from 'react';
import Main from '../Main'


function App() {
  // grab the provider object from UserContext 
    const {Provider: UserInfo} = UserContext
    const [currentUser, setCurrentUser] = useState(null)
    // console.log(UserInfo)
  return (
    <div className="App">
        {/* wrap header and main with context  */}
        <UserInfo value={{
                user: currentUser,
                setUser: setCurrentUser
            }}>
          
            <Main/>
        </UserInfo>
    </div>
  );
}

export default App;
