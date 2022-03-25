export const topProducts = async (_:unknown, ctx: unknown, args: unknown) => { 
    
        const products =[{
                         id: '1233',
                         name: "Product 1",
                         price: 250},
                         {
                         id: '1234',
                         name: "Product 2",
                         price: 250
                        }];
        
            
            return products ; 
        }
