const navData = [
    {
      "title": "Dashboard",
      "icon": "dashboard",
      "path": "/dashboard"
    },
    {
      "title": "Users",
      "icon": "users",
      "path": "/users",
      "submenu": [
        { "title": "All Users", "path": "/users/all" },
        { "title": "Add User", "path": "/users/add" },
        { "title": "User Roles", "path": "/users/roles" }
      ]
    },
    {
      "title": "Settings",
      "icon": "settings",
      "path": "/settings",
      "submenu": [
        { "title": "Profile", "path": "/settings/profile",
          "submenu":[
            {
              "title":"city",
              
            }

           
          ]
         },
        { "title": "Preferences", "path": "/settings/preferences" },
        { "title": "Security", "path": "/settings/security" }
      ]
    },
    {
      "title": "Reports",
      "icon": "bar-chart",
      "path": "/reports",
      "submenu": [
        { "title": "Sales", "path": "/reports/sales" },
        { "title": "Users", "path": "/reports/users" },
        { "title": "Traffic", "path": "/reports/traffic" }
      ]
    },
    {
      "title": "Help",
      "icon": "help-circle",
      "path": "/help"
    }
  ]
  
  export  default navData