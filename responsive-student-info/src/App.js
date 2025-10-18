import React from 'react';
import StudentInfo from './StudentInfo';

function App() {
  return (
    <div>
      <h2>Responsive Student Info</h2>
      <StudentInfo
        name="Rajareddy"
        email="Rajareddy@example.com"
        course="React Development"
      />
    </div>
  );
}

export default App;