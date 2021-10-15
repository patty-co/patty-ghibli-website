import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";

import Routes from './config/Routes'

function App() {
  return (
    <BrowserRouter>
      <Route render={props => ( 
        <>
          <Header {...props}/>
          <Routes/>
        </>
      )}/>
    </BrowserRouter>
  );
}

export default App;
