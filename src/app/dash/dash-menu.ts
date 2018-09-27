import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        link: 'temp'
    },
    {
        title: 'Form'
    },
    {
        title: 'Widgets',
        children: [
            {
                title: 'Go to Account Platform',
                link: 'account'
            },
            {
                title: 'Table'
            },
            {
                title: 'Charts'
            },
            {
                title: 'Main'
            }
        ]
    },
    {
        title: 'Login'
    },
    {
        title: 'Register'
    }
];
