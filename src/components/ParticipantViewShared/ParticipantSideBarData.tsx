import React from 'react'
import * as FaIcons from 'react-icons/fa' 
import * as AntIcons from 'react-icons/ai';

export const ParticipantSideBarData = [
    {
        title: 'Games',
        path: '/gamelibrary',
        icon: <FaIcons.FaGamepad />
    },
    {
        title: 'Played',
        path: '/playhistory',
        icon: <FaIcons.FaHistory />
    },
    {
        title: 'Rewards',
        path: '/myrewards',
        icon: <FaIcons.FaMoneyCheckAlt />
    },
    {
        title: 'Profile',
        path: '/myprofile',
        icon: <FaIcons.FaUserCircle />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AntIcons.AiFillSetting />
    }
]
