import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { posterminal } from '@/routes';
import { Button } from '@/components/ui/button';


export default function PosTerminal() {
    return (
        <>
            <Head title="POS Terminal" />
            <h1 className='tabtitle'>POS TERMINAL</h1>
            <div className="m-4">
                <Link href={router('posterminal.create')}><Button>e</Button></Link>
            </div>
        </>
    );
}

posterminal.layout = {
    breadcrumbs: [
        {
            title: 'POSTerminal',
            href: posterminal(),
        },
    ],
};
