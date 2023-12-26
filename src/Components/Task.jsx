import React from 'react'
import { connect } from 'react-redux'

const Task = ({ item, index, ToggleTodo }) => {

    var Check = (e) => {
        var checked = e.target.value
    }

    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <input onChange={() => ToggleTodo(item.id)} id={'checkbox' + item.id} type="checkbox" checked={item.active} style={{ transform: 'scale(1.6)' }} />
                <label htmlFor={'checkbox' + item.id} className='mx-3'>
                    <h3 className='text-light'>{item.name}</h3>
                </label>
            </div>
            <button className='btn btn-danger btn-sm' >del</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        ToggleTodo: (id) => {
            dispatch({
                type: 'toggleToCompleted',
                id: id
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Task)