import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { employees } from '@/routes';


export default function Employees() {
    return (
        <>
            

        </>
    );
}

employees.layout = {
    breadcrumbs: [
        {
            title: 'Employees',
            href: employees(),
        },
    ],
};