// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'reservation-details',
            title: '예매내역',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'sample-page2',
            title: '티켓오픈',
            type: 'item',
            url: '/sample-page2',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
