const getTasks = async (taskCount, tasks) => {
  try {
    let parsedTasks = [];
    for (let i = 1; i <= taskCount; i++) {
      const task = await tasks(i);
      const [id, content, completed] = task;
      parsedTasks.push({
        id: id.toString(),
        content,
        completed,
      });
    }

    return parsedTasks;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getTasks;
