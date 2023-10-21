import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h2>Hello from React!</h2>
      {/* Add your React components and content here */}
    </div>
  );
}

// Render the React component into the "react-root" div in the HTML
ReactDOM.render(<App />, document.getElementById('react-root'));