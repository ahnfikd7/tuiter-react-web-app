import './vendors/bootstrap/css/bootstrap.css';
import './vendors/fontawesome/css/all.css';



import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index.js";

import {BrowserRouter} from "react-router-dom"; //navigate between multiple components
import {Routes, Route} from "react-router"; //specifying a path




function App() {

  return (
      <BrowserRouter>

      <div className="container">
         <Routes>
      <Route path={"/*"}
      element={ <Labs/>} />

                      <Route path={"/hello"}
                             element={ <HelloWorld/>} />

                              <Route path={"/tuiter/*"}
                                     element={ <Tuiter/>} />



         </Routes>

  </div>
      </BrowserRouter>

  );
}
export default App;





