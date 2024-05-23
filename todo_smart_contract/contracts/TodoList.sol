// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;

// Todo: When redusing count the data gets invalidated
contract TodoList {
    uint public taskCount = 0;
    uint[] private availableTaskIds;
    mapping(uint => Task) public tasks;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    event Toggling(uint id, string content, bool completed);
    event Toggled(uint id, string content, bool completed);

    constructor() public {
        addTask("Deploy the Smart Contract");
    }

    function addTask(string memory _content) public returns (bool) {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        availableTaskIds.push(taskCount);
        return true;
    }

    function removeTask(uint _id) public returns (bool) {
        if (taskExists(_id)) {
            delete tasks[_id];
            for (uint i = 0; i < availableTaskIds.length; i++) {
                if (availableTaskIds[i] == _id) {
                    availableTaskIds[i] = 0;
                    break;
                }
            }
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

    function getTaskCount() private view returns (uint) {
        uint _taskCount = 0;
        for (uint i = 0; i < availableTaskIds.length; i++) {
            if (availableTaskIds[i] > 0) {
                _taskCount++;
            }
        }

        return _taskCount;
    }

    function getTaskIds() public view returns (uint[] memory) {
        uint[] memory ids = new uint[](getTaskCount());
        uint index = 0;
        for (uint i = 0; i < availableTaskIds.length; i++) {
            if (availableTaskIds[i] > 0) {
                ids[index] = availableTaskIds[i];
                index++;
            }
        }
        return ids;
    }
}
