import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { department, departmentcreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X  } from 'lucide-react';

export default function Department() {
    return (
        <>
          <Link className='add-button' href={(departmentcreate())}> <Plus /> </Link>

        </>
    );
}

department.layout = {
    breadcrumbs: [
        {
            title: 'Department',
            href: department(),
        },
    ],
};