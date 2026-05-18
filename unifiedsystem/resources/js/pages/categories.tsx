import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { categories } from '@/routes';
import { Form } from "@inertiajs/react";
import {  } from 'lucide-react';

export default function Categories() {
    return (
        <>
            

        </>
    );
}

categories.layout = {
    breadcrumbs: [
        {
            title: 'Categories',
            href: categories(),
        },
    ],
};