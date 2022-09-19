import { Routes, Route } from "react-router-dom";

import { HomeStudys } from "../pages";
import { Navbar } from "./Navbar";

export const AppNavigate = () => {
    return (
      <div className="App">

        <Navbar />
  
        <h1>These are my studys</h1>
  
        <Routes>
          <Route path="/*" element={<HomeStudys />} />
  
          <Route path="/home" element={<HomeStudys />} />
          {/* <Route path="/html" element={<HtmlPage />} />
          <Route path="/css" element={<CssPage />} />
          <Route path="/js" element={<JsPage />} />
          <Route path="/react" element={<ReactPage />} /> */}
        </Routes>
        
      </div>
    );
  };
  