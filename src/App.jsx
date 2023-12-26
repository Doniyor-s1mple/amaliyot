import React from 'react'
import TaskHeader from './Components/TaskHeader'
import TaskBody from './Components/TaskBody'
import TaskFooter from './Components/TaskFooter'

const App = () => {
    return (
        <div className='container my-3'>
            <div className="col-12">
                <div className="card bg-dark">
                    <div className="card-header">
                        <TaskHeader />
                    </div>
                    <div className="card-body">
                        <TaskBody />
                    </div>
                    <div className="card-footer">
                        <TaskFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App