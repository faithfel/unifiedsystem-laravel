import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { leave, leavecreate } from '@/routes';
import { Form } from "@inertiajs/react";

export default function LeaveCreate() {
    return (
        <>

        </>
    );
}

leavecreate.layout = {
    breadcrumbs: [
        {
            title: 'LeaveCreate',
            href: leavecreate(),
        },
    ],
};