import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { employees, employeescreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X } from 'lucide-react';
import {useForm} from '@inertiajs/react';

export default function EmployeesCreate() {

    const {data, setData, post} = useForm({
        employee_id: '',
        first_name: '',
        last_name: '',
        department: '',
        date_hired: '',
        phone_number: '',
        position: '',
        base_salary: '',


    })

    return (
        <>
            
            <Link className='add-button' href={(employees())}> <X /> </Link>

            <form action="/submit-employees" method="post">
                <div className="create-stock-container">    
                    <label htmlFor='employee_id'>Employee ID:</label>
                    <input type='text' id="employee_id" name="employee_id" required value={data.employee_id} onChange={(e)=>setData('employee_id', e.target.value)}></input>

                    <label htmlFor='first_name'>First Name:</label>
                    <input type='text' id="first_name" name="first_name" required></input>

                    <label htmlFor='last_name'>Last Name:</label>
                    <input type='text' id="last_name" name="last_name" required></input>  

                    <label htmlFor='department'>Department:</label>            
                    <select className="dropdown" id="department" name="department" required>
                            <option value="option1">Option 1</option>  
                            <option value="option2">Option 2</option>
                    </select>  
                    <label htmlFor="date_hired">Date Hired:</label>
                    <input type="date" id="date_hired" name="date_hired" required></input>

                    <label htmlFor="phone_number">Phone Number:</label>
                    <input type="number" id="phone_number" name="phone_number" required></input>

                    <label htmlFor='position'>Position:</label>
                    <input type='text' id="position" name="position" required></input>

                    <label htmlFor="base_salary">Base Salary:</label>
                    <input type="number" id="base_salary" name="base_salary" required></input>

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