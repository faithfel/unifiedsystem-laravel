import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { posterminal, posterminalcreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Form } from "@inertiajs/react";

export default function PosTerminal() {
    return (
        <>
            <Head title="POS Terminal" />

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
