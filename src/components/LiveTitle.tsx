import { useEffect, useState } from "react";

interface Props {
  text: string;
}

function LiveTitle({ text }: Props) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return <div className="color-white font-lg margin">{displayText}</div>;
}
export default LiveTitle;
