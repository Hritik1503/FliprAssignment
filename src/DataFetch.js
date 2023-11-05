import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const DataFetch = () => {
    const [data,setData] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        try {
           const res = await fetch('https://api.nobelprize.org/v1/prize.json');
           const jsonData = await res.json();
           setData(jsonData);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    // <div>
    //   <h1>Data Fetch</h1>
    //   {data ? (
    //     <ul>
    //         {data.prizes.map((item => (
    //             <li key = {item.id}>{item.year} " " {item.category} " " </li>
    //         )))}
    //     </ul>
    //   ): (
    //     <p>Loading Data</p>
    //   )}
    // </div>
    <div className='container'>
        <div className='mt-3'>
            <h3>Fetch data from API</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.prizes.map((user, index) => {
                            return <tr key={index}>
                                <td>{user.year}</td>
                                <td>{user.category}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DataFetch;
