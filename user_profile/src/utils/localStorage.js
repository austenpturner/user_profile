const localStorageFunctions = {
    set: formInput => {
        const userData = {
            userData: formInput
        };
        localStorage.setItem('User Data', JSON.stringify(userData));
    },
    get: () => {
        if (JSON.parse(localStorage.getItem('User Data')) !== null) {
            return JSON.parse(localStorage.getItem('User Data')).userData;
        };
    },
    delete: key => {
        localStorage.removeItem(key);
    },
};

export default localStorageFunctions;