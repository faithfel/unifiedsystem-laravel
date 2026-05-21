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
                    <label htmlFor='department-name'>Department Name:</label>
                    <input type='text' id="department-name" name="department-name" required></input> 
                    <label htmlFor='department-head'>Department Head:</label>
                    <input type='text' id="department-head" name="department-head" required></input> 
                     <label htmlFor='department-description'>Description:</label>
                    <textarea id="department-description" name="department-description" required></textarea> 
                                                
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