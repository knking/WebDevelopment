import React from "react";
import Header from "../others/Header";

function AdminDashboard() {
  return (
    <div className="h-full w-full p-10">
      <Header />
      <div>
        <form action="">
          <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="Make a ui design" />
          </div>

          <div>
            <h3>description</h3>
            <textarea
              name="textarea"
              id="textarea"
              rows={10}
              cols={30}
            ></textarea>
          </div>

          <div>
            <h3>Date</h3>
            <input type="date" name="date" id="" />
          </div>

          <div>
            <h3>Assin To</h3>
            <input type="text" placeholder="Employye name" />
          </div>

          <div>
            <h3>Category</h3>
            <input type="text" placeholder="design,dev,etc" />
          </div>
          
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
