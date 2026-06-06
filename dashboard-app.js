// Simple client script to fetch dashboard data and populate the page
async function initDashboard() {
  let data = null;
  // Try API first (Node server), fall back to static JSON for simple hosting
  try {
    const res = await fetch('/api/dashboard');
    if (res.ok) data = await res.json();
  } catch (e) {
    // ignore and try static
  }

  if (!data) {
    try {
      const res2 = await fetch('dashboard-data.json');
      if (res2.ok) data = await res2.json();
    } catch (e) {
      console.error('No dashboard data available', e);
    }
  }

  if (!data) return;

  document.getElementById('active-rfqs').textContent = data.cards.activeRFQs;
  document.getElementById('pending-approvals').textContent = data.cards.pendingApprovals;
  document.getElementById('purchase-orders').textContent = data.cards.purchaseOrders;
  document.getElementById('invoices').textContent = data.cards.invoices;

  const tbody = document.querySelector('#recent-table tbody');
  tbody.innerHTML = '';
  data.recent.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${escapeHtml(r.rfq)}</td><td>${escapeHtml(r.vendor)}</td><td>${escapeHtml(r.status)}</td>`;
    tbody.appendChild(tr);
  });
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]);
}

window.addEventListener('DOMContentLoaded', initDashboard);
