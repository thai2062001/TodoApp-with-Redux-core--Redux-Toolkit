import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkedPriority } from "../../store/action";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};
import todoSlice from "./todoSlice";

export default function Todo({ name, prioriry, id, completed }) {
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch();

  const toggleCheckboxReduxCore = () => {
    //REDUX CORE
    setChecked(!checked);
    dispatch(checkedPriority(id));
  };
  const toggleCheckboxReduxToolkit = () => {
    //REDUX TOOLKIT
    setChecked(!checked);
    dispatch(todoSlice.actions.checkedPriority(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckboxReduxToolkit}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
