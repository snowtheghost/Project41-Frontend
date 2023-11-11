import React from 'react';
import styled from 'styled-components';

type InformedConsentProps = {
  content: string;
  onAgree: () => void;
};

const ConsentContainer = styled.div`
  background-color: #fff; // Change as needed
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); // Optional for styling
`;

const ConsentTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const ConsentText = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  max-height: 300px; // You can set a max-height
  overflow-y: auto; // Make it scrollable
`;

const AgreeButton = styled.button`
  background-color: #4CAF50; // A green color for the agree button
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
`;

const InformedConsent: React.FC<InformedConsentProps> = ({ content, onAgree }) => {
  return (
    <ConsentContainer>
      <ConsentTitle>Informed Consent</ConsentTitle>
      <ConsentText dangerouslySetInnerHTML={{ __html: content }} />
      <AgreeButton onClick={onAgree}>I agree</AgreeButton>
    </ConsentContainer>
  );
};

export default InformedConsent;
