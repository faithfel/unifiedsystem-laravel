import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { categories } from '@/routes';
import { Form } from "@inertiajs/react";
import { Plus, X  } from 'lucide-react';

export default function Categories() {
    return (
        <>
            <Link className='add-button' href={(categories())}> <X /> </Link>
            
            <form action="/submit-categories" method="post">
                <div className="create-stock-container"> 
                    <label htmlFor='category-name'>Category Name:</label>
                    <input type='text' id="category-name" name="category-name" required></input> 
                
                    <label htmlFor='category-description'>Description:</label>
                    <textarea id="category-description" name="category-description" required></textarea> 
                                                            
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