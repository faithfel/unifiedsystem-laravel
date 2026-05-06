import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks, stockscreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/components/ui/input';
import { Form } from "@inertiajs/react";

export default function StocksCreate() {
    return (
        <>
            <h1 className='tabtitle'>Stock create</h1>
            <Link href={(stocks())}><Button>create</Button></Link>
            
            <div className=""></div>
            <form>
                <div className="">

                    <label htmlFor="product">Product</label>
                    <input id="product" type="text" name="product" />
                    <label htmlFor="sku">SKU</label>
                    <input id="sku" type="text" name="sku" />
                    <label htmlFor="category">Category</label>
                    <input id="category" type="text" name="category" />
                    <label htmlFor="price">Price</label>
                    <input id="price" type="text" name="price" />
                    <label htmlFor="stock">Stock</label>
                    <input id="stock" type="text" name="stock" />
                    <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                    </select>           
                    <button type='submit'>Save</button>

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
