import React, { useState } from 'react';
import { Menu, X, ChevronDown, MapPin, Calendar, Users, BarChart3, Settings, LogOut, Bell, Search, Plus, Edit2, Trash2, Eye, ChevronRight, Clock, Phone, Mail, MapPinIcon, CheckCircle, AlertCircle, Camera, MapPinIcon as Location, Home } from 'lucide-react';

export default function ChungathCRMPrototype() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [userRole, setUserRole] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedHoarding, setSelectedHoarding] = useState(null);
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // SLDS Color Palette
  const colors = {
    primary: '#0070D2',
    primaryDark: '#003366',
    success: '#04844B',
    warning: '#FF9500',
    error: '#C23030',
    background: '#F3F3F3',
    border: '#D3D3D3',
    white: '#FFFFFF',
    darkText: '#080707',
    mediumText: '#565656',
    lightText: '#A4A4A4'
  };

  // ==================== LOGIN SCREEN ====================
  if (currentScreen === 'login') {
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: colors.primaryDark }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '400px', backgroundColor: colors.white, padding: '40px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: colors.primaryDark, marginBottom: '10px', textAlign: 'center' }}>Chungath CRM</h1>
            <p style={{ textAlign: 'center', color: colors.mediumText, marginBottom: '30px' }}>Salesforce-based Lead & Field Management</p>
            
            <input 
              type="email" 
              placeholder="Email Address" 
              style={{ width: '100%', padding: '10px', marginBottom: '15px', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '14px' }}
            />
            <input 
              type="password" 
              placeholder="Password" 
              style={{ width: '100%', padding: '10px', marginBottom: '20px', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '14px' }}
            />
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: '500', color: colors.darkText }}>Login As</label>
              <select 
                onChange={(e) => setUserRole(e.target.value)}
                style={{ width: '100%', padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '14px' }}
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager (Branch)</option>
                <option value="executive">Sales Executive</option>
                <option value="marketing">Marketing Executive</option>
              </select>
            </div>
            
            <button 
              onClick={() => {
                if (userRole) {
                  setCurrentScreen('dashboard');
                }
              }}
              style={{ 
                width: '100%', 
                padding: '12px', 
                backgroundColor: colors.primary, 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                opacity: userRole ? 1 : 0.6
              }}
            >
              Log In
            </button>
            
            <p style={{ textAlign: 'center', color: colors.lightText, marginTop: '20px', fontSize: '12px' }}>Demo: Select any role to explore the prototype</p>
          </div>
        </div>
      </div>
    );
  }

  // ==================== NAVIGATION SIDEBAR ====================
  const Sidebar = () => (
    <div style={{ width: sidebarOpen ? '220px' : '60px', backgroundColor: colors.primaryDark, color: 'white', padding: '20px 10px', overflowY: 'auto', transition: 'width 0.3s', height: '100vh', position: 'relative' }}>
      <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginBottom: '20px', fontSize: '20px' }}>
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {sidebarOpen && <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#B3D9FF' }}>Chungath CRM</h2>}

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <SidebarItem icon={<Home size={20} />} label="Dashboard" onClick={() => setCurrentScreen('dashboard')} />
        <SidebarItem icon={<Users size={20} />} label="Leads" onClick={() => setCurrentScreen('leads')} />
        <SidebarItem icon={<Users size={20} />} label="Customers" onClick={() => setCurrentScreen('customers')} />
        <SidebarItem icon={<MapPin size={20} />} label="Hoardings" onClick={() => setCurrentScreen('hoardings')} />
        <SidebarItem icon={<Users size={20} />} label="Contractors" onClick={() => setCurrentScreen('contractors')} />
        <SidebarItem icon={<MapPin size={20} />} label="Routes" onClick={() => setCurrentScreen('routes')} />
        <SidebarItem icon={<Calendar size={20} />} label="Events" onClick={() => setCurrentScreen('events')} />
        <SidebarItem icon={<BarChart3 size={20} />} label="Reports" onClick={() => setCurrentScreen('reports')} />
        <SidebarItem icon={<Settings size={20} />} label="Settings" onClick={() => setCurrentScreen('settings')} />
      </nav>

      <button 
        onClick={() => { setCurrentScreen('login'); setUserRole(null); }}
        style={{ marginTop: 'auto', width: '100%', padding: '10px', backgroundColor: colors.error, border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
      >
        <LogOut size={18} /> {sidebarOpen && 'Logout'}
      </button>
    </div>
  );

  const SidebarItem = ({ icon, label, onClick }) => (
    <button 
      onClick={onClick}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        padding: '10px 12px', 
        backgroundColor: 'rgba(255,255,255,0.1)', 
        border: 'none', 
        color: 'white', 
        borderRadius: '4px', 
        cursor: 'pointer',
        fontSize: '14px',
        justifyContent: sidebarOpen ? 'flex-start' : 'center',
        width: '100%'
      }}
    >
      {icon}
      {sidebarOpen && label}
    </button>
  );

  // ==================== TOP BAR ====================
  const TopBar = ({ title }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', backgroundColor: colors.white, borderBottom: `1px solid ${colors.border}` }}>
      <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: colors.darkText }}>{title}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ position: 'relative', width: '200px' }}>
          <input type="text" placeholder="Search..." style={{ width: '100%', padding: '8px 12px', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '13px' }} />
          <Search size={16} style={{ position: 'absolute', right: '10px', top: '8px', color: colors.lightText }} />
        </div>
        <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}>
          <Bell size={20} color={colors.mediumText} />
          <span style={{ position: 'absolute', top: '0', right: '0', backgroundColor: colors.error, color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
        </button>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
          {userRole[0].toUpperCase()}
        </div>
      </div>
    </div>
  );

  // ==================== DASHBOARD SCREEN ====================
  if (currentScreen === 'dashboard') {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Dashboard" />
          
          <div style={{ padding: '24px' }}>
            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <KPICard label="Total Leads" value="247" trend="+12%" color={colors.primary} />
              <KPICard label="Leads Converted" value="48" trend="+8%" color={colors.success} />
              <KPICard label="Active Hoardings" value="156" trend="+5%" color={colors.primary} />
              <KPICard label="Avg. KMs/Day" value="28.5" trend="+3%" color={colors.warning} />
            </div>

            {/* Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <Card title="Lead Status Distribution">
                <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '20px 0' }}>
                  <div style={{ flex: 1, backgroundColor: colors.primary, height: '60%', borderRadius: '4px 4px 0 0' }} title="New: 95"></div>
                  <div style={{ flex: 1, backgroundColor: '#0084D1', height: '75%', borderRadius: '4px 4px 0 0' }} title="Contacted: 85"></div>
                  <div style={{ flex: 1, backgroundColor: '#0070D2', height: '55%', borderRadius: '4px 4px 0 0' }} title="Interested: 67"></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '12px', color: colors.mediumText', marginTop: '10px' }}>
                  <span>New</span><span>Contacted</span><span>Interested</span>
                </div>
              </Card>

              <Card title="Monthly KMs Travelled">
                <div style={{ padding: '20px 0' }}>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', color: colors.primary }}>892.5 KM</p>
                  <p style={{ color: colors.mediumText, marginTop: '8px' }}>Average: 28.5 KM/day</p>
                  <p style={{ color: colors.lightText, marginTop: '4px', fontSize: '12px' }}>Calculated via Google Maps Distance Matrix API</p>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card title="Recent Leads" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${colors.border}` }}>
                  <span><strong>Priya Sharma</strong> - Marriage - New</span>
                  <span style={{ color: colors.mediumText }}>2 hrs ago</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${colors.border}` }}>
                  <span><strong>Rajesh Kumar</strong> - Engagement - Contacted</span>
                  <span style={{ color: colors.mediumText }}>5 hrs ago</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
                  <span><strong>Anjali Patel</strong> - Marriage - Interested</span>
                  <span style={{ color: colors.mediumText }}>1 day ago</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ==================== LEADS LIST ====================
  if (currentScreen === 'leads') {
    const leadsData = [
      { id: 1, name: 'Priya Sharma', phone: '98765 43210', ceremony: 'Marriage', date: '2026-08-15', status: 'New', area: 'Fort Kochi' },
      { id: 2, name: 'Rajesh Kumar', phone: '98765 43211', ceremony: 'Engagement', date: '2026-07-20', status: 'Contacted', area: 'Mattancherry' },
      { id: 3, name: 'Anjali Patel', phone: '98765 43212', ceremony: 'Marriage', date: '2026-09-10', status: 'Interested', area: 'Ernakulathappan' },
      { id: 4, name: 'Vikram Singh', phone: '98765 43213', ceremony: 'Other', date: '2026-06-30', status: 'Not Interested', area: 'Kochi' },
      { id: 5, name: 'Deepa Menon', phone: '98765 43214', ceremony: 'Marriage', date: '2026-10-05', status: 'Converted', area: 'Fort Kochi' },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Leads" />
          
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <button 
                onClick={() => { setModalType('newLead'); setShowModal(true); }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' }}
              >
                <Plus size={18} /> New Lead
              </button>
              <input type="text" placeholder="Filter by status, area..." style={{ flex: 1, padding: '10px 12px', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '13px' }} />
            </div>

            <Card title="Active Leads">
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${colors.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: colors.darkText }}>Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: colors.darkText }}>Phone</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: colors.darkText }}>Ceremony</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: colors.darkText }}>Date</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: colors.darkText }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: colors.darkText }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leadsData.map((lead, idx) => (
                    <tr key={lead.id} style={{ borderBottom: `1px solid ${colors.border}`, backgroundColor: idx % 2 === 0 ? colors.white : colors.background }}>
                      <td style={{ padding: '12px' }}><strong>{lead.name}</strong></td>
                      <td style={{ padding: '12px' }}>{lead.phone}</td>
                      <td style={{ padding: '12px' }}>{lead.ceremony}</td>
                      <td style={{ padding: '12px' }}>{lead.date}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ padding: '4px 8px', backgroundColor: getStatusColor(lead.status), color: 'white', borderRadius: '12px', fontSize: '11px', fontWeight: '500' }}>
                          {lead.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <button onClick={() => { setSelectedLead(lead); setCurrentScreen('leadDetail'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.primary }}>
                          <Eye size={16} />
                        </button>
                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.mediumText }}>
                          <Edit2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>

        {showModal && modalType === 'newLead' && (
          <Modal onClose={() => setShowModal(false)} title="Create New Lead">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FormField label="Customer Name" type="text" placeholder="Full name" />
              <FormField label="Phone" type="tel" placeholder="10-digit mobile" />
              <FormField label="Ceremony Type" type="select" options={['Marriage', 'Engagement', 'Other']} />
              <FormField label="Ceremony Date" type="date" />
              <FormField label="Pincode" type="text" placeholder="6-digit pincode" />
              <FormField label="Referred By" type="select" options={['Walk-in', 'Staff', 'Event', 'Other']} />
              <button style={{ padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '12px' }}>
                Create Lead
              </button>
            </form>
          </Modal>
        )}
      </div>
    );
  }

  // ==================== LEAD DETAIL ====================
  if (currentScreen === 'leadDetail') {
    const lead = selectedLead || { id: 1, name: 'Priya Sharma', phone: '98765 43210', ceremony: 'Marriage', date: '2026-08-15', status: 'Interested', area: 'Fort Kochi', email: 'priya@example.com', address: 'Kochi, Kerala', occupation: 'IT Professional', cardNumber: '12345' };

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title={`Lead - ${lead.name}`} />
          
          <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <button onClick={() => setCurrentScreen('leads')} style={{ marginBottom: '16px', background: 'none', border: 'none', color: colors.primary, cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}>
              ← Back to Leads
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
              {/* Main Details */}
              <Card title="Lead Information">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <InfoField label="Name" value={lead.name} />
                  <InfoField label="Phone" value={lead.phone} />
                  <InfoField label="Email" value={lead.email} />
                  <InfoField label="Occupation" value={lead.occupation} />
                  <InfoField label="Address" value={lead.address} />
                  <InfoField label="Area" value={lead.area} />
                  <InfoField label="Ceremony Type" value={lead.ceremony} />
                  <InfoField label="Ceremony Date" value={lead.date} />
                </div>
              </Card>

              {/* Status & Actions */}
              <Card title="Status">
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ color: colors.lightText, fontSize: '12px', marginBottom: '8px' }}>Current Status</p>
                  <span style={{ padding: '8px 12px', backgroundColor: '#E5A900', color: 'white', borderRadius: '12px', fontSize: '13px', fontWeight: '500' }}>
                    {lead.status}
                  </span>
                </div>
                <button 
                  onClick={() => { setModalType('updateStatus'); setShowModal(true); }}
                  style={{ width: '100%', padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '8px' }}
                >
                  Update Status
                </button>
                <button 
                  onClick={() => { setModalType('recordFollowup'); setShowModal(true); }}
                  style={{ width: '100%', padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Record Follow-up
                </button>
              </Card>
            </div>

            {/* Follow-up History */}
            <Card title="Follow-up History" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px' }}>
                <div style={{ padding: '12px', backgroundColor: colors.background, borderRadius: '4px', marginBottom: '12px' }}>
                  <p style={{ fontWeight: '500', marginBottom: '4px' }}>Status Updated to "Interested"</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px' }}>2 days ago by Rajesh Nair</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px', marginTop: '4px' }}>Notes: Customer interested in marriage ornaments. Next visit scheduled for 15th July.</p>
                </div>
                <div style={{ padding: '12px', backgroundColor: colors.background, borderRadius: '4px', marginBottom: '12px' }}>
                  <p style={{ fontWeight: '500', marginBottom: '4px' }}>Status Updated to "Contacted"</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px' }}>5 days ago by Rajesh Nair</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px', marginTop: '4px' }}>Notes: Initial call made. Customer responsive and interested in designs.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {showModal && modalType === 'updateStatus' && (
          <Modal onClose={() => setShowModal(false)} title="Update Lead Status">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['New', 'Contacted', 'Interested', 'Not Interested', 'Converted', 'Lost', 'Disqualified'].map(status => (
                <button 
                  key={status}
                  onClick={() => setShowModal(false)}
                  style={{ padding: '12px', border: `1px solid ${colors.border}`, backgroundColor: colors.white, borderRadius: '4px', cursor: 'pointer', textAlign: 'left' }}
                >
                  {status}
                </button>
              ))}
            </div>
          </Modal>
        )}

        {showModal && modalType === 'recordFollowup' && (
          <Modal onClose={() => setShowModal(false)} title="Record Follow-up">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FormField label="Next Status" type="select" options={['Contacted', 'Interested', 'Not Interested']} />
              <FormField label="Visit Notes" type="textarea" placeholder="What did you discuss?" />
              <FormField label="Next Visit Date" type="date" />
              <button style={{ padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Save Follow-up
              </button>
            </form>
          </Modal>
        )}
      </div>
    );
  }

  // ==================== CUSTOMERS ====================
  if (currentScreen === 'customers') {
    const customersData = [
      { id: 1, name: 'Deepa Menon', phone: '98765 43214', area: 'Fort Kochi', cardNumber: 'C001', visits: 5 },
      { id: 2, name: 'Suresh Nair', phone: '98765 43215', area: 'Mattancherry', cardNumber: 'C002', visits: 3 },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Customers" />
          
          <div style={{ padding: '24px' }}>
            <Card title="Customer Master">
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${colors.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Phone</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Area</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Card Number</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Visits</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customersData.map((customer, idx) => (
                    <tr key={customer.id} style={{ borderBottom: `1px solid ${colors.border}`, backgroundColor: idx % 2 === 0 ? colors.white : colors.background }}>
                      <td style={{ padding: '12px' }}><strong>{customer.name}</strong></td>
                      <td style={{ padding: '12px' }}>{customer.phone}</td>
                      <td style={{ padding: '12px' }}>{customer.area}</td>
                      <td style={{ padding: '12px' }}>{customer.cardNumber}</td>
                      <td style={{ padding: '12px' }}>{customer.visits}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button onClick={() => { setSelectedCustomer(customer); setCurrentScreen('customerDetail'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.primary }}>
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ==================== CUSTOMER DETAIL ====================
  if (currentScreen === 'customerDetail') {
    const customer = selectedCustomer || { id: 1, name: 'Deepa Menon', phone: '98765 43214', email: 'deepa@example.com', area: 'Fort Kochi', cardNumber: 'C001', address: 'Kochi, Kerala' };

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title={`Customer - ${customer.name}`} />
          
          <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <button onClick={() => setCurrentScreen('customers')} style={{ marginBottom: '16px', background: 'none', border: 'none', color: colors.primary, cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}>
              ← Back to Customers
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <Card title="Customer Information">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <InfoField label="Name" value={customer.name} />
                  <InfoField label="Phone" value={customer.phone} />
                  <InfoField label="Email" value={customer.email} />
                  <InfoField label="Area" value={customer.area} />
                  <InfoField label="Card Number" value={customer.cardNumber} />
                  <InfoField label="Address" value={customer.address} />
                </div>
              </Card>

              <Card title="Quick Actions">
                <button style={{ width: '100%', padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '8px' }}>
                  Add Visit
                </button>
                <button style={{ width: '100%', padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  Schedule Visit
                </button>
              </Card>
            </div>

            {/* Visit History */}
            <Card title="Visit History">
              <div style={{ fontSize: '13px' }}>
                <div style={{ padding: '12px', backgroundColor: colors.background, borderRadius: '4px', marginBottom: '12px' }}>
                  <p style={{ fontWeight: '500', marginBottom: '4px' }}>Visit on 10th July 2026</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px' }}>GPS: 9.9312°N, 76.2673°E | Check-in: 10:30 AM, Check-out: 11:15 AM</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px', marginTop: '4px' }}>Notes: Customer selected 5 pieces for wedding. Payment scheduled for next week.</p>
                </div>
                <div style={{ padding: '12px', backgroundColor: colors.background, borderRadius: '4px', marginBottom: '12px' }}>
                  <p style={{ fontWeight: '500', marginBottom: '4px' }}>Visit on 5th July 2026</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px' }}>GPS: 9.9312°N, 76.2673°E | Check-in: 2:00 PM, Check-out: 2:45 PM</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px', marginTop: '4px' }}>Notes: Final payment completed. Order ready for delivery.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ==================== HOARDINGS ====================
  if (currentScreen === 'hoardings') {
    const hoardingsData = [
      { id: 1, name: 'Hoarding A1', location: 'Fort Kochi', size: '20x10', contractor: 'Contractor A', status: 'Good Condition', nextVisit: '2026-08-15' },
      { id: 2, name: 'Hoarding B2', location: 'Mattancherry', size: '15x8', contractor: 'Contractor B', status: 'Need Fix', nextVisit: '2026-08-10' },
      { id: 3, name: 'Hoarding C3', location: 'Ernakulathappan', size: '25x12', contractor: 'Contractor C', status: 'Good Condition', nextVisit: '2026-08-20' },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Hoardings" />
          
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <button 
                onClick={() => { setModalType('newHoarding'); setShowModal(true); }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' }}
              >
                <Plus size={18} /> New Hoarding
              </button>
            </div>

            <Card title="Active Hoardings">
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${colors.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Location</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Size</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Contractor</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Next Visit</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {hoardingsData.map((hoarding, idx) => (
                    <tr key={hoarding.id} style={{ borderBottom: `1px solid ${colors.border}`, backgroundColor: idx % 2 === 0 ? colors.white : colors.background }}>
                      <td style={{ padding: '12px' }}><strong>{hoarding.name}</strong></td>
                      <td style={{ padding: '12px' }}>{hoarding.location}</td>
                      <td style={{ padding: '12px' }}>{hoarding.size}</td>
                      <td style={{ padding: '12px' }}>{hoarding.contractor}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ padding: '4px 8px', backgroundColor: hoarding.status === 'Good Condition' ? colors.success : colors.warning, color: 'white', borderRadius: '12px', fontSize: '11px' }}>
                          {hoarding.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>{hoarding.nextVisit}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button onClick={() => { setSelectedHoarding(hoarding); setCurrentScreen('hoardingDetail'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.primary }}>
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>

        {showModal && modalType === 'newHoarding' && (
          <Modal onClose={() => setShowModal(false)} title="Install New Hoarding">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FormField label="Hoarding Name" type="text" placeholder="e.g., Hoarding A1" />
              <FormField label="Location" type="text" placeholder="Address with landmark" />
              <FormField label="Length (ft)" type="number" placeholder="20" />
              <FormField label="Width (ft)" type="number" placeholder="10" />
              <FormField label="Contractor" type="select" options={['Contractor A', 'Contractor B', 'Contractor C']} />
              <FormField label="Annual Rate (₹)" type="number" placeholder="50000" />
              <FormField label="Inspection Frequency" type="select" options={['30 days', '60 days', '90 days']} />
              <button style={{ padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '12px' }}>
                Create Hoarding
              </button>
            </form>
          </Modal>
        )}
      </div>
    );
  }

  // ==================== HOARDING DETAIL ====================
  if (currentScreen === 'hoardingDetail') {
    const hoarding = selectedHoarding || { id: 1, name: 'Hoarding A1', location: 'Fort Kochi', size: '20x10', contractor: 'Contractor A', status: 'Good Condition', nextVisit: '2026-08-15' };

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title={`Hoarding - ${hoarding.name}`} />
          
          <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <button onClick={() => setCurrentScreen('hoardings')} style={{ marginBottom: '16px', background: 'none', border: 'none', color: colors.primary, cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}>
              ← Back to Hoardings
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <Card title="Hoarding Details">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <InfoField label="Name" value={hoarding.name} />
                  <InfoField label="Location" value={hoarding.location} />
                  <InfoField label="Size" value={hoarding.size} />
                  <InfoField label="Area (Sq. Ft)" value={hoarding.size === '20x10' ? '200' : '120'} />
                  <InfoField label="Contractor" value={hoarding.contractor} />
                  <InfoField label="Status" value={hoarding.status} />
                </div>
              </Card>

              <Card title="Inspection">
                <p style={{ color: colors.lightText, fontSize: '12px', marginBottom: '12px' }}>Next Visit Due:</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: colors.primary, marginBottom: '16px' }}>{hoarding.nextVisit}</p>
                <button 
                  onClick={() => { setModalType('boardStatus'); setShowModal(true); }}
                  style={{ width: '100%', padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Record Inspection
                </button>
              </Card>
            </div>

            {/* Visit History */}
            <Card title="Inspection History">
              <div style={{ fontSize: '13px' }}>
                <div style={{ padding: '12px', backgroundColor: colors.background, borderRadius: '4px', marginBottom: '12px' }}>
                  <p style={{ fontWeight: '500', marginBottom: '4px' }}>Inspection on 5th August 2026</p>
                  <p style={{ color: colors.success, fontSize: '12px', fontWeight: '500' }}>✓ Good Condition</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px', marginTop: '4px' }}>Notes: Board in perfect condition. No repairs needed.</p>
                </div>
                <div style={{ padding: '12px', backgroundColor: colors.background, borderRadius: '4px', marginBottom: '12px' }}>
                  <p style={{ fontWeight: '500', marginBottom: '4px' }}>Inspection on 5th July 2026</p>
                  <p style={{ color: colors.warning, fontSize: '12px', fontWeight: '500' }}>⚠ Need Fix - Vegetation</p>
                  <p style={{ color: colors.mediumText, fontSize: '12px', marginTop: '4px' }}>Notes: Vegetation overgrowth on left side. Cleaned on 8th July.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {showModal && modalType === 'boardStatus' && (
          <Modal onClose={() => setShowModal(false)} title="Record Board Status">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FormField label="Board Status" type="select" options={['Good Condition', 'Need Fix - Vegetation', 'Need Fix - Flex Damage', 'Need Fix - Competitor Hoarding', 'Rectified', 'Others']} />
              <FormField label="Notes" type="textarea" placeholder="Additional details..." />
              <FormField label="Inspection Date" type="date" />
              <button style={{ padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Save Inspection
              </button>
            </form>
          </Modal>
        )}
      </div>
    );
  }

  // ==================== CONTRACTORS ====================
  if (currentScreen === 'contractors') {
    const contractorsData = [
      { id: 1, name: 'Contractor A', contact: 'John Doe', phone: '98765 11111', activeHoardings: 5, annualValue: '2,50,000' },
      { id: 2, name: 'Contractor B', contact: 'Jane Smith', phone: '98765 22222', activeHoardings: 3, annualValue: '1,50,000' },
      { id: 3, name: 'Contractor C', contact: 'Ram Kumar', phone: '98765 33333', activeHoardings: 4, annualValue: '2,00,000' },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Contractors" />
          
          <div style={{ padding: '24px' }}>
            <Card title="Contractor Master">
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${colors.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Contact Person</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Phone</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Active Hoardings</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Annual Value</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contractorsData.map((contractor, idx) => (
                    <tr key={contractor.id} style={{ borderBottom: `1px solid ${colors.border}`, backgroundColor: idx % 2 === 0 ? colors.white : colors.background }}>
                      <td style={{ padding: '12px' }}><strong>{contractor.name}</strong></td>
                      <td style={{ padding: '12px' }}>{contractor.contact}</td>
                      <td style={{ padding: '12px' }}>{contractor.phone}</td>
                      <td style={{ padding: '12px' }}>{contractor.activeHoardings}</td>
                      <td style={{ padding: '12px' }}>₹ {contractor.annualValue}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button onClick={() => { setSelectedContractor(contractor); setCurrentScreen('contractorDetail'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.primary }}>
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ==================== CONTRACTOR DETAIL ====================
  if (currentScreen === 'contractorDetail') {
    const contractor = selectedContractor || { id: 1, name: 'Contractor A', contact: 'John Doe', phone: '98765 11111', email: 'john@contractor.com', address: 'Kochi, Kerala', activeHoardings: 5, annualValue: '2,50,000' };

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title={`Contractor - ${contractor.name}`} />
          
          <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <button onClick={() => setCurrentScreen('contractors')} style={{ marginBottom: '16px', background: 'none', border: 'none', color: colors.primary, cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}>
              ← Back to Contractors
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <Card title="Contractor Information">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <InfoField label="Name" value={contractor.name} />
                  <InfoField label="Contact Person" value={contractor.contact} />
                  <InfoField label="Phone" value={contractor.phone} />
                  <InfoField label="Email" value={contractor.email} />
                  <InfoField label="Address" value={contractor.address} />
                  <InfoField label="Active Hoardings" value={contractor.activeHoardings} />
                </div>
              </Card>

              <Card title="Annual Contract Value">
                <p style={{ fontSize: '28px', fontWeight: 'bold', color: colors.primary }}>₹ {contractor.annualValue}</p>
                <p style={{ color: colors.mediumText, marginTop: '8px', fontSize: '13px' }}>{contractor.activeHoardings} active hoardings</p>
              </Card>
            </div>

            {/* Linked Hoardings */}
            <Card title="Linked Hoardings">
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${colors.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Hoarding Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Location</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Annual Rate</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map(i => (
                    <tr key={i} style={{ borderBottom: `1px solid ${colors.border}`, backgroundColor: i % 2 === 0 ? colors.white : colors.background }}>
                      <td style={{ padding: '12px' }}><strong>Hoarding {String.fromCharCode(64 + i)}</strong></td>
                      <td style={{ padding: '12px' }}>Location {i}</td>
                      <td style={{ padding: '12px' }}>₹ 50,000</td>
                      <td style={{ padding: '12px' }}><span style={{ padding: '4px 8px', backgroundColor: colors.success, color: 'white', borderRadius: '12px', fontSize: '11px' }}>Active</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ==================== ROUTES ====================
  if (currentScreen === 'routes') {
    const routesData = [
      { id: 1, name: 'Fort Kochi Route', area: 'Fort Kochi', hoardings: 12, status: 'Active' },
      { id: 2, name: 'Mattancherry Route', area: 'Mattancherry', hoardings: 8, status: 'Active' },
      { id: 3, name: 'Ernakulathappan Route', area: 'Ernakulathappan', hoardings: 10, status: 'Active' },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Routes" />
          
          <div style={{ padding: '24px' }}>
            <Card title="Hoarding Routes">
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${colors.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Route Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Area</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Hoardings</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {routesData.map((route, idx) => (
                    <tr key={route.id} style={{ borderBottom: `1px solid ${colors.border}`, backgroundColor: idx % 2 === 0 ? colors.white : colors.background }}>
                      <td style={{ padding: '12px' }}><strong>{route.name}</strong></td>
                      <td style={{ padding: '12px' }}>{route.area}</td>
                      <td style={{ padding: '12px' }}>{route.hoardings}</td>
                      <td style={{ padding: '12px' }}><span style={{ padding: '4px 8px', backgroundColor: colors.success, color: 'white', borderRadius: '12px', fontSize: '11px' }}>Active</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ==================== EVENTS ====================
  if (currentScreen === 'events') {
    const eventsData = [
      { id: 1, name: 'Monsoon Sale 2026', type: 'Campaign', startDate: '2026-07-15', endDate: '2026-08-15', branch: 'Fort Kochi', reminderDays: 7 },
      { id: 2, name: 'Eid Celebration', type: 'Shop Event', startDate: '2026-07-20', endDate: '2026-07-22', branch: 'Mattancherry', reminderDays: 10 },
      { id: 3, name: 'Back to School Campaign', type: 'Campaign', startDate: '2026-08-01', endDate: '2026-08-31', branch: 'All Branches', reminderDays: 14 },
    ];

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Event Calendar" />
          
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <button 
                onClick={() => { setModalType('newEvent'); setShowModal(true); }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' }}
              >
                <Plus size={18} /> New Event
              </button>
            </div>

            <Card title="Upcoming Events">
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${colors.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Event Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Type</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Start Date</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>End Date</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Reminder (Days)</th>
                  </tr>
                </thead>
                <tbody>
                  {eventsData.map((event, idx) => (
                    <tr key={event.id} style={{ borderBottom: `1px solid ${colors.border}`, backgroundColor: idx % 2 === 0 ? colors.white : colors.background }}>
                      <td style={{ padding: '12px' }}><strong>{event.name}</strong></td>
                      <td style={{ padding: '12px' }}>{event.type}</td>
                      <td style={{ padding: '12px' }}>{event.startDate}</td>
                      <td style={{ padding: '12px' }}>{event.endDate}</td>
                      <td style={{ padding: '12px' }}>{event.reminderDays} days</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>

        {showModal && modalType === 'newEvent' && (
          <Modal onClose={() => setShowModal(false)} title="Create New Event">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <FormField label="Event Name" type="text" placeholder="e.g., Monsoon Sale 2026" />
              <FormField label="Event Type" type="select" options={['Shop Event', 'Sponsored', 'Campaign', 'Other']} />
              <FormField label="Start Date" type="date" />
              <FormField label="End Date" type="date" />
              <FormField label="Reminder (Days Before)" type="number" placeholder="7" />
              <FormField label="Hoarding Placement Details" type="textarea" placeholder="Where will this event be displayed on hoardings?" />
              <button style={{ padding: '10px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '12px' }}>
                Create Event
              </button>
            </form>
          </Modal>
        )}
      </div>
    );
  }

  // ==================== REPORTS ====================
  if (currentScreen === 'reports') {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Reports & Analytics" />
          
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <ReportCard title="Sales Productivity" description="Total Visits, Completed Visits, No Visit Days" icon="📊" />
              <ReportCard title="Lead & Customer" description="Leads Collected, Conversion Rate, New Customers" icon="👥" />
              <ReportCard title="Marketing Executive" description="Client Lists, KM Travelled, Visit Count" icon="📍" />
              <ReportCard title="Hoarding Monitoring" description="Visits Done, Missed Visits, Board Status" icon="📋" />
              <ReportCard title="Contractor Reports" description="Annual Contract Value, Active Hoardings" icon="🤝" />
              <ReportCard title="Route & Area Performance" description="Visits per Route, Leads per Area" icon="🗺️" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================== SETTINGS ====================
  if (currentScreen === 'settings') {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: colors.background, overflow: 'auto' }}>
          <TopBar title="Settings" />
          
          <div style={{ padding: '24px', maxWidth: '600px' }}>
            <Card title="Account Settings">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <InfoField label="Full Name" value={`${userRole.charAt(0).toUpperCase() + userRole.slice(1)} User`} />
                <InfoField label="Email" value="user@chungathjewellers.com" />
                <InfoField label="Role" value={userRole.charAt(0).toUpperCase() + userRole.slice(1)} />
                <InfoField label="Branch" value="Fort Kochi" />
              </div>
            </Card>

            <Card title="System Settings" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}>
                  <input type="checkbox" defaultChecked /> Email Notifications Enabled
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}>
                  <input type="checkbox" defaultChecked /> In-App Notifications Enabled
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px' }}>
                  <input type="checkbox" /> Disable Location Tracking
                </label>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ==================== HELPER COMPONENTS ====================
  
  const Card = ({ title, children, style }) => (
    <div style={{ backgroundColor: colors.white, borderRadius: '4px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', ...style }}>
      {title && <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: colors.darkText }}>{title}</h2>}
      {children}
    </div>
  );

  const KPICard = ({ label, value, trend, color }) => (
    <Card>
      <p style={{ color: colors.lightText, fontSize: '12px', marginBottom: '8px' }}>{label}</p>
      <p style={{ fontSize: '28px', fontWeight: 'bold', color }}>{value}</p>
      <p style={{ color: colors.success, fontSize: '12px', marginTop: '8px' }}>{trend}</p>
    </Card>
  );

  const InfoField = ({ label, value }) => (
    <div>
      <p style={{ color: colors.lightText, fontSize: '12px', marginBottom: '4px' }}>{label}</p>
      <p style={{ fontSize: '14px', fontWeight: '500', color: colors.darkText }}>{value}</p>
    </div>
  );

  const FormField = ({ label, type, placeholder, options }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '12px', fontWeight: '500', color: colors.darkText }}>{label}</label>
      {type === 'select' ? (
        <select style={{ padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '13px' }}>
          <option>Select {label}</option>
          {options?.map((opt, i) => <option key={i}>{opt}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <textarea placeholder={placeholder} style={{ padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '13px', minHeight: '80px', fontFamily: 'Arial' }} />
      ) : (
        <input type={type} placeholder={placeholder} style={{ padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '13px' }} />
      )}
    </div>
  );

  const Modal = ({ title, children, onClose }) => (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: colors.white, borderRadius: '4px', padding: '24px', maxWidth: '500px', width: '90%', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: colors.darkText }}>{title}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: colors.lightText }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );

  const ReportCard = ({ title, description, icon }) => (
    <Card style={{ cursor: 'pointer', transition: 'all 0.3s', border: `2px solid ${colors.border}` }}>
      <div style={{ fontSize: '32px', marginBottom: '8px' }}>{icon}</div>
      <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: colors.darkText, marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '12px', color: colors.mediumText }}>{description}</p>
      <button style={{ marginTop: '12px', padding: '8px 12px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: '500' }}>
        View Report
      </button>
    </Card>
  );

  const getStatusColor = (status) => {
    const statusColors = {
      'New': '#0070D2',
      'Contacted': '#4A90E2',
      'Interested': '#FFB81C',
      'Not Interested': '#E74C3C',
      'Converted': '#04844B',
      'Lost': '#A4373A',
      'Disqualified': '#8B8B8B'
    };
    return statusColors[status] || '#0070D2';
  };

  return <div>Loading...</div>;
}
