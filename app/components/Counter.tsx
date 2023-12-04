'use client';
import { useState, useEffect } from 'react';

type Props = {};

// Counter component that displays the time remaining until the next June 7th
export default function Counter() {
  // State variable to store the remaining seconds
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Function to calculate the date of the next June 7th
    const getNextJune7th = () => {
      const today = new Date();
      const nextJune7th = new Date(today.getFullYear(), 5, 7); // Months start from 0
      if (today > nextJune7th) {
        nextJune7th.setFullYear(today.getFullYear() + 1);
      }
      return nextJune7th;
    };

     // Get the target date (next June 7th) and current date in Jerusalem time zone
    const targetDate = getNextJune7th().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
    const currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
    // Calculate the time difference in seconds
    const difference = Math.floor((Number(new Date(targetDate)) - Number(new Date(currentDate))) / 1000);
    setSeconds(difference); // Set the initial remaining seconds

    // Update the remaining seconds every second using setInterval
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    // Clear the interval upon unmounting
    return () => clearInterval(intervalId);
    
  }, []);

  // Display the remaining seconds in the component
  return <>{seconds.toLocaleString('en-US')}</>;
}
