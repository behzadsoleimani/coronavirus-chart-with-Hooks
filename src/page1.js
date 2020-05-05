import React, { useState, useContext } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Button } from "@material-ui/core";
import { AppContext } from "./context";


const data = [
    {
        "name": "0",
        "uv": 2,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "1",
        "uv": 5,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "2",
        "uv": 18,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "3",
        "uv": 28,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "4",
        "uv": 43,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "5",
        "uv": 61,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "6",
        "uv": 95,
        "pv": 4300,
        "amt": 2100
    },
    {
        "name": "7",
        "uv": 139,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "8",
        "uv": 245,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "9",
        "uv": 388,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "10",
        "uv": 593,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "11",
        "uv": 978,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "12",
        "uv": 1501,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "13",
        "uv": 2336,
        "pv": 4300,
        "amt": 2100
    },
    {
        "name": "14",
        "uv": 2922,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "15",
        "uv": 3513,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "16",
        "uv": 4747,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "17",
        "uv": 5823,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "18",
        "uv": 6566,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "19",
        "uv": 7161,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "20",
        "uv": 8042,
        "pv": 4300,
        "amt": 2100
    },
    {
        "name": "21",
        "uv": 9000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "22",
        "uv": 10075,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "23",
        "uv": 11364,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "24",
        "uv": 12729,
        "pv": 3908,
        "amt": 2000
    }
]
function Button1() {
    const [state, setState] = useContext(AppContext);
    const [items, setItems] = useState([data[0]]);
    const [count, setCount] = useState(1);

    const handleClick = () => {
        setCount((prev) => prev + 1)
        setItems(data.slice(0, count))

        console.log(state)
        setState(state + 1)
    }




    return (

        <div
            style={{
                padding: "100px"
            }}>
            <LineChart
                width={1200}
                height={600}
                data={items}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label="تعداد مبتلایان" type="number" domain={[0, 'dataMax + 1000']} />
                <Tooltip />
                <Legend />
                {/* <Line type="monotone" dataKey="pddv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>

            <Button onClick={handleClick} color="primary" variant="contained">
                روزشمار مبتلایان
      </Button>
        </div>);
}


export default Button1;
