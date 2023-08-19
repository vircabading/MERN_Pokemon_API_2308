import React from "react";

import NavBarView from "./components/NavBarView";

///////////////////////////////////////////////////
//  MAIN APPLICATION
///////////////////////////////////////////////////

function App() {
  return (
    <main>
      <NavBarView />
      {/* ///// Main Content Area //////////// */}
      <div className='container mt-4 p-2 round bg-white' >
        <h1>Pokemon API</h1>
      </div>
    </main>

  );
}

export default App;
