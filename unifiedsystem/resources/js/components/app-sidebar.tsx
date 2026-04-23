import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, SquareChevronRight, ArrowLeftRight, Package, House, ContactRound, Ungroup, FileClock, DoorOpen, DollarSign } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard,  } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: House,
    },
    {
        title: 'POS Terminal',
        href: dashboard(),
        icon: SquareChevronRight,
    },
    {
        title: 'Transactions',
        href: dashboard(),
        icon: ArrowLeftRight,
    },    
    {
        title: 'Stocks',
        href: dashboard(),  
        icon: Package,
    },
    {
        title: 'Employees Lists',
        href: dashboard(),  
        icon: ContactRound,
    },
        {
        title: 'Department',
        href: dashboard(),  
        icon: Ungroup,
    },

        {
        title: 'Attendance',
        href: dashboard(),  
        icon: FileClock,
    },
            {
        title: 'Leave Request',
        href: dashboard(),  
        icon: DoorOpen,
    },
            {
        title: 'Payroll',
        href: dashboard(),  
        icon: DollarSign,
    },
                {
        title: 'Categories',
        href: dashboard(),  
        icon: LayoutGrid,
    },
];

const footerNavItems: NavItem[] = [


];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
