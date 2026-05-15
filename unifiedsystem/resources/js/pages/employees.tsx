import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { employees, employeescreate } from '@/routes';
import { Form } from "@inertiajs/react";

export default function Employees() {
    return (
        <>
            <table className='employee-table'>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>

        </>
    );
}

employees.layout = {
    breadcrumbs: [
        {
            title: 'Employees',
            href: employees(),
        },
    ],
};