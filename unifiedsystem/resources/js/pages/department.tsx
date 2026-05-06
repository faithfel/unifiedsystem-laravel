import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { department } from '@/routes';
import { Form } from "@inertiajs/react";

export default function Department() {
    return (
        <>
            

        </>
    );
}

department.layout = {
    breadcrumbs: [
        {
            title: 'Department',
            href: department(),
        },
    ],
};