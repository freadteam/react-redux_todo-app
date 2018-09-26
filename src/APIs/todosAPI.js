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
            'checked': false
        })
    })
    //.then(res => res.json());
};

  // apiにput（chenkboxが押された時にcheckedのtrue/falseを切り替える）
export const putTodoToAPI = ({id: id, content: content, checked: checked}) => {
    return fetch('http://localhost:3000/todos/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id': id,
            'content': content,
            'checked': !checked
        })
    })
    //.then(res => res.json());
};

//apiからdelete
export const  deleteTodoFromAPI = id => {
    return fetch('http://localhost:3000/todos/' + id, {
        method: 'DELETE'
    })
    //.then(res => res.json());
};