window.addEventListener('load', () => {

	//get Form from html using its id and store it in form variable
	const form = document.querySelector("#new-task-form");
	//get input field from html using its id and store it in input variable
	const input = document.querySelector("#new-task-input");
	// get task div using its id and store it in list_element or list_el variable
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {

        
		e.preventDefault(); //it prevents whole page to reload


		
		
		//store the value of input field  that user enter to task 
		const task = input.value; 
		
		if(!task)
		{
			alert("please enter a task");
			return;
		}

		

		//creating a div using create element and add task value in it 

		const task_el = document.createElement('div');
		task_el.classList.add('task');



		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		//creating input field for the task content 
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');  //set type text input field
		task_input_el.type = 'text';  
		task_input_el.value = task; //get value of task(user Input) above and store here 
		task_input_el.setAttribute('readonly', 'readonly'); //set readonly to input field

		task_content_el.appendChild(task_input_el);  //create child div


		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		//create element button for edit task 
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit'; 

		//create element button for delete task 

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		//creating child of edit button for other task field
		task_actions_el.appendChild(task_edit_el);

		//creating child of delete buttons for other task field
		task_actions_el.appendChild(task_delete_el);

		

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);    //main parent list_el than child task_actions_el (delete and edit buttons)

		input.value = '';

		//if user click on edit button  the button text change to save and input field text converted into lower case
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly"); //readonly attribute in list is removed
				task_input_el.focus();
			} else {
				//else readonly attribute is set and button is edit
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});


		//if user clicks on delete button that input field will be deleted
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});









































