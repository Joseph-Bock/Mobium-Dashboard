import React, { useState, useEffect} from "react";
import List from '../List/List';
import './Table.css'

function Table (props) {
    let [count, setCount] = useState(1);
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products?' + new URLSearchParams(
            {order: 'ASC',
             count: count - 1,
             limit: 10}
        )).then(response => {
            return response.json();
        }).then(data => {
            setData({
                data
            })
        })
    }, [count])

    function Add () {
        const max = Math.ceil(data.data.count / 10);

        if (count !== max) {
            setCount(count += 1)
        }
    }

    function Substract () {
        if (count > 1) {
            setCount(count -= 1)
        }
    }

    return (
        <>
            <div className = 'Table'>
                {data.data && 
                    <List
                        data = {data.data}
                    />
                }

                {!data.data && 
                    <p>Fetching...</p>
                }
            </div>

            <div className = 'tableCount'>
                <button onClick = {Substract}>{'<'}</button>
                <input id = 'pageCounter' type = 'number' value = {count} onChange={(event) => {
                    setCount(event.target.value);
                }}></input>
                <button onClick = {Add}>{'>'}</button>
            </div>
        </>
    )

}

export default Table;