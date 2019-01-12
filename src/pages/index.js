import Login from "./Auth/Login";
import Posts from "./Posts";
import PostsReducer from "./Posts/reducer";

export const login = { component: Login };
export const posts = { component: Posts, reducer: PostsReducer };
