import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState('Code')
  const onFormSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({
      text: text,
      category: category,
    })
    setText("");
    setCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={onFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category"  onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category)=> (
            <option
            key={category}>
              {category}
            </option>
          )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;