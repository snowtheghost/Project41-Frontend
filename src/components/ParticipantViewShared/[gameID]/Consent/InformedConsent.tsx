import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

type InformedConsentProps = {
  onAgree: () => void;
};

const ConsentContainer = styled.div`
  padding: 0 20px;
  width: 94%;
  height: 550px;
  margin: 20px auto;
  border-radius: 5px;
  border: 2px solid #05004e;
  box-sizing: border-box;
`;

const ConsentTitle = styled.div`
  color: #05004e;
  margin-top: 20px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

const ConsentText = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
  max-height: 470px;
  overflow-y: auto;
`;

const SectionContent = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  white-space: pre-line;
`;

const ColoredText = styled.span`
  color: #dd6868;
`;

const AgreeButton = styled.button`
    background-color: #eba6a6;
    color: #05004e;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease;
    margin: 0 auto;
    display: block;

    &:hover {
        background-color: #a6eba6;

    &:disabled {
        background-color: grey;
        color: #ccc;
        cursor: not-allowed;
    }
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 200px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -100px;
`;

const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${Tooltip} {
    visibility: visible;
  }
`;

const StyledTimeDisplay = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #05004e;
  border-radius: 5px;
  text-align: center;
  margin: 20px;
`;

const TimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <StyledTimeDisplay>
      Current date and time: {currentDateTime.toLocaleTimeString()},{' '}
      {formattedDate}
    </StyledTimeDisplay>
  );
};

const InformedConsent: React.FC<InformedConsentProps> = ({ onAgree }) => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const { gameId } = useParams();

  const handleAgree = () => {
    onAgree();
    setHasAgreed(true);
    gameId && sessionStorage.setItem(`/${gameId}/consented`, 'consented');
  };

  return (
    <div>
      <ConsentContainer>
        <ConsentTitle>Consent Form</ConsentTitle>
        <ConsentText>
          <SectionContent>
            By providing your consent, you are not waiving your legal rights or
            releasing the investigator(s) or involved institution(s) from their
            legal and professional responsibilities. I have read the information
            presented in the information letter about a study conducted by Peter
            Duggins, under the supervision of Dr. Chris Eliasmith, University of
            Waterloo. I have had the opportunity to ask questions related to the
            study and have received satisfactory answers to my questions and any
            additional details.I was informed that participation in the study is
            voluntary and that I can withdraw this consent by informing the
            researcher.
          </SectionContent>

          <SectionContent>
            I am aware my responses to survey questions and my moves in the
            investment game <ColoredText>will be recorded</ColoredText> and
            associated with my username. I give permission for the use of these
            anonymous data in any thesis or publication that comes from this
            research. I agree of my own free will to participate in the study,
            and consent by providing my MTurk ID as a signature below.
          </SectionContent>

          <SectionContent>
            This study has been reviewed and received ethics clearance through a
            University of Waterloo Research Ethics Committee (ORE#42531). If you
            have questions for the Committee contact the Office of Research
            Ethics at oreceo@uwaterloo.ca. For all other questions contact Peter
            Duggins at pduggins@uwaterloo.ca.
          </SectionContent>
        </ConsentText>
      </ConsentContainer>
      <TimeDisplay></TimeDisplay>
      <TooltipContainer>
        <AgreeButton onClick={handleAgree} disabled={hasAgreed}>
          I Agree
        </AgreeButton>
        {hasAgreed && (
          <Tooltip>You've already agreed to the Information Consent.</Tooltip>
        )}
      </TooltipContainer>
    </div>
  );
};

export default InformedConsent;
