"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topProducts = void 0;
const topProducts = async (_, ctx, args) => {
    const products = [{
            id: '1233',
            name: "Product 1",
            price: 250
        },
        {
            id: '1234',
            name: "Product 2",
            price: 250
        }];
    return products;
};
exports.topProducts = topProducts;
//# sourceMappingURL=Product.js.map