const handleUpdate = (_id, completed) => (prevState) => {
  const temp = [...prevState];
  const taskIndex = temp.findIndex(({ id }) => _id === id);
  if (taskIndex > -1) {
    const task = temp[taskIndex];
    task.completed = completed;
    temp.splice(taskIndex, 1, task);
    return temp;
  }
  return prevState;
};

export default handleUpdate;
