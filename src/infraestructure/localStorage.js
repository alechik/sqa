const isLoggedIn = localStorage.getItem('isLoggedIn');

useEffect(() => {
    const fetchUserProfile = async () => {
        if (isLoggedIn) {
            try {
                const profile = await getUserProfile();
                setUserProfile(profile);
            } catch (error) {
                console.error("Error loading user profile:", error);
                // Opcionalmente manejar el estado de error aquí
            }
        }
    };

    fetchUserProfile();
}, []);
