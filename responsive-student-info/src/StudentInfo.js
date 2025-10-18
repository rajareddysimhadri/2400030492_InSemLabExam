import React, { useState, useEffect } from 'react';
import './StudentInfo.css';

const StudentInfo = ({ name, email, course }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`student-container ${isMobile ? 'vertical' : 'horizontal'}`}>
      <div className="student-item"><strong>Name:</strong> {name}</div>
      <div className="student-item"><strong>Email:</strong> {email}</div>
      <div className="student-item"><strong>Course:</strong> {course}</div>
    </div>
  );
};

export default StudentInfo;