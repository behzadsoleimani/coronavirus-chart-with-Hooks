import React from 'react';
import Button1 from "./page1"
import Button2 from "./page2"
import { AppProvider } from "./context";
import './App.css';



function App() {

  return (
    <AppProvider>
        <Button1 />
        <Button2 />
      </AppProvider>
  );
}

export default App;
