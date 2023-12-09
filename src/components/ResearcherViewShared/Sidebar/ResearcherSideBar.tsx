import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { ResearcherSideBarData } from './ResearcherSideBarData';

const SidebarMenu = styled.div`
  min-width: 250px;
  width: 250px;
  height: 100vh;
  background-color: #eaa6a6;
  transition: 0.6s;
  z-index: 10;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 0;
  position: relative;
`;

const MenuItemLinks = styled(Link)<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#f9f8eb' : '#05004e')};
  color: ${(props) => (props.isActive ? '#05004e' : '#f9f8eb')};
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 5px;
  margin: 0 1rem;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: #f9f8eb;
    color: #05004e;
  }
`;

// These two should be deleted after all the screens have been implemented.
const DisabledMenuItem = styled.div<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#f9f8eb' : '#05004e')};
  color: ${(props) => (props.isActive ? '#05004e' : '#f9f8eb')};
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 5px;
  margin: 0 1rem;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  cursor: not-allowed;

  &:hover {
    background-color: #f9f8eb;
    color: #05004e;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 180px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 50%;
  margin-left: -90px; /* Use half of the width value to offset the tooltip */

  ${MenuItems}:hover & {
    visibility: visible;
  }

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const ResearcherSideBar: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <SidebarMenu>
      {ResearcherSideBarData.map((item, index) => {
        const isActive = location.pathname === item.path;
        const isDisabled =
          item.title === "Others' Research" || item.title === 'Send Rewards';
        return (
          <MenuItems key={index}>
            {isDisabled ? (
              <DisabledMenuItem isActive={isActive}>
                {item.icon}
                <span style={{ marginLeft: '16px' }}>{item.title}</span>
                <Tooltip>To be implemented</Tooltip>
              </DisabledMenuItem>
            ) : (
              <MenuItemLinks to={item.path} isActive={isActive}>
                {item.icon}
                <span style={{ marginLeft: '16px' }}>{item.title}</span>
              </MenuItemLinks>
            )}
          </MenuItems>
        );
      })}
    </SidebarMenu>
  );
};

export default ResearcherSideBar;
