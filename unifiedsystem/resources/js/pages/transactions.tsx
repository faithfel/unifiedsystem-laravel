import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { transactions } from '@/routes';
import { Form } from "@inertiajs/react";
import {  } from 'lucide-react';

export default function Transactions() {
    return (
        <>


        </>
    );
}

transactions.layout = {
    breadcrumbs: [
        {
            title: 'Transactions',
            href: transactions(),
        },
    ],
};
