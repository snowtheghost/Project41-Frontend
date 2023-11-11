import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  width: 70%;
  margin: 20px auto;
`;

const FeedbackTitle = styled.h2`
  text-align: center;
`;

const FeedbackTextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 150px;
  max-height: 500px;
  min-height: 150px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
`;


const SendButton = styled.button`
  background-color: #EBA6A6;
  color: #05004E;
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

const FeedbackForm: React.FC = () => {
    const [feedback, setFeedback] = useState('');
  
    const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFeedback(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission
      console.log('Feedback:', feedback);
      setFeedback(''); // Clear the textarea
    };
  
    return (
        <FeedbackContainer>
        <FeedbackTitle>Feedback for game and research</FeedbackTitle>
        <form onSubmit={handleSubmit}>
            <FeedbackTextArea
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
            />
            <SendButton type="submit">Send</SendButton>
        </form>
        </FeedbackContainer>
    );
  };
  
  export default FeedbackForm;