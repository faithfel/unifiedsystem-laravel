import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks, stockscreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Form } from "@inertiajs/react";
import { Plus, X } from 'lucide-react';

export default function Stocks() {
    return (
        <>
            <Link className='add-button' href={(stockscreate())}> <Plus /> </Link>

        </>
    );
}

stocks.layout = {
    breadcrumbs: [
        {
            title: 'Stocks',
            href: stocks(),
        },
    ],
};
