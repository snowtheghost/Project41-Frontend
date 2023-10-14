import { Search } from "../../../components/Search/Search";
import ParticipantSideMenu from "../../../components/ParticipantViewShared/ParticipantSideMenu"
import "./style.css";

export const GameLibraryIndex = (): JSX.Element => {
  return (
    <div className="index">
      <ParticipantSideMenu />
      <div className="div-2">
        <Search
          className="search-instance"
          clearIcon={false}
          contentClassName="design-component-instance-node"
          magnifyingglassMagnifyingglassClassName="search-2"
          magnifyingglassMagnifyingglassClassNameOverride="search-3"
          mic={false}
          placeholderLabelClassName="search-4"
          state="filled"
          text="Search for games"
          topbar={false}
        />
        <div className="frame-6">
          <div className="rectangle" />
          <div className="text-wrapper-7">Name of the Game</div>
          <p className="p">A very short description ... A very short description ...</p>
        </div>
        <div className="frame-7">
          <div className="rectangle" />
          <div className="text-wrapper-7">Name of the Game</div>
          <p className="p">A very short description ... A very short description ...</p>
        </div>
        <div className="frame-8">
          <div className="rectangle" />
          <div className="text-wrapper-7">Name of the Game</div>
          <p className="p">
            A very short description ... <br />A very short description ...
          </p>
        </div>
        <div className="frame-9">
          <div className="rectangle" />
          <div className="text-wrapper-7">Name of the Game</div>
          <p className="p">
            A very short description ... <br />A very short description ...
          </p>
        </div>
        <div className="frame-10">
          <div className="rectangle" />
          <div className="text-wrapper-7">Name of the Game</div>
          <p className="p">A very short description ... A very short description ...</p>
        </div>
        <div className="frame-11">
          <div className="rectangle" />
          <div className="text-wrapper-7">Name of the Game</div>
          <p className="p">
            A very short description ... <br />A very short description ...
          </p>
        </div>
      </div>
    </div>
  );

};

export default GameLibraryIndex;