import { Head, Link, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks, stockscreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/components/ui/input';
import { Form } from "@inertiajs/react";
import { NotebookPen } from 'lucide-react';
export default function StocksCreate() {

    const{ data, setData, post, processing, errors} = useForm({
        product: '',
        sku: '',
        category: '',
        price:'',
        stock:'',
        status:'',

    });


    return (
        <>
                <h1 className='tabtitle'>Add Stock </h1> 
            
            <div className=""></div>
            <form>
                <div className="create-stock-container">

                    <label htmlFor="product">Product:</label>
                    <input id="product" type="text" name="product" value={data.product}/>
                    <label htmlFor="sku">SKU:</label>
                    <input id="sku" type="text" name="sku" value={data.sku} />
                    <label htmlFor="category">Category:</label>
                    <input id="category" type="text" name="category" value={data.category}/>
                    <label htmlFor="price">Price:</label>
                    <input id="price" type="text" name="price" value={data.price} />
                    <label htmlFor="stock">Stock:</label>
                    <input id="stock" type="text" name="stock" value={data.stock}/>
                    <label htmlFor="status">Status:</label>
                        <select className="dropdown" id="status" name="status"  value={data.status}>
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
