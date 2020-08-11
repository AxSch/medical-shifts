import React from 'react';
import Shifts from './Containers/Shifts';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="container mx-auto">
      <ErrorBoundary>
        <Shifts />
      </ErrorBoundary>
    </div>
  );
}

export default App;
