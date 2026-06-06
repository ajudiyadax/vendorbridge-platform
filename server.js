const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/api/dashboard', (req, res) => {
  res.json({
    cards: {
      activeRFQs: 25,
      pendingApprovals: 8,
      purchaseOrders: 42,
      invoices: 31
    },
    recent: [
      { rfq: 'Laptops Purchase', vendor: 'ABC Pvt Ltd', status: 'Approved' },
      { rfq: 'Networking Equipment', vendor: 'XYZ Solutions', status: 'Pending' },
      { rfq: 'Software License', vendor: 'TechSoft', status: 'Completed' }
    ]
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.listen(port, () => {
  console.log(`VendorBridge demo server listening at http://localhost:${port}`);
});
