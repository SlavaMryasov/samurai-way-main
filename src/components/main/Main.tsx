import { useRef, useState } from "react";
import { Input } from "../../globalStyledComponents/input/Input";
import { Button } from "../../globalStyledComponents/button/Button";
import { v1 } from "uuid";
import { ProfilePageType } from "../../redux/state";

type MainPropsType = {
    data: ProfilePageType
};


const Main: React.FC<MainPropsType> = (props) => {
  const postsFromState = props.data.posts

  const inputRef = useRef<HTMLInputElement>(null);

  const [posts, setPosts] = useState(postsFromState);

  const addMessageButtonHandler = () => {
    if(inputRef.current){
        let newPost = { id: 5, message: inputRef.current.value, likesCount: 22 };
        setPosts([newPost, ...posts]);
        inputRef.current.value = ''
    }
  };

  return (
    <div>
      <Input inputRef={inputRef} />
      <Button name="Add post" id={v1()} onClick={addMessageButtonHandler} />
      <ul>
        {posts.map(post => <li>{post.message}</li>)}
      </ul>
    </div>
  );
};

export default Main;
