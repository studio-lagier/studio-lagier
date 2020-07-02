import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "components/Router";
import { ScrollProvider } from "./components/ScrollListener";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <ScrollProvider>
          <Router>
            <Routes path="*" />
          </Router>
        </ScrollProvider>
      </React.Suspense>
    </Root>
  );
}

export default App;
