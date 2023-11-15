import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  background-color: #f9f8eb;
  color: #05004e;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  border: 2px solid #05004e;
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
  const [hasConsented, setHasConsented] = useState(false);
  const navigate = useNavigate();
  const { gameId } = useParams();

  // BAD PRACTICE.
  useEffect(() => {
    if (window.sessionStorage.getItem(`/${gameId}/consented`) === 'consented') {
      setHasConsented(true);
    }
  }, [gameId]);

  const handlePlayNowClick = (gameId: string) => {
    console.log(hasConsented);
    if (hasConsented) {
      navigate(`/games/${gameId}/`);
    } else {
      alert(
        'You need to sign the information consent form before playing the game'
      );
      navigate(`/${gameId}/information`);
    }
  };

  return (
    <div>
      <ImageFrame>
        <StyledImage src='/imgs/full-screen-grey.png' alt='Image of the game' />
        <PlayButton
          disabled={!gameId}
          onClick={() => gameId && handlePlayNowClick(gameId)}
        >
          PLAY NOW!
        </PlayButton>
      </ImageFrame>
    </div>
  );
};

export default GamePage;
