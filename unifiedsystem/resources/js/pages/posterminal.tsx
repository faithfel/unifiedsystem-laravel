import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { posterminal } from '@/routes';


export default function Dashboard() {
    return (
        <>
            <Head title="POS Terminal" />

        </>
    );
}

posterminal.layout = {
    breadcrumbs: [
        {
            title: 'POS Terminal',
            href: posterminal(),
        },
    ],
};
