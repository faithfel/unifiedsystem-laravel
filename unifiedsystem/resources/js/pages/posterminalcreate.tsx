import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { posterminal, posterminalcreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Form } from "@inertiajs/react";

export default function PosTerminalCreate() {
    return (
        <>
            <Head title="POS Terminal" />
            <h1 className='tabtitle'>POS TERMINAL create</h1>
            <div className="m-4">
                <Link href={(posterminal())}><Button>return</Button></Link>
                
            </div>
        </>
    );
}

posterminalcreate.layout = {
    breadcrumbs: [
        {
            title: 'POSTerminalCreate',
            href: posterminalcreate(),
        },
    ],
};
