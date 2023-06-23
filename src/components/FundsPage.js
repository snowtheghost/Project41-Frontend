import React, { useState } from 'react';
import axios from '../utils/axiosInstance';

const FundsPage = () => {
    const [funds, setFunds] = useState(0);
    const [amount, setAmount] = useState(0);

    const handleAddFunds = async () => {
        try {
            const response = await axios.post('/payment/stripe/create-checkout-session');
            if (response.data && response.data.redirectUrl) {
                window.location.href = response.data.redirectUrl;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleWithdrawFunds = async () => {
        try {
            // Send a request to the backend to withdraw funds
            await axios.post('/withdraw-funds', { amount: amount });

            // Update the funds amount after successful response
            setFunds(funds - amount);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>User Funds</h1>
            <p>Your current funds: ${funds}</p>
            <div>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <button onClick={handleAddFunds}>Add Funds</button>
            </div>
        </div>
    );
};

export default FundsPage;
