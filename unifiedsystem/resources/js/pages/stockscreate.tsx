import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks, stockscreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Form } from "@inertiajs/react";
import { Plus, X } from 'lucide-react';

export default function StocksCreate() {
    return (
        <>
            <Link className='add-button' href={(stocks())}> <X /> </Link>

            <form action="/submit-stock" method="post">
                <div className="create-stock-container"> 
                    <label htmlFor='product-name'>Product Name:</label>
                    <input type='text' id="product-name" name="product-name" required></input> 
                    <label htmlFor='sku'>SKU:</label>
                    <input type='text' id="sku" name="sku" required></input>
                    <label htmlFor='stock-category'>Category:</label>
                    <select className="dropdown" id="stock-category" name="stock-category" required>
                            <option value="option1">Option 1</option>  
                    </select>  
                    <label htmlFor='price'>Price:</label>
                    <input type='number' id="price" name="price" required></input>
                    <label htmlFor='inventory'>Inventory:</label>
                    <input type='number' id="inventory" name="inventory" required></input>
                    <label htmlFor='status'>Status:</label>
                    <select className="dropdown" id="status" name="status" required>
                            <option value="active">Active</option>  
                            <option value="inactive">Inactive</option> 
                    </select>  
                    <button className='save-button' type='submit'>Save</button>
                </div>
            </form>

        </>
    );
}

stockscreate.layout = {
    breadcrumbs: [
        {
            title: 'StocksCreate',
            href: stockscreate(),
        },
    ],
};
