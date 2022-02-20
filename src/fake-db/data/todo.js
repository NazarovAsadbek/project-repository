import mock from "@/fake-db/mock.js"

// Contact
const TodoDB = {
  tasks: [
    {
      "id": 10,
      "title": "Refactor Code",
      "desc": "Pie liquorice wafer cotton candy danish. Icing topping jelly-o halvah pastry lollipop.",
      "isImportant": true,
      "select": false,
      "isStarred": false,
      "tags": ["doc", "backend"],
      "avatar": require("@/assets/images/faces/1.jpg"),
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 11,
      "title": "Submit Report",
      "desc": "Donut tart toffee cake cookie gingerbread. Sesame snaps brownie sugar plum candy canes muffin cotton candy.",
      "isImportant": false,
      "select": false,
      "isStarred": true,
      "tags": ["frontend", "doc"],
      "avatar": require("@/assets/images/faces/2.jpg"),
      "isCompleted": false,
      "isTrashed": false
    },
   
  ],
  taskTags: [
    { id: 5,text: 'Frontend' ,value : 'frontend', color: 'primary' },
    { id: 7,text: 'Backend', value: 'backend', color: 'warning'},
    { id: 8,text: 'Doc', value: 'doc', color: 'success'},
    { id: 11,text: 'Bug', value: 'bug', color: 'danger' },
  ]
}



// GET: Fetch Todos
mock.onGet("/api/todo/").reply(() => {
  const response = TodoDB.tasks;
  return [200, response]
})

// POST : Add new Tasks
mock.onPost("/api/todo/add").reply((config) => {

  // Get task from post data
  let task = JSON.parse(config.data).data
  let response = TodoDB.tasks.push({
    id: Math.random(),
    title: task.taskName,
    note: task.msg,
    tags: task.items
  })
  // console.log(task,TodoDB.tasks, 'backend');
  return [201, response]
})

// delete todo 
mock.onPost("/api/todo/delete").reply((config) => {
  let {id} = JSON.parse(config.data)
  
  TodoDB.tasks = TodoDB.tasks.filter( todo => todo.id !== id )
  console.log(TodoDB.tasks)

  return [200, id];
});

// POST: Update Task
mock.onPost("/api/todo/update").reply((request) => {
  
  let { todo } = JSON.parse(request.data)
  // console.log(todo);
  TodoDB.tasks.map((t, index) => {
    if (t.id === todo.id) {
      TodoDB.tasks[index] = { ...todo };
    }
    return "dummy value";
  });
  

  return [200, todo]
})
