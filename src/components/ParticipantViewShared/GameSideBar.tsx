import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { GameSideBarData } from './GameSideBarData';

const SidebarMenu = styled.div`
    min-width: 250px;
    width: 250px;
    height:100vh;
    background-color: #eaa6a6;
    transition: .6s;
    z-index: 10;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #f9f8eb;
    &:hover {
        background-color: #f9f8eb;
        color: #05004e;
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        margin: 0 2rem;
    }
`

const GameSideBar: React.FunctionComponent = () => {
    return (
        <>
            <SidebarMenu>

                {GameSideBarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}

export default GameSideBar
