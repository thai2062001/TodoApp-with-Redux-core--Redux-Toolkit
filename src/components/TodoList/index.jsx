import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { todoRemainingSelector } from "../../store/selector";
import { addTodo } from "../../store/action";
import todoSlice from "../Todo/todoSlice";

export default function TodoList() {
  const [todoName, setTodoName] = useState();
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const todoList = useSelector(todoRemainingSelector);

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  const handleButtonAddClick = () => {
    // REDUX CORE DISPATCH ACTION
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName();
    setPriority("Medium");
  };
  const handleButtonAdd = () => {
    // REDUX TOOLKIT DISPATCH ACTION
    dispatch(
      todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName();
    setPriority("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            completed={todo.completed}
            prioriry={todo.priority}
            id={todo.id}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleButtonAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
