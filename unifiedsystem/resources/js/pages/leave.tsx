import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { leave } from '@/routes';
import { Form } from "@inertiajs/react";

export default function Leave() {
    return (
        <>
            

        </>
    );
}

leave.layout = {
    breadcrumbs: [
        {
            title: 'Leave',
            href: leave(),
        },
    ],
};