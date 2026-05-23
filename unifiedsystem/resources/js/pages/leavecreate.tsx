import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { leave, leavecreate } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X  } from 'lucide-react';

export default function LeaveCreate() {
    return (
        <>

        <Link className='add-button' href={(leave())}> <X /> </Link>

            <form action="/submit-department" method="post">
                <div className="create-stock-container"> 

                    <label htmlFor='leave_employee'>Employee:</label>
                    <select className="dropdown" id="leave_employee" name="leave_employee" required>
                            <option value="option1">Option 1</option>  
                            <option value="option2">Option 2</option>
                    </select> 
                    <label htmlFor='leave_type'>Leave Type:</label> 
                    <select className="dropdown" id="leave_type" name="leave_type" required>
                            <option value="annual">Annual</option>  
                            <option value="sick">Sick</option>
                            <option value="personal">Personal</option>
                            <option value="maternity">Maternity</option>
                            <option value="paternity">Paternity</option>
                            <option value="unpaid">Unpaid</option>
                    </select> 
                    <label htmlFor="start_date_leave">Start Leave Date:</label>
                    <input type="date" id="date_start_leave" name="date_start_leave" required></input>
                    <label htmlFor="end_date_leave">End Leave Date:</label>
                    <input type="date" id="end_date_leave" name="end_date_leave" required></input>

                    <label htmlFor='leave_reason'>Reason:</label>
                    <textarea id="leave_reason" name="leave_reason" required></textarea> 

                    <button className='save-button' type='submit'>Save</button>
                          
                </div>
            </form>
        </>
    );
}

leavecreate.layout = {
    breadcrumbs: [
        {
            title: 'LeaveCreate',
            href: leavecreate(),
        },
    ],
};