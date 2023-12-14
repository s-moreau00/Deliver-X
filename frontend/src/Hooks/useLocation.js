import { useEffect, useState } from "react";

export const useGeoLocation = () => {
    const [location, setLocation] = useState({
        lat: "",
        long: "",
    });

    const onSuccess = (location) => {
        console.log('onSuccess', location.coords.latitude);

        setLocation({
            lat: location.coords.latitude,
            long: location.coords.longitude,
        });
    };
    const onError = (error) => {
        setLocation({ error });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({ message: "Geolocate not supported" });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        return () => {
            navigator.geolocation.clearWatch(navigator.geolocation.getCurrentPosition(onSuccess, onError))
        }
    }, []);
    return location;
};