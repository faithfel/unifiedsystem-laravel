import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { categories } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X  } from 'lucide-react';

export default function Categories() {
    return (
        <>
            <Link className='add-button' href={(categories())}> <X /> </Link>
            
            <form action="/submitcategories" method="POST">
                <div className="create-stock-container"> 
                    <label htmlFor='category_name'>Category Name:</label>
                    <input type='text' id="category_name" name="category_name" required></input> 
                
                    <label htmlFor='category_description'>Description:</label>
                    <textarea id="category_description" name="category_description" required></textarea> 
                                                            
                    <button className='save-button' type='submit'>Save</button>
                                    
                </div>
            </form>

        </>
    );
}

categories.layout = {
    breadcrumbs: [
        {
            title: 'Categories',
            href: categories(),
        },
    ],
};