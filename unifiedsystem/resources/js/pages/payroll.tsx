import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { payroll } from '@/routes';
import { Form } from "@inertiajs/react";

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