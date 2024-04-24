import { useEffect, useState } from 'react';

const useLoadGoogleMapsScript = (apiKey) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (window.google) {
            setIsLoaded(true);
            return;
        }

        const scriptId = 'google-maps-script';
        let script = document.getElementById(scriptId);

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);

            script.onload = () => {
                setIsLoaded(true);
            };
        } else {
            script.addEventListener('load', () => {
                setIsLoaded(true);
            });
        }

        return () => {
            script.removeEventListener('load', () => {
                setIsLoaded(false);
            });
        };
    }, [apiKey]);

    return isLoaded;
};

export default useLoadGoogleMapsScript;
