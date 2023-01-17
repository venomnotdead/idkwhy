import React,{useState} from 'react';

const Accordion =({items})=>{

    const [activeIndex,setActiveIndex]=useState(null);

    const onTitleClick=(index)=>{
        setActiveIndex(index);
    };

    const renderedItems=items.map((item,index)=>{
        const acitve= index===activeIndex?'active':'';

        return <React.Fragment key={item.title}>
            <div
             className={`title ${acitve}`}
             onClick={()=>onTitleClick(index)}
             >
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${acitve} `}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    });

    return(
        <div className='ui styled accordion'>
            {renderedItems}
            <h1>{activeIndex +1}</h1>
        </div>
    );
}

export default Accordion;