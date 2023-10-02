import { useEffect, useState } from 'react';

const texts = ['Harsha G', 'Another Text', 'Yet Another Text']; // Add your desired texts here

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (<div className="mb-16">
  <h1 className="animate-rotateText">{texts[index]}</h1>
</div>
   
  );
}

export default RotatingText;