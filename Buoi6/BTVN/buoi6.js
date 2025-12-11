let todoList = []
while (true) {
    let choice = prompt("---MENU---:\n1: Thêm công việc\n2: Xem danh sách công việc\n3: Sửa công việc\n4: Xóa công việc\n5: Thoát\nNhập lựa chọn của bạn:")
    let check3 = false
    switch (choice) {
        case "1":
            let job = prompt("Nhập công việc của bạn: ")
            todoList.push(job)
            break;
        case "2":
            if(todoList.length==0){
                alert("Danh sách công việc trống!!!")
            }
            else{
                let message = ``;
                for (let i = 0;i<todoList.length;i++){
                    message += `${i+1}. ${todoList[i]}\n`
                    
                }
                alert(message)
            }
            break
        case "3":
            let search = prompt("Nhập công việc bạn cần chỉnh sửa: ")
            let check = false
            for(let j =0;j<todoList.length;j++){
                if(search==todoList[j]){
                    let fix = prompt("Nhập công việc mới: ")
                    todoList[j]=fix;
                    check = true
                }
            }
            if(check==false){
                alert("Không tìm thấy công việc cần sửa!!!")
            }
            break
        case "4":
            let remove = prompt("Nhập tên công việc cần xóa: ")
            let check1 = false
            for(let x of todoList){
                if(x==remove){
                    check1 = true
                }
            }
            if(check1 == true){
                todoList = todoList.filter(item => item !== remove)
            }
            else{
                alert("Không tìm được công việc cần xóa!!!")
            }
            break
        case "5":
            check3 = true
            break
        default:
            alert("Lựa chọn sai, vui lòng chọn lại!!!")
        
    }
    if(check3){
        break
    }
}

