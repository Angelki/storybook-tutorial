import React from "react";
import PropTypes from 'prop-types';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Task from "./Task";
//  数据
export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};
// 函数
export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

storiesOf("Task", module)
  .add("default", () => <Task task={task} {...actions} />)
  .add("pinned", () => (
    <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
  ))
  .add("archived", () => (
    <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
  ));
