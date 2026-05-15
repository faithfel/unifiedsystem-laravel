import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { employees, employeescreate } from '@/routes';
import { Form } from "@inertiajs/react";

export default function EmployeesCreate() {
    return (
        <>
            
        <Link href={(employees())}><h1>Return</h1></Link>

            <form action="/submit-employee" method="POST">
                <div className="create-stock-container">
                    <label htmlFor='employee-id'>Employee ID:</label>
                    <input type='text' id="employee-id" name="employee-id"></input>
                    <label htmlFor='first-name'>First Name:</label>
                    <input type='text' id="first-name" name="first-name"></input>
                    <label htmlFor='last-name'>Last Name:</label>
                    <input type='text' id="last-name" name="last-name"></input>   
                    <label htmlFor='department'>Department:</label>            
                    <select className="dropdown" id="department" name="department">
                            <option value="option1">Option 1</option>  
                            <option value="option2">Option 2</option>
                    </select>  
                    <label htmlFor="date-hired">Date Hired:</label>
                    <input type="date" id="date-hired" name="date-hired"></input>
                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="number" id="phone-number" name="phone-number"></input>
                    <label htmlFor='position'>Position:</label>
                    <input type='text' id="position" name="position"></input>
                    <label htmlFor="base-salary">Base Salary:</label>
                    <input type="number" id="base-salary" name="base-salary"></input>

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