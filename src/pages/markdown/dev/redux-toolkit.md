---
title: Redux-Toolkit (with_React, Typescript)
date: "2020-11-09"
folder: "dev"
---

## 리덕스 툴킷

리덕스를 사용하는데 코드가 많이 길어지는 것이 많이 불편하기 때문에, 이를 좀더 간결하게 사용하기 위한 리덕스 라이브러리 입니다.

본문에서는 `createSlice` 만 이용하여 Redux에서 사용하는 `reducer, action, const TYPE` 등을 한번에 정의 하는 것을 알아볼 것 입니다.
여기서 나오는 글은 - [출처]( https://www.youtube.com/watch?v=9lCmbth63k0) 에서 본 것을 정리 하는 글 입니다.

---

#### 리덕스
 - 전역상태를 관리하기 위한 라이브러리
 
리덕스는 `type, state, action, reducer` 로 이루어져 있다. 
- `type` : 그냥 단순한 이름이라고 생각하면 된다.
보통 `const TODO_CREATE = "TODOS/CREATE"`
이런식으로 대문자를 사용해서 정의 해준다.
이렇게 따로 상수로 정의해주는 것은, 에디터의 자동완성을 통한 오류방지이다.

- `state` : 전역으로 관리하고 싶은 상태
- `action` : `dispatch`를 통해서 보내주는 것.

```ts
dispatch({type : TODO_CREATE, data : { title : '' }})
// 이런 식으로 객체 형식으로 생겼다. 
interface TodoCreateActionType {
    type : typeof SELECT_TODO;
    payload : { title : string };
}

export const todoCreateAction = ({ title } : { title : string }) : TodoCreateActionType => ({
        type : SELECT_TODO,
        payload : { title },
    })
```

- `reducer` : `action`이 들어왔을 때 `state` 를 정의하는 곳이다.

```ts
type todoActionTypes = CrateTodoActionTypes | DeleteActionType | EditTodoActionType | ToggleActionType;

 const todoReducer = (state : Todo[] = initialState, action : todoActionTypes) => {
    switch(action.type) {
        case CREATE_TODO : {
            const { payload } = action;
            return [...state, payload];
        }
        case EDIT_TODO : {
            const { payload } = action;
            return state.map(todo => todo.id === payload.id ? {...todo, desc : payload.desc } : todo );
        }
        case TOGGLE_TODO : {
            const { payload } = action;
            return state.map(todo => todo.id === payload.id ? {...todo, isComplete : payload.isComplete } : todo);
        }
        case DELETE_TODO : {
            const { payload } = action;
            return state.filter(todo => todo.id !== payload.id);
        }
        default : return state;
    }
}
```

 `state`는 초기값 을 `필수`로 정의해주어야 한다. 
 또한, return 값은 `immutable` 값을 갖는데,  
 `state = 1` 이런식으로 직접 정의 해주면 안된다. `state` 값은  __action이 이루어 지기전 상태값들을 갖고 있는데 그 값을 직접 바꾸지 않고 새로운 값을 보내주어야 한다.__ 
 
---

### 리덕스 툴킷

- `createSlice` 

```ts
const exampleSlice = createSlice({
   name : 'example', // 정의하고 싶은 명칭 
   initalState : { id }, 
   reducers : { // exampleSlice.reducer 로 접근 할 수 있다.
    newId : (state, action :PayloadAction<{ id : string }>) => {
      state.id = action.payload.id;
    }
     // newId => exampleSlice.actions.newId 로 접근 가능
     // newId의 type 은 exampleSlice.actions.newId.type
   }
})
```

리덕스 툴킷 `createSlice` 의 가장 큰 특징은, reudcer를 사용할 때, `mutable`하다는 것이다. `immer` 가 내부적으로 있어서 `state = state + 1` 이런식으로 상태를 변화 할수 있다는 것이다.


```ts
const todosSlice = createSlice({
    name : 'todos',
    initialState : todosInitialState,
    reducers : {
        create : {
            reducer: (state, { payload } : PayloadAction<{id : string; desc: string; isComplete : boolean; }>) => {
                state.push(payload);
            },
            prepare: ({ desc } : { desc : string; }) => ({
                payload : {
                    id : uuid(),
                    desc,
                    isComplete : false
                }
            })
        },
        edit : (state, { payload }: PayloadAction<{ id : string; desc : string; }>) => {
            const todoToEdit = state.find(todo => todo.id === payload.id);
            if(todoToEdit) todoToEdit.desc = payload.desc;
        },
        toggle : (state, { payload }:PayloadAction<{ id : string; }>) => {
            const todoToEdit = state.find(todo => todo.id === payload.id);
            if(todoToEdit) todoToEdit.isComplete = !todoToEdit.isComplete;
        },
        remove : (state, { payload }:PayloadAction<{ id : string; }> ) =>{
            const index = state.findIndex(todo => todo.id === payload.id);
            if(index !== -1) state.splice(index, 1);
        }
    }
})
```

`action` 안에서 `reducer`를 정의 해줄 수 있는데, 앞의 `create`의 예를 보면 `prepare` 로 상태를 변화하기 전에 먼저 `action`으로 부터 받은 값들을 바꿔서 `action의 reducer` 에게 값을 보내줄 수 있다. 

또한 `createSlice` 에는 `extraReducers` 가 있는데, 다른 `reducer` 에 있는 `type`을 함께 `공유`할 수 있다는 개념으로 생각된다.

```ts
const counterSlice = createSlice({
    name : 'counter',
    initialState : 0,
    reducers : {},
    extraReducers : {
        [todosSlice.actions.create.type] : state => state + 1,
      // reducer의 return 값은 state에 정의 되기 때문에 이렇게 해도 된다
        [todosSlice.actions.edit.type] : state => state + 1,
        [todosSlice.actions.toggle.type] : state => state +1,
        [todosSlice.actions.remove.type] : state => state +1,
    }
    // 다른 리듀서의 액션타입과 연동지어서 사용할 때.
})
```
다른 리듀서의 액션타입이 들어오면 `counterSlice` 는 그 액션타입을 함께 사용해서 자신의 state들을 정의 해줄 수 있는 것이다.

---
### 스토어 와 사용

 상위 컴포넌트에 뿌려주기 위해서 리덕스 store 를 만들어주려면 `configureStore` 를 사용해주면 된다.
 
```ts
import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
// const reducers = combineReducers({
//     todos : todosSlice.reducer,
//     selectedTodo : selectedTodoSlice.reducer,
//     counter : counterSlice.reducer,
// })
// redux-toolkit을 사용하면 combine 해주지 않아도
// 객체로 configurestore에 보내주면 알아서 해결해준다.

const reducers = {
    todos : todosSlice.reducer,
    selectedTodo : selectedTodoSlice.reducer,
    counter : counterSlice.reducer,
}

export default configureStore({
    reducer : reducers,
    middleware : [...getDefaultMiddleware (), logger],
  // getDefaultMiddleware -> devTools 같은거
    devTools : process.env.NODE_ENV !== 'production'
})
```

옛날 게시물을 보면 그냥 redux의 store를 사용했는데, redux-toolkit을 사용하면 combineReducer와 devtools를 따로 사용하지 않아도 알아서 해준다.

```ts
// redux-toolkit.ts

export const {
 create : createTodoActionCreator,
 edit : editTodoActionCreator,
 toggle : toggleTodoActionCreator,
 remove : deleteTodoActionCreator,
} = todosSlice.actions;
// export const createTodoActionCreator = todosSlice.actions.create
// 이런식으로 createSlice로 만든 reducer의 액션들을 
// todosSlice.actions.create로 접근해서 export 해준다. (dispatch 해주기 위해서)

```

```tsx
// app.tsx
  const dispatch = useDispatch();
  const todos = useSelector((state : State) => state.todos);
  const editedCount = useSelector((state : State) => state.counter);
  const selectedTodoId = useSelector((state : State) => state.selectedTodo);

  const handleDelete = (): void => {
    if (!selectedTodoId) return;
    dispatch(deleteTodoActionCreator({ id : selectedTodoId }))
  };
```

사용법은 리덕스 사용하듯이 하면 된다.