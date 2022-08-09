// import ADD_TODO  from './const'
export const addTodo = (payload) => {
    return {
        type:'ADD_TODO',
        payload,
    }
}