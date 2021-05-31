import React, { useEffect, useState } from 'react';

const UseEffects1 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Hello useEffects');
        document.title = `Chats(${count})`
    });

    console.log('Mihir Chakkarwar');

    const incre = () => {
        return setCount(count + 1);
    }
    
    return(
        <>
            <div className ='inner_div'>
                <h1 className = 'textss'> Hello UseEffects1: {count} </h1>
                <button className = 'btn' onClick = {incre}> Click Here ◀️ </button>
            </div>
        </>
    );
};

export default UseEffects1;