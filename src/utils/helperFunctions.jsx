import { FaBuilding, FaSmile, FaUsers } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoMdBusiness, IoMdPeople, IoMdTime } from "react-icons/io";

const BusinessIcon = () => <IoMdBusiness size={40} className="text-selRed" />;
const PeopleIcon = () => <IoMdPeople size={40} className="text-selRed" />;
const TimeIcon = () => <IoMdTime size={40} className="text-selRed" />;
const PartnershipIcon = () => <FaHandshakeAngle size={40} className="text-selRed" />;

export const cardData = [
    {
        title: "Mission",
        icon: <BusinessIcon />,
        content: "It is the Mission of Premier steels to be a valuable partner with our customers, vendors, and employees. We believe honest communication, expertise in our industry, and prompt execution lead to strong, long-lasting relationships.",
    },
    {
        title: "Values",
        icon: <PeopleIcon />,
        content: "We are committed to providing a safe, healthy working environment, enabling our team to develop long-term, mutually beneficial business relationships.",
    },
    {
        title: "Partnership",
        icon: <PartnershipIcon />,
        content: "Since our inception, we have been committed to a business philosophy termed 'Total Quality Partnering'. This commitment requires continuous interaction between the client and all key personnel involved in the execution and completion of every order.",
    },
    {
        title: "History",
        icon: <TimeIcon />,
        content: "Premier Steels, with over 40 years of expertise in the steel supply industry, has built a reputation for reliability and excellence.",
    },
];


export const statsData = [
    { icon: <FaBuilding size={30} />, label: 'Company Founded', value: '1982' },
    { icon: <FaUsers size={30} />, label: 'Stocks Available', value: '10+' },
    { icon: <FaSmile size={30} />, label: 'Happy Customers', value: '10K+' },
  ];