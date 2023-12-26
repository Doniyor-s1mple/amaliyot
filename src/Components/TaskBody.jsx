import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'

const TaskBody = ({ tasks }) => {

    return (
        <div>
            {tasks.map((item, index) => <Task key={index} item={item} index={index} />)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}



export default connect(mapStateToProps)(TaskBody)