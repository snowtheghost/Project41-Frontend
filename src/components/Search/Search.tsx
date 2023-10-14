import PropTypes from "prop-types";
import React from "react";
import { Close } from "../../icons/Close/Close";
import { Mic2 } from "../../icons/Mic2/Mic2";
import { Magnifyingglass } from "../Magnifyingglass/Magnifyingglass";
import "./style.css";

interface Props {
  state: "filled" | "active" | "default";
  topbar: boolean;
  mic: boolean;
  clearIcon: boolean;
  className: any;
  contentClassName: any;
  magnifyingglassMagnifyingglassClassName: any;
  magnifyingglassMagnifyingglassClassNameOverride: any;
  placeholderLabelClassName: any;
  text: string;
}

export const Search = ({
  state,
  topbar,
  mic,
  clearIcon,
  className,
  contentClassName,
  magnifyingglassMagnifyingglassClassName,
  magnifyingglassMagnifyingglassClassNameOverride,
  placeholderLabelClassName,
  text = "Placeholder",
}: Props): JSX.Element => {
  return (
    <div className={`search ${className}`}>
      <div className={`content ${contentClassName}`}>
        {!mic && !topbar && !clearIcon && (
          <Magnifyingglass
            className={magnifyingglassMagnifyingglassClassName}
            magnifyingglassClassName={magnifyingglassMagnifyingglassClassNameOverride}
          />
        )}

        {!topbar && (clearIcon || mic) && <Magnifyingglass className="magnifyingglass-instance" magnifyingglassClassName={Search} />}

        {topbar && (
          <div className="arrow-backward">
            <div className="div">􀰌</div>
          </div>
        )}

        {!mic && !clearIcon && (
          <div className={`placeholder-label ${state} ${placeholderLabelClassName}`}>
            {state === "active" && (
              <>
                <p className="span-wrapper">
                  <span className="span">|</span>
                </p>
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Search</span>
                </p>
              </>
            )}

            {state === "filled" && <>{text}</>}

            {state === "default" && <>Search</>}
          </div>
        )}

        {(clearIcon || mic) && (
          <div className={`placeholder-label-2 state-${state}`}>
            {state === "active" && (
              <>
                <p className="span-wrapper">
                  <span className="span">|</span>
                </p>
                <p className="span-wrapper">
                  <span className="text-wrapper-2">Search</span>
                </p>
              </>
            )}

            {state === "filled" && <>{text}</>}

            {state === "default" && <>Search</>}
          </div>
        )}

        {mic && <Mic2 className="instance-node" />}

        {clearIcon && <Close className="instance-node" />}
      </div>
    </div>
  );
};

Search.propTypes = {
  state: PropTypes.oneOf(["filled", "active", "default"]),
  topbar: PropTypes.bool,
  mic: PropTypes.bool,
  clearIcon: PropTypes.bool,
  text: PropTypes.string,
};

export default Search;