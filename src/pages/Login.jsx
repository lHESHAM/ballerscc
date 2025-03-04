import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { api } from '../services/api';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import LoadingAnimation from '../components/LoadingAnimation';
import './Login.css'; // Add this import

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    }
};

const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 300
        }
    }
};

const inputVariants = {
    focused: { 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    unfocused: { 
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
    }
};

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await api.login(email, password);
            if (response.status === 'success') {
                localStorage.setItem('token', response.data.token);
                navigate('/profile');
            } else {
                setError(response.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <Navbar />
            <div className="login-content">
                <div className="login-container">
                    <div className="trial-banner">
                        <strong>{t('Welcome back!')}</strong> {t('Sign in to continue')}
                    </div>
                    
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('Email Address')}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t('Password')}
                                required
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button type="submit" disabled={isLoading} className="submit-button">
                            {isLoading ? (
                                <div className="button-content">
                                    <LoadingAnimation />
                                </div>
                            ) : t('Sign In')}
                        </button>

                        <p className="form-footer">
                            {t('Don\'t have an account?')} {' '}
                            <a href="/join">{t('Join Now')}</a>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
