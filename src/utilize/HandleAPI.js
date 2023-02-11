import axios from 'axios';

const baseURL = "https://todoapp-mdh.onrender.com";
// const baseURL = "http://localhost:5500";

const getTodos = async(setTodos)=>{
    const res = await axios.get(baseURL)
        setTodos(res.data);
};

const addTodo = async(text, setText, setTodos)=>{
    await axios.post(baseURL, {item:text})
        setText("");
        getTodos(setTodos);
};

const updateTodo = async(todoId, setIsUpdaing, text, setText, setTodos)=>{
    await axios.put(baseURL, {_id: todoId, item:text});
        setText("");
        setIsUpdaing(false);
        getTodos(setTodos);
};

const deleteTodo = async(_id, setTodos)=>{
    await axios.delete(baseURL, {data:{_id}});
    getTodos(setTodos);
};

export {getTodos, addTodo,  deleteTodo, updateTodo};