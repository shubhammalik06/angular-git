import { counterReducer } from "src/app/counter/state/counter.reducer";
import { AuthReducer } from "src/app/login/state/auth.reducer";
import { AuthState } from "src/app/login/state/auth.state";
import { postReducer } from "src/app/posts/state/posts.reducer";
import { CounterState, PostsState, SharedState } from "../interfaces/common.interface";
import { SharedReducer } from "../shared.reducer";
import { SHARED_STATE_NAME } from "../shared.selector";

export interface AppState{
    counter : CounterState,
    posts : PostsState,
    AUTH_STATE_NAME : AuthState,
    [SHARED_STATE_NAME] : SharedState
}

export const appReducer = {
    counter : counterReducer,
    post : postReducer,
    authReducer : AuthReducer,
    [SHARED_STATE_NAME] : SharedReducer
}