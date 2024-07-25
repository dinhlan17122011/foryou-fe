import Checkout from "../pages/Checkout/Checkout";
import Chitiet from "../pages/Chitietsanpham/Chitiet";
import Homepages from "../pages/HomePages/Homepages";

export const routes =[
    {
        path:'/',
        page:Homepages
    },
    {
        path:'/checkout',
        page:Checkout
    },
    {
        path:'/product/:id',
        page:Chitiet
    }
]