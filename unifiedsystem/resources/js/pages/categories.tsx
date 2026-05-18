import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { categories, categoriescreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X  } from 'lucide-react';

export default function Categories() {
    return (
        <>
          <Link className='add-button' href={(categoriescreate())}> <Plus /> </Link>  

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