import * as FaIcons from 'react-icons/fa' 
import * as BsIcons from 'react-icons/bs';

export const GameSideBarData = [
    {
        title: 'Games',  // should be replaced with the actual game name
        path: '/:gameId/home',
        icon: <FaIcons.FaGamepad />
    },
    {
        title: 'Information',
        path: '/:gameId/Information',
        icon: <FaIcons.FaInfoCircle />
    },
    {
        title: 'Consent',
        path: '/:gameId/consent',
        icon: <BsIcons.BsFillClipboardCheckFill />
    },
    {
        title: 'Feedback',
        path: '/:gameId/feedback',
        icon: <FaIcons.FaCommentDots />
    }
]