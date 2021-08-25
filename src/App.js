import "./reset_scss/RESET.scss"
import "./App.scss"
import Render_Notes from "./components/about_notes";

function App() {
  

  return (
    <div className ="main_wrapper">
      <h1>Welcome, you can create, update and delete your Todos</h1>
      <Render_Notes />
    </div>
  );
}

export default App;
