import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function AxiosComponent() {
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('useeffect');
  }, [idFromButtonClick]);

  return (
    <div>
      <h1>Data from API</h1>
      <p>{post?.title}</p>
      <input
        type='text'
        value={id}
        onChange={(event: any) => {
          setId(event.target.value);
        }}
      />
      <button onClick={() => setIdFromButtonClick(id)}>Send request</button>
    </div>
  );
}

export default AxiosComponent;
