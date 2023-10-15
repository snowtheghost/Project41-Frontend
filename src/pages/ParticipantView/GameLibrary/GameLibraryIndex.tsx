import "./style.css";
import ParticipantSideBar from "../../../components/ParticipantViewShared/ParticipantSideBar";

const GameLibraryIndex = () => {
  return (
    <div style={{ backgroundColor: '#F9F8EB', minHeight: '100vh', width: '100%' }}>
    {<ParticipantSideBar />}
    </div>
  );
};

export default GameLibraryIndex;