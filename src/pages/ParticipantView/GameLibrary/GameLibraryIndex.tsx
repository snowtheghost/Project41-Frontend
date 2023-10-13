import React from "react";
import { Search } from "../../components/Search";
import "./style.css";

export const Index = (): JSX.Element => {
  return (
    <div className="index">
      <div className="div-2">
        <div className="web-header">
          <div className="text-wrapper-3">System Name</div>
        </div>
        <div className="overlap-group">
          <div className="frame">
            <div className="text-wrapper-4">Games</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-5">Play History</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-5">My Rewards</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-5">My Profile</div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-5">Feedback</div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-5">Setting</div>
          </div>
          <div className="overlap">
            <div className="text-wrapper-6">Help</div>
            <img
              className="help-outline"
              alt="Help outline"
              src="https://cdn.animaapp.com/projects/6525c9c7ae793d4bd77375d5/releases/6525d03eae793d4bd77375dc/img/help-outline.svg"
            />
          </div>
        </div>
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
