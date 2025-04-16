import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, History, Brain, Users, FileText } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Package, label: 'Manajemen Barang', path: '/items' },
    { icon: History, label: 'Riwayat Penggunaan', path: '/history' },
    { icon: Brain, label: 'Prediksi', path: '/predictions' },
    { icon: Users, label: 'Pengguna', path: '/users' },
    { icon: FileText, label: 'Laporan', path: '/reports' },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="text-white text-xl font-bold mb-8 p-2">SIMBAH-SDA</div>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center text-gray-300 hover:bg-gray-700 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive ? 'bg-gray-700' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;