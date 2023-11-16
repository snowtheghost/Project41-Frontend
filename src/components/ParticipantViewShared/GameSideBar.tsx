import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { GameSideBarData } from './GameSideBarData';

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
  padding: 0; /* Increased top padding to 2rem */
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

const GameSideBar: React.FunctionComponent = () => {
  const location = useLocation();
  const { gameId } = useParams();

  return (
    <SidebarMenu>
      {GameSideBarData.map((item, index) => {
        const isActive = location.pathname === `/${gameId}/${item.path}`;
        return (
          <MenuItems key={index}>
            <MenuItemLinks to={`/${gameId}/${item.path}`} isActive={isActive}>
              {item.icon}
              <span style={{ marginLeft: '16px' }}>{item.title}</span>
            </MenuItemLinks>
          </MenuItems>
        );
      })}
    </SidebarMenu>
  );
};

export default GameSideBar;
