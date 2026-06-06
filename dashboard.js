import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>VendorBridge</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>👥 Vendors</li>
          <li>📄 RFQ</li>
          <li>💰 Quotations</li>
          <li>✅ Approvals</li>
          <li>🛒 Purchase Orders</li>
          <li>🧾 Invoices</li>
          <li>📊 Analytics</li>
        </ul>
      </div>

      <div className="main">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Active RFQs</h3>
            <p>25</p>
          </div>

          <div className="card">
            <h3>Pending Approvals</h3>
            <p>8</p>
          </div>

          <div className="card">
            <h3>Purchase Orders</h3>
            <p>42</p>
          </div>

          <div className="card">
            <h3>Invoices</h3>
            <p>31</p>
          </div>

        </div>

        <div className="recent">

          <h2>Recent Activities</h2>

          <table>
            <thead>
              <tr>
                <th>RFQ</th>
                <th>Vendor</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Laptops Purchase</td>
                <td>ABC Pvt Ltd</td>
                <td>Approved</td>
              </tr>

              <tr>
                <td>Networking Equipment</td>
                <td>XYZ Solutions</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>Software License</td>
                <td>TechSoft</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;