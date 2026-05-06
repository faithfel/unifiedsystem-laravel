import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks, stockscreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Form } from "@inertiajs/react";

export default function Stocks() {
    return (
        <>
            <Link href={(stockscreate())}><Button>create</Button></Link>

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
