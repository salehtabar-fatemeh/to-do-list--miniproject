const taskInp = document.querySelector(".task-inp");
        const addBtn = document.querySelector(".add-btn");
        let list = document.querySelector(".list");
        const tasks = ["Read js", "Do homework"];
        function update(){
            list.innerHTML = " ";
            for(let i = 0; i<tasks.length; i++){
                list.innerHTML+= `<li><input type="checkbox">${tasks[i]}
                    <button onclick ="remove()">Delete task</button></li>`;
            }
        }
        update();
        function remove(indexOfItem){
            tasks.splice(indexOfItem, 1);
            update();
        }
        addBtn.addEventListener("click", ()=>{
            const tasksTittle = taskInp.value;
            tasks.push(tasksTittle);
            update();
            // taskInp.value = " ";
            taskInp.focus();
        })
