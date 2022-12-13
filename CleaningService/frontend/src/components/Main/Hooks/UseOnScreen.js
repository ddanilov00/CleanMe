import { useState, useEffect } from 'react';
// this will be used when i read the documentation more right now it's really buggy
export const useOnScreen = (ref) => {

    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        let observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [ref])

    return isIntersecting;
}

export default useOnScreen;