import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
const { Search } = Input;

//IMPORT REDUCER (REDUX CORE)
import {
  searchFilterChange,
  radioFilterChange,
  filterPrioriesChange,
} from "../../store/action";

//IMPORT SLICE (REDUX TOOLKIT)
import filtersSlice from "./filtersSlice";

export default function Filters() {
  const [search, setSearch] = useState();
  const [radioFilter, setRadioFilter] = useState("All");
  const [prioritiesFilter, setPrioritiesFilter] = useState([]);

  const dispatch = useDispatch();

  const handleSearchChangeReduxCore = (e) => {
    //REDUX CORE
    setSearch(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  const handleSearchChangeReduxToolKit = (e) => {
    //REDUX TOOLKIT
    setSearch(e.target.value);
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };

  const handlePriorityChangesReduxCore = (e) => {
    //REDUX CORE
    setPrioritiesFilter(e);
    dispatch(filterPrioriesChange(e));
  };
  const handlePriorityChangesReduxToolKit = (e) => {
    //REDUX TOOLKIT
    setPrioritiesFilter(e);
    dispatch(filtersSlice.actions.filterPrioriesChange(e));
  };

  const handleRadioFilterChangeReduxCore = (e) => {
    //REDUX CORE
    setRadioFilter(e.target.value);
    dispatch(radioFilterChange(e.target.value));
  };
  const handleRadioFilterChangeReduxToolKit = (e) => {
    //REDUX TOOLKIT
    setRadioFilter(e.target.value);
    dispatch(filtersSlice.actions.radioFilterChange(e.target.value));
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
          onChange={handleSearchChangeReduxToolKit}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          value={radioFilter}
          onChange={handleRadioFilterChangeReduxToolKit}
        >
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
          onChange={handlePriorityChangesReduxToolKit}
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
