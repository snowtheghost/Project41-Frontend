import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';
import * as Fa6Icons from 'react-icons/fa6';

export const ResearcherSideBarData = [
  {
    title: 'My Research',
    path: '/myresearch',
    icon: <FaIcons.FaUserCircle />,
  },
  {
    title: "Others' Research",
    path: '/othersresearch',
    icon: <IoIcons.IoNewspaper />,
  },
  {
    title: 'Data Request',
    path: '/datarequest',
    icon: <BsIcons.BsFillClipboard2DataFill />,
  },
  {
    title: 'Send Rewards',
    path: '/sendrewards',
    icon: <Fa6Icons.FaFileInvoiceDollar />,
  },
  {
    title: 'Feedback',
    path: '/researcher/feedback',
    icon: <FaIcons.FaCommentDots />,
  },
];
