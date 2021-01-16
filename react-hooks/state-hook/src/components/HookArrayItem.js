import React, {useState} from 'react';


function HookArrayItem() {

    const [items, setItems] = useState([]);


    return (
        <div>
        
        <form>

        </form>
        {items.map(item => <ul>item</ul>)}
        </div>
    );
}

export default HookArrayItem;