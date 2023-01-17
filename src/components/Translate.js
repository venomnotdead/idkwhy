import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options=[
 {
    label:'Afrikaans',
    value:'af'
 },
 {
    label:'Arabic',
    value:'ar'
 },
 {
    label:'Hindi',
    value:'hi'
 }
];

const Translate=()=>{
    const [language,setLanguage]=useState(options[0]);
    const [text,setText]= useState('');
    return(
        <div className='ui segment'>
            <div className='ui form' >
                <input
                    value={text}
                    onChange={(e)=>setText(e.target.value)}/>
            </div>
            <Dropdown selected={language} 
            label ="select a language"
            onSelectedChange={setLanguage}
            options={options}/>
            <hr/>
            <h3 className='ui header'>
                <Convert language={language}
                text={text}
                />

            </h3>
        </div>
    );
}
export default Translate;