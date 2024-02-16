const wait = () => new Promise(res => setTimeout(res, 20))

export const fetchTodos = async () => {
  console.log('fetch todos!!')
  await wait()
  return [
    { id: 1, text: '1111111', completed: true },
    { id: 2, text: '222222', completed: false },
    { id: 3, text: '333333', completed: false }
  ]
}

export const saveTodos = async (todos: any[]) => {
  await wait()
  return []
}