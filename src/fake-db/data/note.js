import mock from '@/fake-db/mock.js'

// Contact
const NotesDb = {
    allNotes: [
        {
            id: 1,
            title: 'Meeting With Kelly',
            text:
                'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus',
            color: 'info lighten-4'
        },
        {
            id: 2,
            title: 'Meeting With Jhon',
            text:
                'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus',
            color: 'success lighten-4'
        },
        {
            id: 3,
            title: 'Meeting With Kelly',
            text:
                'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus',
            color: 'warning lighten-4'
        },
        {
            id: 4,
            title: 'Meeting With Jhon',
            text:
                'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus',
            color: 'purple lighten-4'
        },
        {
            id: 5,
            title: 'Meeting With Jhon',
            text:
                'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus',
            color: 'danger lighten-4'
        }
    ]
}

// GET: Fetch Todos
mock.onGet('/api/notes').reply(() => {
    const response = NotesDb.allNotes
    return [200, response]
})
mock.onPost('/api/notes/add').reply((response) => {
    let note = JSON.parse(response.data).data
    let task = NotesDb.allNotes.push({
        title: note.title,
        text: note.text,
        color: note.color.hex
    })

    return [200, task]
})
mock.onPost('/api/notes/delete').reply((response) => {
    let note = JSON.parse(response.data)
    console.log(note.id)
    NotesDb.allNotes = NotesDb.allNotes.filter((x) => x.id !== note.id)

    return [200, note]
})
