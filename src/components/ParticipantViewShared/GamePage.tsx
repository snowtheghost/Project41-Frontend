import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ImageFrame = styled.div`
    position: relative;
    width: 100%;
    min-height: 500px;
    display: flex;
    align-items: center;
    margin: 0px auto;
    overflow: hidden;
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const PlayButton = styled.button`
    background-color: #F9F8EB;
    color: #05004E;
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    border: 2px solid #05004E;
    cursor: pointer;
    font-size: 32px;
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
        background-color: #c7c4ff;
    }
`;


const GamePage = () => {
    // State to track consent
    const [hasConsented, ] = useState(false);
    const navigate = useNavigate();

    const handlePlayNowClick = (gameId: string) => {
        if (hasConsented) {
            navigate(`/${gameId}/play`); // TODO: remove hardcode later
        } else {
            alert('You need to sign the information consent form before playing the game');
            navigate('/:gameId/information');  // TODO: remove hardcode later
        }
    };

    const gameId = 'tictactoe'; // Replace with actual game ID as needed

    return (
        <div>
            <ImageFrame>
                <StyledImage src="/imgs/full-screen-grey.png" alt="Image of the game" />
                <PlayButton onClick={() => handlePlayNowClick(gameId)}>PLAY NOW!</PlayButton>
            </ImageFrame>
        </div>
    );
};

export default GamePage;