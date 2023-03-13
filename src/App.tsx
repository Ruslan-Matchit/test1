import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';

import { ADD_TODO, ALL_TODOS } from './apollo/todos';
import './App.scss';

type Todos = {
  id: number,
  title: string;
  completed: boolean;
};

const App = () => {
  const [title, setTitle] = useState('');
  const [addTodo] = useMutation(ADD_TODO);
  const { loading, data } = useQuery(ALL_TODOS);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSubmite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo({
      variables: {
        title,
        userId: 123,
        completed: false,
      },
    });

    setTitle('');
  };

  return (
    <div className="App">
      test1
      <form onSubmit={handleSubmite}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value.trimStart())}
        />
        <button type="submit">Add Todo</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Conpleted</th>
          </tr>
        </thead>
        <tbody>
          {
            data.allPosts.map((post: Todos) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={post.completed}
                    readOnly
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;
