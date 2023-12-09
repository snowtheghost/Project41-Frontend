import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  width: 70%;
  margin: 15px auto;
`;

const FeedbackTitle = styled.h2`
  text-align: center;
`;

const FeedbackTextArea = styled.textarea`
  background-color: #fffef8;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 150px;
  max-height: 500px;
  min-height: 150px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Inter';
  box-sizing: border-box;
`;

const SendButton = styled.button`
  background-color: #eba6a6;
  color: #05004e;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-left: auto;
  display: block;

  &:hover {
    background-color: #e27c7c;
  }
`;

const Notification = styled.div`
  background-color: #76b39d;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 15px;
  text-align: center;
  position: fixed;
  left: 50%;
`;

type FeedbackFormProps = {
  title: string;
};

const FeedbackForm: React.FC<FeedbackFormProps> = ({ title }) => {
  const [feedback, setFeedback] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback:', feedback);
    setFeedback(''); // Clear the textarea
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <FeedbackContainer>
      <FeedbackTitle>{title}</FeedbackTitle>
      <form onSubmit={handleSubmit}>
        <FeedbackTextArea
          placeholder='Write your feedback here...'
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <SendButton type='submit'>Send</SendButton>
      </form>
      {showNotification && (
        <Notification>Your feedback has been submitted.</Notification>
      )}
    </FeedbackContainer>
  );
};

export default FeedbackForm;
