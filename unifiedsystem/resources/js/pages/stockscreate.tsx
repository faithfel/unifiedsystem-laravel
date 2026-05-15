import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks, stockscreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Form } from "@inertiajs/react";

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
            <Link href={(stocks())}><h1><CornerDownLeft /></h1></Link>
            <div className=""></div>
            <form action="/submit-stock" method="POST">
                <div className="create-stock-container">

                    <label  htmlFor="product">Product:</label>
                    <input className='create-input' id="product" type="text" name="product"/>
                    <label htmlFor="sku">SKU:</label>
                    <input className='create-input' id="sku" type="text" name="sku"/>
                    <label htmlFor="category">Category:</label>
                    <input className='create-input' id="category" type="text" name="category"/>
                    <label htmlFor="price">Price:</label>
                    <input className='create-input' id="price" type="text" name="price"/>
                    <label htmlFor="stock">Stock:</label>
                    <input className='create-input' id="stock" type="text" name="stock"/>
                    <label htmlFor="status">Status:</label>
                        <select className="dropdown" id="status" name="status">
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
