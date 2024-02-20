const wait = () => new Promise(res => setTimeout(res, 20))

export const fetchTodos = async () => {
  console.log('fetch todos!!')
  await wait()
  return [
    { id: 1, text: '밥먹기', completed: true },
    { id: 2, text: '공부하기', completed: false },
    { id: 3, text: '운동하기', completed: false }
  ]
}


/**
 * 기능 없음.
 */
export const saveTodos = async (todos: any[]) => {
  await wait()
  return []
}