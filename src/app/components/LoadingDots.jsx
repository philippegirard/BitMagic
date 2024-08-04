import {useState, useEffect} from "react";

const ThreeDotsAnimation = () => {
    const [dotCount, setDotCount] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDotCount((prevCount) => (prevCount % 3) + 1);
        }, 250);

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    return <span>{'.'.repeat(dotCount)}</span>;
};

export default ThreeDotsAnimation;