// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;

contract TodoList {
    uint public taskCount;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    constructor() public {
        addTask("Deploy the Smart Contract");
    }

    function addTask(string memory _content) public returns (bool) {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        return true;
    }
}
