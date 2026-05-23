import { Head, Link} from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { department, departmentcreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X } from 'lucide-react';

export default function Department() {
    return (
        <>

        <Link className='add-button' href={(department())}> <X /> </Link>

            <form action="/submitdepartment" method="POST">
                <div className="create-stock-container"> 
                    <label htmlFor='department_name'>Department Name:</label>
                    <input type='text' id="department_name" name="department_name" required></input> 
                    <label htmlFor='department_head'>Department Head:</label>
                    <input type='text' id="department_head" name="department_head" required></input> 
                     <label htmlFor='department_description'>Description:</label>
                    <textarea id="department_description" name="department_description" required></textarea> 
                                                
                    <button className='save-button' type='submit'>Save</button>
                        
                </div>
            </form>
        </>
    );
}

departmentcreate.layout = {
    breadcrumbs: [
        {
            title: 'DepartmentCreate',
            href: departmentcreate(),
        },
    ],
};