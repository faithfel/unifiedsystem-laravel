import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { leave, leavecreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X } from 'lucide-react';

export default function Leave() {
    return (
        <>

        <Link className='add-button' href={(leavecreate())}> <Plus /> </Link>

            <table className='leave-table'>
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