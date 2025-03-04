import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

const StatBox = ({ label, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-4xl font-bold text-orange-600 mb-1">{value}</h3>
        <p className="text-gray-600 text-sm">{label}</p>
    </div>
);

const InfoItem = ({ label, value }) => (
    <div className="py-3 border-b">
        <div className="text-sm text-gray-600">{label}</div>
        <div className="font-medium">{value}</div>
    </div>
);

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [payments, setPayments] = useState([]);
    const [classes, setClasses] = useState([]);
    const [attendances, setAttendances] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                const [profileData, paymentsData, classesData, attendancesData] = await Promise.all([
                    api.getProfile(token),
                    api.getPayments(token),
                    api.getClasses(token),
                    api.getAttendances(token)
                ]);

                setProfile(profileData.student);
                setPayments(paymentsData.payments);
                setClasses(classesData.classes);
                setAttendances(attendancesData.attendances);
            } catch (error) {
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="bg-gray-900 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img 
                            src={profile.profile_photo} 
                            alt={profile.english_name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
                        />
                        <div className="flex flex-col md:flex-row gap-8 w-full">
                            <div className="space-y-2">
                                <h1 className="text-4xl text-gray-400 font-bold">{profile.english_name}</h1>
                                <p className="text-orange-400 text-xl">{profile.arabic_name}</p>
                                <p className="text-gray-400">{profile.position}</p>
                                <button
                                    onClick={handleLogout}
                                    className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                                >
                                    <i className="fas fa-sign-out-alt"></i>
                                    Logout
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4 md:flex md:gap-8">
                                <StatBox label="Height" value={`${profile.height}cm`} />
                                <StatBox label="Weight" value={`${profile.weight}kg`} />
                                <StatBox label="Age" value={`${profile.age} years`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Player Details</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <InfoItem label="Category" value={profile.category} />
                            <InfoItem label="Level" value={profile.level_of_player} />
                            <InfoItem label="Balance" value={profile.balance} />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Current Classes</h2>
                        <div className="space-y-4">
                            {classes.map(c => (
                                <div key={c.id} className="border-b pb-3">
                                    <div className="font-medium">{c.name}</div>
                                    <div className="text-sm text-gray-600">{c.schedule}</div>
                                    <div className="text-sm text-orange-600">Coach: {c.instructor_name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Recent Attendance</h2>
                        <div className="space-y-4">
                            {attendances.slice(0, 5).map(a => (
                                <div key={a.id} className="flex justify-between items-center border-b pb-3">
                                    <div>
                                        <div className="font-medium">{a.class_name}</div>
                                        <div className="text-sm text-gray-600">
                                            {new Date(a.date).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-sm ${
                                        a.attended ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {a.attended ? 'Present' : 'Absent'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Recent Payments</h2>
                        <div className="space-y-4">
                            {payments.map(p => (
                                <div key={p.id} className="border-b pb-3">
                                    <div className="font-medium">{p.class_name}</div>
                                    <div className="text-sm text-gray-600">Amount: {p.amount} {p.payment_method}</div>
                                    <div className="text-sm text-gray-600">Date: {new Date(p.payment_date).toLocaleDateString()}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
