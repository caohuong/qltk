import { To } from "react-router-dom"

interface NavItem {
    link: To,
    section: string,
    icon: string,
    text: string
}
const sidebarNav: NavItem[] = [{
    link: '/',
    section: 'home',
    icon: "<i className='bx bx-home-alt'></i>",
    text: 'Home'
},
{
    link: '/orders',
    section: 'orders',
    icon: "<i className='bx bx-receipt' ></i>",
    text: 'Orders'
},
{
    link: '/products',
    section: 'products',
    icon: "<i className='bx bx-cube'></i>",
    text: 'Products'
},
{
    link: '/taikhoan',
    section: 'taikhoan',
    icon: "<i className='bx bx-user'></i>",
    text: 'Tài khoản'
},
{
    link: '/stats',
    section: 'stats',
    icon: "<i className='bx bx-line-chart'></i>",
    text: 'Stats'
},
{
    link: '/settings',
    section: 'settings',
    icon: "<i className='bx bx-cog'></i>",
    text: 'Settings'
}]

export default sidebarNav