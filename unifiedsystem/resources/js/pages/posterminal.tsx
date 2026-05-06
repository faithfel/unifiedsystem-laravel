import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { posterminal, posterminalcreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Form } from "@inertiajs/react";

export default function PosTerminal() {
    return (
        <>
            <Head title="POS Terminal" />
            <h1 className='tabtitle'>POS TERMINAL</h1>
            <div className="m-4">
                <Link href={(posterminalcreate())}><Button>create</Button></Link>
                
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
