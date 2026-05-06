import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { stocks, stockscreate } from '@/routes';
import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-dropdown-menu';

export default function StocksCreate() {
    return (
        <>
            <h1 className='tabtitle'>Stock create</h1>
            <Link href={(stocks())}><Button>create</Button></Link>
            
            <div className=""></div>
            <form>
                <div className="">
                    <Label htmlFor="stocksname"> </Label>
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
