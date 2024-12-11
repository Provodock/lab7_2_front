import React from "react";
import "./index.css";

const products = [
    {
        id: 1,
        image: "https://github.com/Provodock/lab7_2_front/blob/master/public/images/product1.jpg?raw=true",
        title: "Шкіряний гаманець",
        price: "1450.00₴",
    },
    {
        id: 2,
        image: "https://github.com/Provodock/lab7_2_front/blob/master/public/images/product2.jpg?raw=true",
        title: "Шкіряна сумка",
        price: "3399.00₴",
    },
    {
        id: 3,
        image: "https://github.com/Provodock/lab7_2_front/blob/master/public/images/product3.jpg?raw=true",
        title: "Шкіряний рюкзак",
        price: "4799.00₴",
    },
    {
        id: 4,
        image: "https://github.com/Provodock/lab7_2_front/blob/master/public/images/product4.jpg?raw=true",
        title: "Шкіряний брелок",
        price: "299.00₴",
    },
    {
        id: 5,
        image: "https://github.com/Provodock/lab7_2_front/blob/master/public/images/product5.jpg?raw=true",
        title: "Шкіряний кардхолдер",
        price: "500.00₴",
    },
    {
        id: 6,
        image: "https://github.com/Provodock/lab7_2_front/blob/master/public/images/product6.jpg?raw=true",
        title: "Шкіряні підставки",
        price: "150.00₴",
    },
];

const ProductCard = ({ image, title, price }) => (
    <div className="product-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{price}</p>
        <button>До кошику</button>
    </div>
);

const ProductsGrid = () => (
    <main className="main-content">
        <div className="products">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </div>
    </main>
);

export default ProductsGrid;
