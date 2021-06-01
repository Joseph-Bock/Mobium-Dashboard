import React from 'react';
import './List.css'

function List (props) {
    if (props.data) {
        const productsData = props.data.products;
        let count = 0;
        const products = [];

        for (let product of productsData) {
            const newProduct = [];
            count ++;

            for (let [property, value] of Object.entries(product)) {
                if (typeof value === 'number' && property !== 'id') {
                    if (property === 'weight') {
                        value += ' Grams';
                    } else if (property === 'display') {
                        value += ' Inch';
                    } else if (property === 'frontCamera' || property === 'backCamera') {
                        value += ' MP';
                    } else if (property === 'price') {
                        value += '$';
                    } else if (property !== 'discount') {
                        value += ' GB';
                    }
                }

                if (property !== 'manufacturers.name' && property !== 'manufacturers.id') {
                    if (property === 'manufacturer') {
                        newProduct.push(
                            <td key = { property }>{ product['manufacturers.name'] }</td>
                        )
                    } else {
                        newProduct.push(
                            <td key = { property }>{ value }</td>
                        )
                    }
                }
            }

            products.push(
                <tr className = 'product' key = { 'ProductN' + count }>
                    { newProduct }
                </tr>
            )
        }

        if (products) {
            if (products.length < 10) {
                let missing = 10 - products.length;

                for (let i = 0; i < missing; i++) {
                    products.push(
                        <tr className = 'product' key = { 'ProductN' + (missing + i) } style = {{height: '56px'}}></tr>
                    )
                }
            }
        }

        return (
            <table>
                <tbody>
                    <tr>
                        <th> Id </th>
                        <th> Name </th>
                        <th> Manufacturer </th>
                        <th> Price </th>
                        <th> Discount </th>
                        <th> Image </th>
                        <th> Storage </th>
                        <th> RAM </th>
                        <th> Processor </th>
                        <th> Color </th>
                        <th> Weight </th>
                        <th> Display </th>
                        <th> Resolution </th>
                        <th> Front Camera </th>
                        <th> Back Camera </th>
                        <th> Video </th>
                        <th> Created At </th>
                        <th> Last Updated </th>
                    </tr>

                    { products }
                </tbody>
            </table>
        )
    } else {
        return <p>Fetching...</p>
    }
}

export default List;