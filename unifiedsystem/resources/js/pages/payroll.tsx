import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { payroll } from '@/routes';


export default function Payroll() {
    return (
        <>
            

        </>
    );
}

payroll.layout = {
    breadcrumbs: [
        {
            title: 'Payroll',
            href: payroll(),
        },
    ],
};