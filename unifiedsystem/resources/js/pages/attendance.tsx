import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { attendance } from '@/routes';
import { Form } from "@inertiajs/react";

export default function Attendance() {
    return (
        <>
            

        </>
    );
}

attendance.layout = {
    breadcrumbs: [
        {
            title: 'Attendance',
            href: attendance(),
        },
    ],
};