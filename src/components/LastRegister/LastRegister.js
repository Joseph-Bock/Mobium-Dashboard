import { useState, useEffect } from 'react';
import './LastRegister.css'

function LastRegister (props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.title === 'Manufacturers') {
            fetch('http://localhost:3000/products')
            .then(response => {
                return response.json();
            }).then(data => {
                setData({
                    data
                })
            })
        } else {
            fetch('http://localhost:3000/' + props.title)
            .then(response => {
                return response.json();
            }).then(data => {
                setData({
                    data
                })
            })
        }
    }, [])

    if (data.data) {
        const fetchData = data.data;
        const keyWord = props.title.toLowerCase();

        let item = fetchData[keyWord][0];
        let items = [];

        if (props.title === 'Manufacturers') {
            item = fetchData[keyWord];
        }

        for (let [index, value] of Object.entries(item)) {
            if (index !== 'createdAt' && index !== 'image' && index !== 'manufacturers.id' && index !== 'manufacturers.name' && index !== 'discount') {
                switch (index) {
                    case 'firstname':
                        index = 'First name'
                        break;

                    case 'lastname':
                        index = 'Last name'
                        break;

                    case 'price':
                        value += '$'
                        break;

                    case 'manufacturer':
                        value = item['manufacturers.name']
                        break;

                    case 'frontCamera':
                        index = 'Front Camera'
                        break;

                    case 'backCamera':
                        index = 'Back Camera'
                        break;

                    default:
                        break;
                }

                if (props.title === 'Products' && typeof value === 'number' && index !== 'id' && index !== 'price') {
                    if (index === 'weight') {
                        value += ' Grams'
                    } else if (index === 'display') {
                        value += ' Inch'
                    } else if (index === 'Front Camera' || index === 'Back Camera') {
                        value += ' MP'
                    } else {
                        value += ' GB'
                    }
                }

                
                if (index === 'First name' || index === 'name') {
                    items.push(<p className = 'property name' key = { index }>{ value }</p>)
                } else if (index === 'updatedAt') {
                    const fullDate = new Date(value);
                    const newDate = fullDate.getDate() + '/' + fullDate.getMonth() + '/' + fullDate.getFullYear();
                    const newTime = fullDate.getHours() + ':' + fullDate.getMinutes() + ':' + fullDate.getSeconds();

                    items.push(<p className = 'property date' key = { index }>{ newDate }<span>{ newTime }</span></p>)
                } else if (index === 'id') {
                    if (props.title === 'Users') {
                        items.push(<a target = 'noopener noreferrer' href = {'http://localhost:3000/users/' + value} className = 'property lastId' key = { index }>{ value }</a>)
                    } else {
                        items.push(<a target = 'noopener noreferrer' href = {'http://localhost:3000/catalog?search=' + value} className = 'property lastId' key = { index }>{ value }</a>)
                    }
                } else {
                    items.push(<p className = 'property' key = { index }>{ index }<span>{ value }</span></p>);
                }
            }
        }

        return (
             <div style = {{position: 'relative', padding: '20px'}}>
                { items }
            </div>
        )
    } else {
        return <><p>Fetching...</p></>
    }
}

export default LastRegister;