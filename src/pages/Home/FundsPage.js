import React, { useState, useEffect } from 'react';
import axios from '../../utils/axiosInstance';

const FundsPage = () => {
  const [balance, setBalance] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showWithdrawalSuccessMessage, setShowWithdrawalSuccessMessage] =
    useState(false);
  const [showWithdrawalErrorMessage, setShowWithdrawalErrorMessage] =
    useState(false);
  const [showAccountCreatedMessage, setShowAccountCreatedMessage] =
    useState(false);
  const [showAccountNotCreatedMessage, setShowAccountNotCreatedMessage] =
    useState(false);
  const [chargesEnabled, setChargesEnabled] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/users/me');
      const userData = response.data;
      setBalance(userData.balance);
      setChargesEnabled(userData.chargesEnabled);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    const params = new URLSearchParams(window.location.search);
    const depositParam = params.get('deposit');
    const withdrawalParam = params.get('withdrawal');
    const accountParam = params.get('account');

    if (depositParam === 'true') {
      setShowSuccessMessage(true);
    } else if (depositParam === 'false') {
      setShowErrorMessage(true);
    }

    if (withdrawalParam === 'true') {
      setShowWithdrawalSuccessMessage(true);
    } else if (withdrawalParam === 'false') {
      setShowWithdrawalErrorMessage(true);
    }

    if (accountParam === 'true') {
      setShowAccountCreatedMessage(true);
    } else if (accountParam === 'false') {
      setShowAccountNotCreatedMessage(true);
    }
  }, []);

  const handleAddBalance = async (selectedAmount) => {
    try {
      const response = await axios.post(
        '/payment/stripe/checkout/session/create',
        {
          amount: selectedAmount * 100, // Convert amount to cents
        }
      );
      if (response.data && response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterAccount = async () => {
    try {
      const response = await axios.post('/payment/stripe/register');
      if (response.data && response.data.connectedAccountLinkUrl) {
        window.location.href = response.data.connectedAccountLinkUrl;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleWithdrawBalance = async () => {
    try {
      const response = await axios.post('/payment/stripe/withdraw', {
        amount: withdrawalAmount * 100, // Convert amount to cents
      });
      if (response.status === 200) {
        setShowWithdrawalSuccessMessage(true);
        setBalance(balance - withdrawalAmount);
      } else {
        setShowWithdrawalErrorMessage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeWithdrawalAmount = (event) => {
    const amount = event.target.value;
    setWithdrawalAmount(amount);
  };

  const validateWithdrawalAmount = () => {
    return withdrawalAmount > 0 && withdrawalAmount <= balance;
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
      <div>
        {chargesEnabled ? (
          <div>
            <p>Withdraw funds:</p>
            <p>
              <i>
                We charge a 4% service fee with every withdrawal to keep the
                service running. Thank you for playing!
              </i>
            </p>
            <input
              type='number'
              min='0'
              max={balance}
              value={withdrawalAmount}
              onChange={handleChangeWithdrawalAmount}
            />
            <button
              onClick={handleWithdrawBalance}
              disabled={!validateWithdrawalAmount()}
            >
              Withdraw
            </button>
          </div>
        ) : (
          <div>
            <p>Register for a Stripe Connected Account to withdraw funds:</p>
            <button onClick={handleRegisterAccount}>Register</button>
          </div>
        )}
      </div>
      {showSuccessMessage && (
        <p>Funds deposited successfully! Your balance should update soon.</p>
      )}
      {showErrorMessage && <p>Funds not deposited. Please try again.</p>}
      {showWithdrawalSuccessMessage && (
        <p>Funds withdrawn successfully! Your balance should update soon.</p>
      )}
      {showWithdrawalErrorMessage && (
        <p>Funds not withdrawn. Please try again.</p>
      )}
      {showAccountCreatedMessage && (
        <p>Stripe connected account created successfully!</p>
      )}
      {showAccountNotCreatedMessage && (
        <p>Stripe connected account not created. Please try again.</p>
      )}
    </div>
  );
};

export default FundsPage;
