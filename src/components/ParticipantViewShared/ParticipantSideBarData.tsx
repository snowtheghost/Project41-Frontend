import * as FaIcons from 'react-icons/fa' 
import * as AntIcons from 'react-icons/ai';

export const ParticipantSideBarData = [
    {
        title: 'Games',
        path: '/gamelibrary',
        icon: <FaIcons.FaGamepad />
    },
    {
        title: 'Play History',
        path: '/playhistory',
        icon: <FaIcons.FaHistory />
    },
    {
        title: 'My Rewards',
        path: '/myrewards',
        icon: <FaIcons.FaMoneyCheckAlt />
    },
    {
        title: 'My Profile',
        path: '/myprofile',
        icon: <FaIcons.FaUserCircle />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AntIcons.AiFillSetting />
    },
    {
        title: 'Feedback',
        path: '/participant/feedback',
        icon: <FaIcons.FaCommentDots />
    }
]
