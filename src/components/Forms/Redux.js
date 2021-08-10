import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {increment} from '../Actions/index'

export default function Redux() {

    const state = useSelector(state => state.counter)

    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter:{state}</h1>
            <button type="submit" onClick={() => dispatch(increment()) }>Increment</button>
        </div>
    )
}
