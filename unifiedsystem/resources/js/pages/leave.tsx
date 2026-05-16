import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { leave } from '@/routes';
import { Form } from "@inertiajs/react";

export default function Leave() {
    return (
        <>
                        <table className='employee-table'>
                <tr>
                    <th>Employee Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Reason</th>

                </tr>
                <tr>
                    <td>Alfreds</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
            </table>
        </>
    );
}

leave.layout = {
    breadcrumbs: [
        {
            title: 'Leave',
            href: leave(),
        },
    ],
};