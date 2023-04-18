const apiUrl = 'https://63c61ff54ebaa802853ff786.mockapi.io/api/todoList'
let todoArr = []

function $(selector) {
    return document.querySelector(selector)
}
async function fetchData() {
    const { data } = await axios.get(apiUrl)
    return data
}

function todoItem(item){
    const div_item = document.createElement('div')
    div_item.className = 'todo-item'
    div_item.id = item.id
    div_item.draggable = true
    const div_content = document.createElement('div')
    div_content.className = 'todo-content'
    const div_contentTop = document.createElement('div')
    div_contentTop.className = 'todo-content__top'

    const div_contentTopLeft = document.createElement('div')
    div_contentTopLeft.className = 'todo-content__top-left'
        const category = document.createElement('div')
        category.className = 'category'
        category.innerText = item.category
        const title = document.createElement('div')
        title.className = 'title'
        title.innerText = item.title

    const div_contentTopRight = document.createElement('div')
    div_contentTopRight.className = 'todo-content__top-right'
        const pen = document.createElement('iconify-icon')
        pen.icon = 'ep:edit-pen'
        pen.width = '24'
        pen.height = '24'
        pen.style.cursor = 'pointer'
        pen.addEventListener('click', function(e){
            $('.popup__edit').classList.add('active')
            $('.popup__edit').id = e.target.parentElement.parentElement.parentElement.parentElement.id
            const id = e.target.parentElement.parentElement.parentElement.parentElement.id
            const item = todoArr.find(item => item.id == id)
            $('.edit-category').value = item.category
            $('.edit-title').value = item.title
            $('.edit-content').value = item.content
            if(item.status == 'todo'){
                $('.todo-value').checked = true
            }
            else if(item.status == 'doing'){
                $('.doing-value').checked = true
            }
            else{
                $('.finished-value').checked = true
            }
        })



        
        const trash = document.createElement('iconify-icon')
        trash.icon = 'iconoir:trash'
        trash.width = '24'
        trash.height = '24'
        trash.style.cursor = 'pointer'
        trash.id = item.id
        trash.onclick = async function (e) {
            const id = e.target.id
            console.log(id)
            const res = await axios.delete(`${apiUrl}/${id}`)
            if (res.status == 200) {
                todoArr.map(item =>{
                    if (item.id == id) {
                        todoArr.splice(todoArr.indexOf(item), 1)
                    }
                })
                $('.todo-list').innerHTML = ''
                showTodoItems(todoArr)
                e.target.parentElement.parentElement.parentElement.parentElement.remove()
            } else {
                alert('fail')
            }
        }
    const div_contentBottom = document.createElement('div')
    div_contentBottom.className = 'todo-content__bottom'
        const line = document.createElement('div')
        line.className = 'line'
        const substance = document.createElement('div')
        substance.className = 'substance'
        substance.innerText = item.content
        const calendar = document.createElement('div')
        calendar.className = 'calendar'
        const clock3 = document.createElement('iconify-icon')
        clock3.icon = 'tabler:clock-hour-3'
        clock3.width = '16'
        clock3.height = '16'
        clock3.style = 'color: #5a5c63;'
        const time = document.createElement('div')
        time.className = 'time'
        time.innerText = item.time
    
    div_contentTopLeft.appendChild(category)
    div_contentTopLeft.appendChild(title)
    div_contentTopRight.appendChild(pen)
    div_contentTopRight.appendChild(trash)
    div_contentTop.appendChild(div_contentTopLeft)
    div_contentTop.appendChild(div_contentTopRight)
    div_contentBottom.appendChild(line)
    div_contentBottom.appendChild(substance)
    div_contentBottom.appendChild(calendar)
    calendar.appendChild(clock3)
    calendar.appendChild(time)
    div_content.appendChild(div_contentTop)
    div_content.appendChild(div_contentBottom)
    div_item.appendChild(div_content)
    return div_item
}

function doingItem(item){
    const div_item = document.createElement('div')
    div_item.className = 'todo-item'
    div_item.id = item.id
    div_item.draggable = true
    const div_content = document.createElement('div')
    div_content.className = 'todo-content'
    const div_contentTop = document.createElement('div')
    div_contentTop.className = 'todo-content__top'

    const div_contentTopLeft = document.createElement('div')
    div_contentTopLeft.className = 'todo-content__top-left'
        const category = document.createElement('div')
        category.className = 'category'
        category.innerText = item.category
        const title = document.createElement('div')
        title.className = 'title'
        title.innerText = item.title

    const div_contentTopRight = document.createElement('div')
    div_contentTopRight.className = 'todo-content__top-right'
        const pen = document.createElement('iconify-icon')
        pen.icon = 'ep:edit-pen'
        pen.width = '24'
        pen.height = '24'
        pen.style.cursor = 'pointer'
        pen.addEventListener('click', function(e){
            $('.popup__edit').classList.add('active')
            $('.popup__edit').id = e.target.parentElement.parentElement.parentElement.parentElement.id
            const id = e.target.parentElement.parentElement.parentElement.parentElement.id
            const item = todoArr.find(item => item.id == id)
            $('.edit-category').value = item.category
            $('.edit-title').value = item.title
            $('.edit-content').value = item.content
            if(item.status == 'todo'){
                $('.todo-value').checked = true
            }
            else if(item.status == 'doing'){
                $('.doing-value').checked = true
            }
            else{
                $('.finished-value').checked = true
            }
        })






        const trash = document.createElement('iconify-icon')
        trash.icon = 'iconoir:trash'
        trash.width = '24'
        trash.height = '24'
        trash.style.cursor = 'pointer'
        trash.id = item.id
        trash.onclick = async function (e) {
            const id = e.target.id
            console.log(id)
            const res = await axios.delete(`${apiUrl}/${id}`)
            if (res.status == 200) {
                todoArr.map(item =>{
                    if (item.id == id) {
                        todoArr.splice(todoArr.indexOf(item), 1)
                    }
                })
                $('.todo-list').innerHTML = ''
                showTodoItems(todoArr)
                e.target.parentElement.parentElement.parentElement.parentElement.remove()
            } else {
                alert('fail')
            }
        }
    const div_contentBottom = document.createElement('div')
    div_contentBottom.className = 'todo-content__bottom'
        const line = document.createElement('div')
        line.className = 'line'
        const substance = document.createElement('div')
        substance.className = 'substance'
        substance.innerText = item.content
        const calendar = document.createElement('div')
        calendar.className = 'calendar'
        const clock3 = document.createElement('iconify-icon')
        clock3.icon = 'tabler:clock-hour-3'
        clock3.width = '16'
        clock3.height = '16'
        clock3.style = 'color: #5a5c63;'
        const time = document.createElement('div')
        time.className = 'time'
        time.innerText = item.time
    
    div_contentTopLeft.appendChild(category)
    div_contentTopLeft.appendChild(title)
    div_contentTopRight.appendChild(pen)
    div_contentTopRight.appendChild(trash)
    div_contentTop.appendChild(div_contentTopLeft)
    div_contentTop.appendChild(div_contentTopRight)
    div_contentBottom.appendChild(line)
    div_contentBottom.appendChild(substance)
    div_contentBottom.appendChild(calendar)
    calendar.appendChild(clock3)
    calendar.appendChild(time)
    div_content.appendChild(div_contentTop)
    div_content.appendChild(div_contentBottom)
    div_item.appendChild(div_content)
    return div_item
}
function finishedItem(item){
    const div_item = document.createElement('div')
    div_item.className = 'todo-item'
    div_item.id = item.id
    div_item.draggable = true
    const div_content = document.createElement('div')
    div_content.className = 'todo-content'
    const div_contentTop = document.createElement('div')
    div_contentTop.className = 'todo-content__top'

    const div_contentTopLeft = document.createElement('div')
    div_contentTopLeft.className = 'todo-content__top-left'
        const category = document.createElement('div')
        category.className = 'category'
        category.innerText = item.category
        const title = document.createElement('div')
        title.className = 'title'
        title.innerText = item.title

    const div_contentTopRight = document.createElement('div')
    div_contentTopRight.className = 'todo-content__top-right'
        const pen = document.createElement('iconify-icon')
        pen.icon = 'ep:edit-pen'
        pen.width = '24'
        pen.height = '24'
        pen.style.cursor = 'pointer'
        pen.addEventListener('click', function(e){
            $('.popup__edit').classList.add('active')
            $('.popup__edit').id = e.target.parentElement.parentElement.parentElement.parentElement.id
            const id = e.target.parentElement.parentElement.parentElement.parentElement.id
            const item = todoArr.find(item => item.id == id)
            $('.edit-category').value = item.category
            $('.edit-title').value = item.title
            $('.edit-content').value = item.content
            if(item.status == 'todo'){
                $('.todo-value').checked = true
            }
            else if(item.status == 'doing'){
                $('.doing-value').checked = true
            }
            else{
                $('.finished-value').checked = true
            }
        })



        
        const trash = document.createElement('iconify-icon')
        trash.icon = 'iconoir:trash'
        trash.width = '24'
        trash.height = '24'
        trash.style.cursor = 'pointer'
        trash.id = item.id
        trash.onclick = async function (e) {
            const id = e.target.id
            console.log(id)
            const res = await axios.delete(`${apiUrl}/${id}`)
            if (res.status == 200) {
                todoArr.map(item =>{
                    if (item.id == id) {
                        todoArr.splice(todoArr.indexOf(item), 1)
                    }
                })
                $('.todo-list').innerHTML = ''
                showTodoItems(todoArr)
                e.target.parentElement.parentElement.parentElement.parentElement.remove()
            } else {
                alert('fail')
            }
        }
    const div_contentBottom = document.createElement('div')
    div_contentBottom.className = 'todo-content__bottom'
        const line = document.createElement('div')
        line.className = 'line'
        const substance = document.createElement('div')
        substance.className = 'substance'
        substance.innerText = item.content
        const calendar = document.createElement('div')
        calendar.className = 'calendar'
        const clock3 = document.createElement('iconify-icon')
        clock3.icon = 'tabler:clock-hour-3'
        clock3.width = '16'
        clock3.height = '16'
        clock3.style = 'color: #5a5c63;'
        const time = document.createElement('div')
        time.className = 'time'
        time.innerText = item.time
    
    div_contentTopLeft.appendChild(category)
    div_contentTopLeft.appendChild(title)
    div_contentTopRight.appendChild(pen)
    div_contentTopRight.appendChild(trash)
    div_contentTop.appendChild(div_contentTopLeft)
    div_contentTop.appendChild(div_contentTopRight)
    div_contentBottom.appendChild(line)
    div_contentBottom.appendChild(substance)
    div_contentBottom.appendChild(calendar)
    calendar.appendChild(clock3)
    calendar.appendChild(time)
    div_content.appendChild(div_contentTop)
    div_content.appendChild(div_contentBottom)
    div_item.appendChild(div_content)
    return div_item
}

function filteredAllItems(items) {
    const todoItems = items.filter(item => item.status === 'todo')
    const doingItems = items.filter(item => item.status === 'doing')
    const finishedItems = items.filter(item => item.status === 'finished')
    return [todoItems, doingItems, finishedItems]
}

function showTodoItems(items) {
    const todoList = $('.todo-list')
    const [todoItems, doingItems, finishedItems] = filteredAllItems(items)
    todoItems.map(item => {
        todoList.appendChild(todoItem(item))
    })
    const number = todoItems.length
    $('.todo-count').innerText = number
}
function showDoingItems(items) {
    const doingList = $('.doing-list')
    const [todoItems, doingItems, finishedItems] = filteredAllItems(items)
    doingItems.map(item => {
        doingList.appendChild(doingItem(item))
    })
    const number = doingItems.length
    $('.doing-count').innerText = number
}
function showFinishedItems(items) {
    const finishedList = $('.finished-list')
    const [todoItems, doingItems, finishedItems] = filteredAllItems(items)
    finishedItems.map(item => {
        finishedList.appendChild(finishedItem(item))
    })
    const number = finishedItems.length
    $('.finished-count').innerText = number
}

async function main(){
    try{
        const items = await fetchData()
        todoArr = items
        showTodoItems(todoArr)
        showDoingItems(todoArr)
        showFinishedItems(todoArr)
       

    }
    catch(err){
        alert(err)
    }
    const draggables = document.querySelectorAll('.todo-item')
    let currentTarget = null
    draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function (e) {
        currentTarget = this
        console.log(currentTarget)
        })
    })
    const containers = document.querySelectorAll('.containers')
    
    containers.forEach(container => {
        container.addEventListener('dragover', function (e) {
            e.preventDefault()
        })
        container.addEventListener('drop', async function (e) {
            e.preventDefault()
            this.appendChild(currentTarget)
            const id = currentTarget.id
            const item = todoArr.find(item => item.id == id)
            if (this.classList.contains('todo-list')) {
                item.status = 'todo'
            }
            else if (this.classList.contains('doing-list')) {
                item.status = 'doing'
            }
            else {
                item.status = 'finished'
            }
                await axios.put(`${apiUrl}/${id}`, item)
                todoArr.map(item =>{
                    if (item.id == id) {
                        todoArr.splice(todoArr.indexOf(item), 1)
                        todoArr.push(item)
                    }
                })
                $('.todo-list').innerHTML = ''
                $('.doing-list').innerHTML = ''
                $('.finished-list').innerHTML = ''
                showTodoItems(todoArr)
                showDoingItems(todoArr)
                showFinishedItems(todoArr)  
        })
    })  
    
}

$('.new__task').addEventListener('click', () => {
    $('.popup').classList.add('active');
})
$('.close-btn').addEventListener('click', () => {
    $('.popup').classList.remove('active');
})
$('.edit__close-btn').addEventListener('click', () => {
    $('.popup__edit').classList.remove('active');
})
//  click outside to close popup
window.addEventListener('click', (e) => {
    if (e.target === $('.popup')) {
        $('.popup').classList.remove('active');
    }
})
window.addEventListener('click', (e) => {
    if (e.target === $('.popup__edit')) {
        $('.popup__edit').classList.remove('active');
    }
})
$('#my-form').addEventListener('submit',  async function (e) {
    e.preventDefault()
    const newCategory = $('.new-category').value
    const newTitle = $('.new-title').value
    const newContent = $('.new-content').value
    const data = {
        id: todoArr.length + 1,
        category: newCategory,
        title: newTitle,
        content: newContent,
        status: 'todo',
        time: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() 
    }
    try{
        await axios.post(apiUrl, data)
        todoArr.push(data)
        $('.new-category').value = ''
        $('.new-title').value = ''
        $('.new-content').value = ''
        $('.todo-list').innerHTML = ''
        $('.popup').classList.remove('active');
        showTodoItems(todoArr)
    }
    catch(err){
        alert(err)
    }
})
$('#my-form__edit').addEventListener('submit',  async function (e) {
    e.preventDefault()
    const editId = $('.popup__edit').id
    console.log(editId)
    const editCategory = $('.edit-category').value
    const editTitle = $('.edit-title').value
    const editContent = $('.edit-content').value
    const editStatus = $("input[type='radio'][name='options']:checked").value
    const data = {
        id: editId,
        category: editCategory,
        title: editTitle,
        content: editContent,
        status: editStatus,
        time: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    }
    try{
        await axios.put(`${apiUrl}/${editId}`, data)
        todoArr.map(item =>{
            if (item.id == editId) {
                todoArr.splice(todoArr.indexOf(item), 1, data)
            }
        })
        $('.edit-category').value = ''
        $('.edit-title').value = ''
        $('.edit-content').value = ''
        $('.todo-list').innerHTML = ''
        $('.doing-list').innerHTML = ''
        $('.finished-list').innerHTML = ''
        $('.popup__edit').classList.remove('active');
        showTodoItems(todoArr)
        showDoingItems(todoArr)
        showFinishedItems(todoArr)
    }
    catch(err){
        alert(err)
    }
})
// Drop and drag

main()