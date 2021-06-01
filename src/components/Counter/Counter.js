import { useState, useEffect } from 'react';
import './Counter.css'

function Counter (props) {
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

    return (
        <>
            <div className = 'title'>
                <p>{ props.title }</p>
            </div>

            {data.data && props.title !== 'Users' &&
                <div className = 'count' style = {{backgroundImage: 'url("http://localhost:3000/img/' + props.title + '.jpg")'}}>
                    {props.title !== 'Manufacturers' && <p>{ data.data.count }</p>}
                    {data.data.manufacturers && props.title === 'Manufacturers' && <p>{ Object.keys(data.data.manufacturers).length }</p>}
                </div>
            }

            {data.data && props.title === 'Users' &&
                <div className = 'count' style = {{backgroundImage: 'url("http://localhost:3000/img/profileImages/' + data.data.users[0].image}}>
                    {props.title !== 'Manufacturers' && <p>{ data.data.count }</p>}
                    {data.data.manufacturers && props.title === 'Manufacturers' && <p>{ Object.keys(data.data.manufacturers).length }</p>}
                </div>
            }
        </>
    )
}

export default Counter;