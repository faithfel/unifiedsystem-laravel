import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks } from '@/routes';


export default function Stocks() {
    return (
        <>
            

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
