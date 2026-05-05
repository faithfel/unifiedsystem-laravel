import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { posterminal } from '@/routes';
import { Button } from '@/components/ui/button';

export default function PosTerminal() {
    return (
        <>
            <Head title="POS Terminal" />
            <h1 className='tabtitle'>POS TERMINAL</h1>
            <div>
                <Link href={route()}> <Button>Add Product</Button> </Link>
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
