import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import {  employees ,employeescreate } from '@/routes';
import { Form } from "@inertiajs/react";


export default function EmployeesCreate() {
    return (
        <>
            

        </>
    );
}

employeescreate.layout = {
    breadcrumbs: [
        {
            title: 'EmployeesCreate',
            href: employeescreate(),
        },
    ],
};