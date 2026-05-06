import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks, stockscreate } from '@/routes';
import { Button } from '@/components/ui/button';

export default function StocksCreate() {
    return (
        <>
            <Link href={(stocks())}><Button>create</Button></Link>

        </>
    );
}

stockscreate.layout = {
    breadcrumbs: [
        {
            title: 'StocksCreate',
            href: stockscreate(),
        },
    ],
};
