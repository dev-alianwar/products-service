
import { v4 as uuid4 } from "uuid";

export const topProducts = async (_:unknown, ctx: unknown, args: unknown) => { 
    
        const products =[
                        {
                            id: uuid4(),
                            title: "Product 1",
                            price: 250,
                            expiryDate: new Date().toISOString(),
                         },
                         {
                            id: uuid4(),
                            title: "Product 2",
                            price: 300,
                            expiryDate: new Date().toISOString(),
                        }, 
                        {
                            id: uuid4(),
                            title: "Product 3",
                            price: 299.99,
                            expiryDate: new Date().toISOString(),
                        },
                        {
                            id: uuid4(),
                            title: "Product 4",
                            price: 280.99,
                            expiryDate: new Date().toISOString(),
                        },
                        {
                            id: uuid4(),
                            title: "Product 5",
                            price: 249.99,
                            expiryDate: new Date().toISOString(),
                        },
                        {
                            id: uuid4(),
                            title: "Product 1",
                            price: 299,
                            expiryDate: new Date().toISOString(),
                            }
                         ];
        
            
            return products ; 
        }
