import React,{useState} from 'react';
import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items=[
    {
        title:'what is react',
        content:'react is a front end js framework'
    },
    {
        title:'why use react',
        content:'react is a faviorite js lib'
    },
    {
        title:'how do you use react',
        content:'i will tell you'
    }
];
const options=[
    {
        label:'the color red',
        value:'red'
    },
    {
        label:'the color green',
        value:'green'
    },
    {
        label:'the color blue',
        value:'blue'
    }
];



export default ()=>{
    const[selected,setSelected]=useState(options[0]);
    
    return (
        <div >
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
                
        </div>
    );
}