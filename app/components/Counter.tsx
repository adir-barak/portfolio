'use client';
import { useState, useEffect } from 'react';

type Props = {};

export default function Counter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const getNextJune7th = () => {
      const today = new Date();
      const nextJune7th = new Date(today.getFullYear(), 5, 7); // Months start from 0
      if (today > nextJune7th) {
        nextJune7th.setFullYear(today.getFullYear() + 1);
      }
      return nextJune7th;
    };

    const targetDate = getNextJune7th().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
    const currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
    const difference = Math.floor((Number(new Date(targetDate)) - Number(new Date(currentDate))) / 1000);
    setSeconds(difference);

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    // Clearing the interval upon unmounting
    return () => clearInterval(intervalId);
    
  }, []);

  return <>{seconds.toLocaleString('en-US')}</>;
}
