// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;

contract TodoList {
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    constructor() public {
        addTask("Deploy the Smart Contract");
    }

    event Toggling(uint id, string content, bool completed);
    event Toggled(uint id, string content, bool completed);

    function addTask(string memory _content) public returns (bool) {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        return true;
    }

    function removeTask(uint _id) public returns (bool) {
        if (taskExists(_id)) {
            delete tasks[_id];
            taskCount--;
            return true;
        }
        return false;
    }

    function markComplete(uint _id) public returns (bool) {
        if (taskExists(_id)) {
            Task storage task = tasks[_id];
            emit Toggling(task.id, task.content, task.completed);
            task.completed = !task.completed;
            emit Toggled(task.id, task.content, task.completed);

            return true;
        }
    }

    function taskExists(uint _id) private view returns (bool) {
        Task memory task = tasks[_id];
        require(_id > 0 && task.id == _id, "Task Does not exist");

        return true;
    }
}
