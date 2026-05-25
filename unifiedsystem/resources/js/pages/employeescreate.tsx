import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { employees, employeescreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X } from 'lucide-react';
import {useForm, } from '@inertiajs/react';

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

    const handleSubmit= (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('posts.store'));
    }
    return (
        <>
            
            <Link className='add-button' href={(employees())}> <X /> </Link>

            <form action="/submit-employees" onSubmit={handleSubmit} method="post">
                <div className="create-stock-container">    
                    <label htmlFor='employee_id'>Employee ID:</label>
                    <input type='text' id="employee_id" name="employee_id" required value={data.employee_id} onChange={(e)=>setData('employee_id', e.target.value)}></input>

                    <label htmlFor='first_name'>First Name:</label>
                    <input type='text' id="first_name" name="first_name" required value={data.first_name} onChange={(e)=>setData('first_name', e.target.value)}></input>

                    <label htmlFor='last_name'>Last Name:</label>
                    <input type='text' id="last_name" name="last_name" required value={data.last_name} onChange={(e)=>setData('last_name', e.target.value)}></input>  

                    <label htmlFor='department'>Department:</label>            
                    <select className="dropdown" id="department" name="department" required value={data.department} onChange={(e)=>setData('department', e.target.value)}>
                            <option value="option1">Option 1</option>  
                            <option value="option2">Option 2</option>
                    </select>  
                    <label htmlFor="date_hired">Date Hired:</label>
                    <input type="date" id="date_hired" name="date_hired" required value={data.date_hired} onChange={(e)=>setData('date_hired', e.target.value)}></input>

                    <label htmlFor="phone_number">Phone Number:</label>
                    <input type="text" id="phone_number" name="phone_number" required value={data.phone_number} onChange={(e)=>setData('phone_number', e.target.value)} ></input>

                    <label htmlFor='position'>Position:</label>
                    <input type='text' id="position" name="position" required value={data.position} onChange={(e)=>setData('position', e.target.value)}></input>

                    <label htmlFor="base_salary">Base Salary:</label>
                    <input type="text" id="base_salary" name="base_salary" required value={data.base_salary} onChange={(e)=>setData('base_salary', e.target.value)}></input>

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