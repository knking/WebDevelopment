
const employee = 
       
    [
        {
          "id": 1,
          "email": "employee1@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Complete Project Report",
              "description": "Finalize and submit the project report to the manager.",
              "date": "2025-03-25",
              "category": "Work",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Update Client Database",
              "description": "Add new client entries and update existing records.",
              "date": "2025-03-27",
              "category": "Data Entry",
              "active": false,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 2,
          "email": "employee2@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Fix Website Bugs",
              "description": "Identify and resolve UI issues on the company website.",
              "date": "2025-03-24",
              "category": "Development",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Prepare Presentation",
              "description": "Create slides for the upcoming client meeting.",
              "date": "2025-03-26",
              "category": "Presentation",
              "active": false,
              "new_task": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Schedule Team Meeting",
              "description": "Coordinate with team members and finalize meeting timing.",
              "date": "2025-03-28",
              "category": "Management",
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false
            }
          ]
        },
        {
          "id": 3,
          "email": "employee3@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Review Budget Proposal",
              "description": "Analyze the new budget proposal for the next quarter.",
              "date": "2025-03-30",
              "category": "Finance",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Conduct Code Review",
              "description": "Review code submitted by junior developers.",
              "date": "2025-03-31",
              "category": "Development",
              "active": false,
              "new_task": false,
              "completed": false,
              "failed": true
            },
            {
              "title": "Update Security Policies",
              "description": "Revise and update the organization's security protocols.",
              "date": "2025-04-01",
              "category": "IT Security",
              "active": false,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 4,
          "email": "employee4@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Train New Employees",
              "description": "Conduct orientation for newly joined employees.",
              "date": "2025-03-29",
              "category": "HR",
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false
            },
            {
              "title": "Design Marketing Campaign",
              "description": "Develop a new digital marketing strategy for social media.",
              "date": "2025-03-25",
              "category": "Marketing",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Prepare Sales Report",
              "description": "Compile the monthly sales data and create an analysis report.",
              "date": "2025-04-02",
              "category": "Sales",
              "active": false,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 5,
          "email": "employee5@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Conduct User Research",
              "description": "Gather user feedback for the new product launch.",
              "date": "2025-03-27",
              "category": "User Research",
              "active": false,
              "new_task": false,
              "completed": false,
              "failed": true
            },
            {
              "title": "Develop Training Module",
              "description": "Create an interactive training program for new hires.",
              "date": "2025-03-28",
              "category": "Training",
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Optimize Database Queries",
              "description": "Improve the efficiency of SQL queries in the system.",
              "date": "2025-04-03",
              "category": "Database",
              "active": false,
              "new_task": true,
              "completed": false,
              "failed": false
            }
          ]
        }
      ]
      


const admin = [
    {
        "id": 1,
    "email": "admin@example.com",
    "password": "123"
    }
]

export const setLocalStorage = () =>{
    localStorage.setItem('Employee', JSON.stringify(employee))
    localStorage.setItem('Admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
const employeeData = JSON.parse(localStorage.getItem('Employee'))
const adminData = JSON.parse(localStorage.getItem('Admin'))

return {employeeData, adminData}
}