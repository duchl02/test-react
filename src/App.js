import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./Home/Home";
import Countries from "./Countries/Countries";
import Nav from "./Nav/Nav";
import { CountryData } from "./Components/CountryData";
function App() {
  let dataCountries = CountryData
  const [data,setData] = useState(dataCountries)
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/countries">
            <Countries data={data} setData={setData} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
