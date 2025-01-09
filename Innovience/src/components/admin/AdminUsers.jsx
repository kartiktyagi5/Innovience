import React from 'react';
import { Search, Edit, Trash } from 'lucide-react';
import './AdminUsers.css';

const AdminUsers = () => {
  return (
    <div className="admin-users">
      <header className="users-header">
        <h1>User Management</h1>
        <div className="search-bar">
          <Search className="search-icon" />
          <input type="text" placeholder="Search users..." />
        </div>
      </header>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anupam</td>
              <td>Anupam@example.com</td>
              <td>Admin</td>
              <td><span className="status active">Active</span></td>
              <td>
                <div className="actions">
                  <button className="action-btn edit">
                    <Edit className="action-icon" />
                  </button>
                  <button className="action-btn delete">
                    <Trash className="action-icon" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Rohit</td>
              <td>rohit@gmail.com</td>
              <td>User</td>
              <td><span className="status inactive">Inactive</span></td>
              <td>
                <div className="actions">
                  <button className="action-btn edit">
                    <Edit className="action-icon" />
                  </button>
                  <button className="action-btn delete">
                    <Trash className="action-icon" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-btn">Previous</button>
        <button className="page-btn">Next</button>
      </div>
    </div>
  );
};

export default AdminUsers;