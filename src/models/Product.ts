export const topProducts = async (_:unknown, ctx: unknown, args: unknown) => { 
    
        const products =[{
                         upc: '1233',
                         name: "Product 1",
                         price: 250},
                         {
                         upc: '1234',
                         name: "Product 2",
                         price: 250
                        }];
        
            
            return products ; 
        }
