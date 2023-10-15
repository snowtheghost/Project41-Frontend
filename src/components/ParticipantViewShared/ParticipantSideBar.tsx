import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa' 

import { ParticipantSideBarData } from './ParticipantSideBarData';

const Navbar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 250px;
    height: 3.5rem;
    background-color: #05004e;
`

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 0.75rem;
    color: #f9f8eb;
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #f9f8eb;
`

const SidebarMenu = styled.div<{close: boolean}>`
    width: 250px;
    height:100vh;
    background-color: #eaa6a6;
    position: fixed;
    top: calc(10% - 1.5rem);
    left: ${({ close}) => close ? '0' : '-100%'};
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

const ParticipantSideBar: React.FunctionComponent = () => {
    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)
    return (
        <>
            <Navbar>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            </Navbar>

            <SidebarMenu close={close}>
                <MenuIconClose to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {ParticipantSideBarData.map((item, index) => {
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

export default ParticipantSideBar