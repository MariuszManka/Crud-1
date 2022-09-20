import React from 'react';
import Worker from './Worker';

const ListWorker = (props) => {

    const Workers = props.worker.map(worker => <Worker key={Worker.id} worker={worker} delete={props.delete} change={props.change} />)

    return (
        <>
            <div className='1st'> {/*m_manka: Brak propsa "key" - stąd warning "Each child in a list should have a unique "key" prop"*/}
                <h3>Worker List</h3>
                {Workers}
            </div>
        </>

    );
}

export default ListWorker;
