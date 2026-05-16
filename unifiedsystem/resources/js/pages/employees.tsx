import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { employees, employeescreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Button } from '@/components/ui/button';

export default function Employees() {
    return (
        <>
            <Link  href={(employeescreate())}><h1 className='save-button'>Add Employee</h1></Link>
            <table className='employee-table'>
                <tr>
                    <th>Employee ID</th>
                    <th>Firt Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Date Hired</th>
                    <th>Phone Number</th>
                    <th>Position</th>
                    <th>Base Salary</th>
                </tr>
                <tr>
                    <td>Alfreds</td>
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