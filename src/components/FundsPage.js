import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosInstance';

const FundsPage = () => {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/users/me');
            const userData = response.data;
            setBalance(userData.balance);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserData();
        const params = new URLSearchParams(window.location.search);
        if (params.get('success')) {
            setShowSuccessMessage(true);
        }
    }, []);

    const handleAddBalance = async (selectedAmount) => {
        try {
            const response = await axios.post('/payment/stripe/checkout/session/create', {
                amount: selectedAmount * 100, // Convert amount to cents
            });
            if (response.data && response.data.redirectUrl) {
                window.location.href = response.data.redirectUrl;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleWithdrawBalance = async () => {
        try {
            // Send a request to the backend to withdraw balance
            await axios.post('/withdraw-balance', { amount: amount });

            // Update the balance amount after successful response
            setBalance(balance - amount);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>User Balance</h1>
            <p>Your current balance: ${balance}</p>
            <div>
                <p>Add balance:</p>
                <button onClick={() => handleAddBalance(10)}>$10</button>
                <button onClick={() => handleAddBalance(20)}>$20</button>
                <button onClick={() => handleAddBalance(50)}>$50</button>
                <button onClick={() => handleAddBalance(100)}>$100</button>
            </div>
            {showSuccessMessage && <p>Funds deposited successfully! Your balance should update soon.</p>}
        </div>
    );
};

export default FundsPage;
