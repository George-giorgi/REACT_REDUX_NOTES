import "./reset_scss/RESET.scss"
import "./App.scss"
import {useSelector} from "react-redux"
import Render_Notes from "./components/about_notes";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Theme from "./components/changeTheme/Theme";
import {
  BrowserRouter as Router, Route, Redirect
} from "react-router-dom"

function App() {
 
  const reg_log_depend = useSelector(state=>state.responce)
 
  const user = localStorage.getItem("user")
  
  return (
    <Router>
      <div className ="main_wrapper " style ={user&& {marginTop: "100px"}}>
        <Theme/>
        <h1 style = {user && {display:"none"}} >
          Welcome, you can create, update and delete your Notes...
        </h1>
        {user?  <Redirect to= "/notes" />: <Redirect to = "/" />}
       
        <Route exact path = "/">
          {
            reg_log_depend.reps === "Successful registration" ? <Login back ={reg_log_depend.reps} />:(
              <div className = "first_page">
                  <Login/>
                  <Register/>
              </div>
            )
          }
        </Route>
        <Route path ="/notes">
          {user? <Render_Notes /> : <Redirect to ="/" /> }  
        </Route>
      </div>
    </Router>
  );
}

export default App;
