import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
`;

const ConsentContainer = styled.div`
    padding: 0 20px;
    width: 94%;
    height: 85%;
    margin: 20px auto;
    border-radius: 5px;
    border: 2px solid #05004E;
    box-sizing: border-box;

`;

const ConsentTitle = styled.div`
    color: #05004E;
    margin-top: 20px;
    margin-bottom: 5px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
`;

const ConsentText = styled.div`
    font-size: 16px;
    margin-bottom: 30px;
    max-height: 88%;
    overflow-y: auto;
`;

const SectionTitle = styled.h2`
    color: #05004E;
    margin-bottom: 10px;
`;

const SectionContent = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
    white-space: pre-line;
`;

const HighlightedText = styled.span`
    color: #dd6868;
    font-weight: bold;
`;

const ColoredText = styled.span`
    color: #dd6868;
`;

type InfoSectionProps = {
    title: string;
    children: React.ReactNode;
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, children }) => (
    <>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </>
);

const Information = () => {
  return (
    <OuterContainer>
        <ConsentContainer>
            <ConsentTitle>Information</ConsentTitle>
            <ConsentText> 
                <InfoSection title="Introduction">
                    You are invited to participate in a research study investigating how people learn to play a web-based investment game...
                    This study is being undertaken as part of Peter Duggins' PhD research.
                </InfoSection>

                <InfoSection title="Who is Running the Study?">
                    <HighlightedText>Faculty Supervisor: </HighlightedText>Chris Eliasmith, PhD. 
                        <a href="https://uwaterloo.ca/centre-for-theoretical-neuroscience/people-profiles/chris-eliasmith" title="U Waterloo Profile"> Director of Center for Theoretical Neuroscience, University of Waterloo</a>. Office:  Engineering 7 - 6324, Phone: 519-888-4567 x42638, Email: celiasmith@uwaterloo.ca
                    <br/><br/>
                    <HighlightedText>Student Investigator: </HighlightedText>Peter Duggins, PhD candidate.
                    <a href="http://compneuro.uwaterloo.ca/people/peter-duggins.html" title="U Waterloo Profile"> Department of Systems Design Engineering, University of Waterloo</a>. Office: Engineering 7 - 6339, Email: pduggins@uwaterloo.ca
                    
                </InfoSection>

                <InfoSection title="What does participation involve?">
                    <p>
                        As a participant in this study, you would be asked to fill out a short survey, watch a tutorial, then play the “investment game”. The game is a two-player, turn-based game that involves repeatedly exchanging virtual coins with another human player or a software opponent. A game consists of five turns. The tutorial and required games require approximately 30 minutes. Each game move made by the participant <ColoredText>will be recorded</ColoredText> in the website's database for research analysis.
                    </p>
                </InfoSection>

                <InfoSection title="Who may participate in the study?">
                    <p>
                        In order to participate in the study you must be able to read and understand English and have an Amazon Mechanical Turk account.
                    </p>
                </InfoSection>

                <InfoSection title="Is participation in the study voluntary?">
                    <p>
                        Your participation in this study is voluntary. You may decline to answer any survey question(s) you prefer not to answer. You may withdraw from the study after orientation by emailing <a href="mailto:pduggins@uwaterloo.ca?subject=Question%20regarding%20Investment%20Game%20Experiment">pduggins@uwaterloo.ca</a>, providing your MTurk ID, and requesting that your data be deleted. 
                    </p>
                </InfoSection>

                <InfoSection title="Will I receive anything for participating in the study?">
                    <p>
                        Participants will earn performance-based rewards for each game they play. You will be able to play a maximum of 30 games in this task. If you would like to withdraw prior to completing the task, you will receive the amount earned in each game. The minimum payout per game is $0.10 and the maximum is $0.40. Participants will therefore earn <ColoredText>between $0.10 and $12.00</ColoredText> over the course of the study. This should take about 40 minutes.
                    </p>
                </InfoSection>

                <InfoSection title="What are the possible benefits of the study?">
                    <p>
                        Participation in this study may not provide any personal benefit to you, apart from the remuneration listed above. I hope the data from the study will help build a better understanding of how humans learn to make cooperative decisions in social contexts. See the Research Details page for additional information.
                    </p>
                </InfoSection>

                <InfoSection title="What are the risks associated with the study?">
                    <p>
                        There are no known or anticipated risks associated with participation in this study. If a survey question, or playing the investment game, makes you uncomfortable, you can choose not to answer or to stop participating by closing the web browser. See above for more details on voluntary participation.
                    </p>
                </InfoSection>

                <InfoSection title="Will my identity be known to others?">
                    <p>
                        No identifying information is collected during the course of the study. Participant data is associated with their MTurk ID in a secure database, and only those investigators associated with this study will have access to the records.
                    </p>
                </InfoSection>

                <InfoSection title="Will my information be kept confidential?">
                    <p>
                        The database of participants IDs, survey responses, and game moves will be secured on a password-protected server on the University of Waterloo campus. Research published as a result of data analysis will be submitted to scientific journals, but all user data will remain anonymous. We will keep our study records for a minimum of 7 years, and all records will be destroyed according to University of Waterloo policy.
                    </p>
                </InfoSection>

                <InfoSection title="Who is sponsoring/funding the study?">
                    <p>
                        This study is funded through a Canadian Graduate Scholarship and University of Waterloo funds.
                    </p>
                </InfoSection>

                <InfoSection title="Has the study received ethics clearance?">
                    <p>
                        This study has been reviewed and received ethics clearance through a University of Waterloo Research Ethics Committee (ORE#42531). If you have questions for the Committee contact the Office of Research Ethics, at 1-519-888-4567 ext. 36005 or oreceo@uwaterloo.ca.
                    </p>
                </InfoSection>

                <InfoSection title="Who should I contact if I have questions regarding my participation in the study?">
                    <p>
                        If you have any questions regarding this study, or would like additional information to assist you in reaching a decision about participation, contact Peter Duggins at <a href="mailto:pduggins@uwaterloo.ca?subject=Question%20regarding%20Investment%20Game%20Experiment">pduggins@uwaterloo.ca.</a>
                    </p>
                </InfoSection>
            </ConsentText>
        </ConsentContainer>
    </OuterContainer>
  );
};

export default Information;