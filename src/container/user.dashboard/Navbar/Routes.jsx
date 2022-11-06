import DashboardLogo from '../../../assets/images/dashboard.svg';
import recordLogo from '../../../assets/images/records.svg';
import TransactionsLogo from '../../../assets/images/transactions.svg';
import FilesLogo from '../../../assets/images/files.svg';
import SettingsLogo from '../../../assets/images/settings.svg';

// Dashboard Pages
import Dashboard from '../Pages/dashboard.content/dashboard.content'
import Records from '../Pages/Records/Records';
import Transactions from '../Pages/Transactions/Transactions';
import Files from '../Pages/Files/Files';
import Settings from '../Pages/Settings/Settings';


// Employee Routes

export const dashboardRoutes = [
    {
        path: "/dashboard",
        component: <Dashboard />,
    },
    {
        path: "/dashboard/records",
        component: <Records />,
    },
    {
        path: "/dashboard/transactions",
        component: <Transactions />,
    },
    {
        path: "/dashboard/files",
        component: <Files />,
    },
    {
        path: "/dashboard/settings",
        component: <Settings />,
    },
]

export const SideBarItems = [
    {
        path: "/dashboard",
        icon: <img src={DashboardLogo} alt='logo' />,
        title: "Dashboard",
        isSubNav: false,
    },

    {
        path: "/dashboard/records",
        icon: <img src={recordLogo} alt='logo' />,
        title: "Records",
        isSubNav: false,
    },

    {
        path: "/dashboard/transactions",
        icon: <img src={TransactionsLogo} alt='logo' />,
        title: "Transactions",
        label: 2,
        isSubNav: false,
    },

    {
        path: "/dashboard/files",
        icon: <img src={FilesLogo} alt='logo' />,
        title: "Files",
        isSubNav: false,
    },

    {
        path: "/dashboard/settings",
        icon: <img src={SettingsLogo} alt='logo' />,
        title: "Settings",
        isSubNav: false,
    },
];
