import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { leave, leavecreate } from '@/routes';
import { Form } from "@inertiajs/react";

export default function LeaveCreate() {
    return (
        <>
            <form action="/submit-department" method="post">
                <div className="create-stock-container"> 

                    <label htmlFor='leave-employee'>Employee:</label>
                    <select className="dropdown" id="leave-employee" name="leave-employee" required>
                            <option value="option1">Option 1</option>  
                            <option value="option2">Option 2</option>
                    </select> 
                    <label htmlFor='leave-type'>Leave Type:</label> 
                    <select className="dropdown" id="leave-type" name="leave-type" required>
                            <option value="annual">Annual</option>  
                            <option value="sick">Sick</option>
                            <option value="personal">Personal</option>
                            <option value="maternity">Maternity</option>
                            <option value="paternity">Paternity</option>
                            <option value="unpaid">Unpaid</option>
                    </select> 
                    <label htmlFor="start-date-leave">Start Leave Date:</label>
                    <input type="date" id="date-start-date-leave" name="date-start-date-leave" required></input>
                    <label htmlFor="end-date-leave">End Leave Date:</label>
                    <input type="date" id="end-date-leave" name="end-date-leave" required></input>

                    <label htmlFor='leave-reason'>Reason:</label>
                    <textarea id="leave-reason" name="leave-reason" required></textarea> 

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