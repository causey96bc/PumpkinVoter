import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../.config";
function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return <div className="App"></div>;
}

export default App;
