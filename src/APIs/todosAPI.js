export const loadTodosFromAPI = () => {
	return fetch('http://localhost:3000/todos')
};

  //apiにpost（ToDoを追加）
export const postTodoToAPI = (id, content) => {
    return fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id': id,
            'content': content,
            'completed': false
        })
    })
    //.then(res => res.json());
};

  // apiにput（chenkboxが押された時にccompletedのtrue/falseを切り替える）
export const putTodoToAPI = (id, content, completed) => {
    return fetch('http://localhost:3000/todos/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id': id,
            'content': content,
            'completed': !completed
        })
    })
    //.then(res => res.json());
};

//apiからdelete
export const deleteTodoFromAPI = id => {
    return fetch('http://localhost:3000/todos/' + id, {
        method: 'DELETE'
    })
    //.then(res => res.json());
};