// storing input to local storage
function myfunc(event) {
    event.preventDefault()
    const expense = event.target.expense.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    
    const myObj = {
        expense,
        description,
        category
    }
    localStorage.setItem(myObj.category,JSON.stringify(myObj));
    
    RegisteredExpenses(myObj)
}
// getting data from local storage.

window.addEventListener("DOMContentLoaded", () => {
    
    const localStoragemyObj = localStorage;
    const localStorageKeys = Object.keys(localStoragemyObj);

    for(var i = 0; i < localStorageKeys.lenght; i++){
      const key = localStorageKeys[i]
      const ExpenseDetailsString = localStoragemyObj[key];
      const ExpenseDetailsmyObj = JSON.parse(ExpenseDetailsString);
      RegisteredExpenses(ExpenseDetailsmyObj)
    }
 })
// displaying data

function RegisteredExpenses(user)
{
    const mainElement = document.getElementById('ExpenseList');
    const HtmlInput = `<li id=${user.category}>${user.expense}-${user.description}-${user.category}
    <button onclick = deleteItem('${user.category}')>Delete Item</button>
    <button onclick = EditItem('${user.expense}','${user.description}','${user.category}')>Edit Item</button>
    </li>`
    
    mainElement.innerHTML = mainElement.innerHTML + HtmlInput
 
}
// edit item 

function EditItem(category,expense,description){
    document.getElementById('category').value =category;
    document.getElementById('expense').value = expense;
    document.getElementById('description').value = description;
    
    deleteItem(category)
}
//delete item

function deleteItem(category){
    console.log(category)
    localStorage.removeItem(category)
    removeListFromScreen(category)
}
function removeListFromScreen(category){
    const mainElement=document.getElementById("ExpenseList")
    const childNodeToBeDeleted=document.getElementById(category)
    mainElement.removeChild(childNodeToBeDeleted);

}