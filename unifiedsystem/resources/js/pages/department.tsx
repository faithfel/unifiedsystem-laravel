import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { department, departmentcreate } from '@/routes';
import { Form, usePage } from "@inertiajs/react";
import { Plus, X  } from 'lucide-react';



export default function Department() {


    return (
        <>
          <Link className='add-button' href={(departmentcreate())}> <Plus /> </Link>
            
            <div className="department-container">
                <div className="department-box">
                        <h1>Department List</h1>


                </div>
            </div>



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