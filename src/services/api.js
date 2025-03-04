const BASE_URL = 'http://ballers.test/api';

export const api = {
    login: async (email, password) => {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        return response.json();
    },

    getProfile: async (token) => {
        try {
            const response = await fetch(`${BASE_URL}/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        } catch (error) {
            throw new Error('Failed to fetch profile');
        }
    },

    logout: async (token) => {
        const response = await fetch(`${BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        });
        return response.json();
    },

    async getPayments(token) {
        const response = await fetch(`${BASE_URL}/payments`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Failed to fetch payments');
        return response.json();
    },

    async getClasses(token) {
        const response = await fetch(`${BASE_URL}/classes`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Failed to fetch classes');
        return response.json();
    },

    async getAttendances(token) {
        const response = await fetch(`${BASE_URL}/attendances`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Failed to fetch attendances');
        return response.json();
    },
};
