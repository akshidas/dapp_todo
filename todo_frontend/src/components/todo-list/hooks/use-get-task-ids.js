import { useEffect, useState } from "react";
import { useTodoListContract } from "store/todo-list-contract-provider";

const useGetTaskIds = () => {
    const todoListContract = useTodoListContract();
    const [taskIds, setTaskIds] = useState("");

    const getTaskIds = async () => {
        try {
            const taskIds = await todoListContract.getTaskIds();
            setTaskIds(taskIds.map((item) => item.toString()));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (todoListContract) {
            getTaskIds();
        }
    }, [todoListContract]);

    useEffect(() => {
        if (todoListContract) {
            todoListContract.on("Removed", (id) => {
                getTaskIds();
                console.log(`deleted ${id}`);
            });
        }
    }, [todoListContract]);

    useEffect(() => {
        if (todoListContract) {
            todoListContract.on("TaskAdded", (message) => {
                getTaskIds();
                console.log(message);
            });
        }
    }, [todoListContract]);

    return taskIds;
};

export default useGetTaskIds;
