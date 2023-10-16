import "./App.css";
import "./firebase";
import { Signin } from "./compnents/auth/Signin";
import { Signup } from "./compnents/auth/Signup";
import AuthDetails from "./compnents/auth/AuthDetails";

function App() {
  return (
    <div className="App">
      <Signin />
      <Signup />
      <AuthDetails />
    </div>
  );
}

export default App;
