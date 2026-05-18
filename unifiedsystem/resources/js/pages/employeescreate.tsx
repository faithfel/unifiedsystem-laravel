import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { employees, employeescreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X } from 'lucide-react';

export default function EmployeesCreate() {
    return (
        <>
            
            <Link className='add-button' href={(employees())}> <X /> </Link>

            <form action="/submit-employees" method="post">
                <div className="create-stock-container">    
                    <label htmlFor='employee-id'>Employee ID:</label>
                    <input type='text' id="employee-id" name="employee-id" required></input>
                    <label htmlFor='first-name'>First Name:</label>
                    <input type='text' id="first-name" name="first-name" required></input>
                    <label htmlFor='last-name'>Last Name:</label>
                    <input type='text' id="last-name" name="last-name" required></input>   
                    <label htmlFor='department'>Department:</label>            
                    <select className="dropdown" id="department" name="department" required>
                            <option value="option1">Option 1</option>  
                            <option value="option2">Option 2</option>
                    </select>  
                    <label htmlFor="date-hired">Date Hired:</label>
                    <input type="date" id="date-hired" name="date-hired" required></input>
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="number" id="phone-number" name="phone-number" required></input>
                    <label htmlFor='position'>Position:</label>
                    <input type='text' id="position" name="position" required></input>
                    <label htmlFor="base-salary">Base Salary:</label>
                    <input type="number" id="base-salary" name="base-salary" required></input>

                    <button className='save-button' type='submit'>Save</button>
                </div>  
            </form>




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