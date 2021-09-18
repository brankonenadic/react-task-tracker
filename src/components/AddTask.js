import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReimanider] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Please add task !')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReimanider(false)
    } 
    return (
        <form className="addForm" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set remainder</label>
                <input type="checkbox" 
                checked={reminder} value={reminder} onChange={(e) => setReimanider(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
