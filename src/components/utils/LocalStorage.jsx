import AdminDashboard from "../Dashboard/AdminDashboard";

// localStorage.clear();

const employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    firstName: "Arjun",
    tasks: [
      {
        title: "Complete Project Report",
        description: "Compile and finalize the Q3 project report.",
        date: "2024-10-31",
        categories: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Meeting with client for project feedback.",
        date: "2024-11-01",
        categories: "Client Relations",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare Presentation",
        description: "Create slides for upcoming product launch.",
        date: "2024-11-05",
        categories: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Sneha",
    tasks: [
      {
        title: "Weekly Team Meeting",
        description: "Review project updates and team progress.",
        date: "2024-10-31",
        categories: "Team Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Optimization",
        description: "Optimize database queries for faster processing.",
        date: "2024-11-03",
        categories: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Rajesh",
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Develop a campaign for the holiday season.",
        date: "2024-11-04",
        categories: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Sales Report",
        description: "Generate sales report for October.",
        date: "2024-10-30",
        categories: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Aditi",
    tasks: [
      {
        title: "System Maintenance",
        description: "Run routine maintenance on servers.",
        date: "2024-10-31",
        categories: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update Documentation",
        description: "Update system documentation for recent changes.",
        date: "2024-11-02",
        categories: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Vikram",
    tasks: [
      {
        title: "Customer Support",
        description: "Respond to customer queries and complaints.",
        date: "2024-10-31",
        categories: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Market Analysis",
        description: "Analyze trends for Q4.",
        date: "2024-11-10",
        categories: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

// Function to add task count summary to each employee
employees.forEach(employee => {
  const taskCount = {
    active: employee.tasks.filter(task => task.active).length,
    newTask: employee.tasks.filter(task => task.newTask).length,
    completed: employee.tasks.filter(task => task.completed).length,
    failed: employee.tasks.filter(task => task.failed).length
  };
  employee.taskCount = taskCount;
});

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  if (!employees || !admin) {
    console.log("Data not found in localStorage, setting default data.");
    setLocalStorage();  // Set data if not already present
    return getLocalStorage();  // Try to retrieve again
  }

  return { employees, admin };
};
