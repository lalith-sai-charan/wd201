/* eslint-disable indent */
/* eslint-disable no-undef */

const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

const dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1)),
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1)),
);

describe("todo test", () => {
  beforeAll(() => {
    add({
      title: "add yesterday",
      completed: false,
      dueDate: yesterday,
    });
    add({
      title: "add today",
      completed: false,
      dueDate: today,
    });
    add({
      title: "add tomorrow",
      completed: false,
      dueDate: tomorrow,
    });
  });
  test("should add new todo", () => {
    expect(all.length).toBe(3);
  });

  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
