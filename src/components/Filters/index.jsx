import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
const { Search } = Input;
import {
  searchFilterChange,
  radioFilterChange,
  filterPrioriesChange,
} from "../../store/action";
export default function Filters() {
  const [search, setSearch] = useState();
  const [radioFilter, setRadioFilter] = useState("All");
  const [prioritiesFilter, setPrioritiesFilter] = useState([]);

  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };
  const handlePriorityChanges = (e) => {
    setPrioritiesFilter(e);
    dispatch(filterPrioriesChange(e));
  };

  const handleRadioFilterChange = (e) => {
    setRadioFilter(e.target.value);
    dispatch(radioFilterChange(e.target.value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={search}
          onChange={handleSearchChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={radioFilter} onChange={handleRadioFilterChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          value={prioritiesFilter}
          onChange={handlePriorityChanges}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
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
      </Col>
    </Row>
  );
}
