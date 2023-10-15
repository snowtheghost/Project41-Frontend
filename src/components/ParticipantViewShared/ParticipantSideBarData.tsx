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
        path: '/gamelibrary/playhistory',
        icon: <FaIcons.FaHistory />
    },
    {
        title: 'Rewards',
        path: '/gamelibrary/myrewards',
        icon: <FaIcons.FaMoneyCheckAlt />
    },
    {
        title: 'Profile',
        path: '/gamelibrary/myprofile',
        icon: <FaIcons.FaUserCircle />
    },
    {
        title: 'Settings',
        path: '/gamelibrary/settings',
        icon: <AntIcons.AiFillSetting />
    }
]
