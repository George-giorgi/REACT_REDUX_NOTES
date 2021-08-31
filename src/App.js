import "./reset_scss/RESET.scss"
import "./App.scss"
import {useSelector} from "react-redux"
import Render_Notes from "./components/about_notes";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import {
  BrowserRouter as Router, Route, Redirect, useHistory
} from "react-router-dom"

function App() {
  
  const reg_log_depend = useSelector(state=>state.responce)
  const user = localStorage.getItem("user")
  
  return (
    <Router>
      <div className ="main_wrapper">
        <h1>Welcome, you can create, update and delete your Todos</h1>
        {user?  <Redirect to= "/notes" />: <Redirect to = "/" />}
       
        <Route exact path = "/">
          {
            reg_log_depend == "Successful registration" ? <Login back ={reg_log_depend} />:(
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
