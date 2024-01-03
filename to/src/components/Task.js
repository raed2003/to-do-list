import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { edittask } from '../Redux/Action';

function Task({task}) {
  const dispatch =useDispatch()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
        {task.description} < br/>
       done:<input type="checkbox" checked={task.isdone}/>
        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(edittask(task.id,{id:task.id,description:task.description,isdone:!task.isdone}))}>is complete </Button>
      </Card.Body>
    </Card>
  );
}

export default Task;