import React from 'react';
import { Package, AlertTriangle, XCircle, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardCard from '../components/DashboardCard';

const mockData = {
  stats: {
    available: 150,
    lowStock: 23,
    outOfStock: 8,
    prediction: 45,
  },
  usageData: [
    { month: 'Jan', usage: 65 },
    { month: 'Feb', usage: 59 },
    { month: 'Mar', usage: 80 },
    { month: 'Apr', usage: 81 },
    { month: 'May', usage: 56 },
    { month: 'Jun', usage: 55 },
  ],
};

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Barang Tersedia"
          value={mockData.stats.available}
          icon={Package}
          color="bg-green-500"
        />
        <DashboardCard
          title="Stok Menipis"
          value={mockData.stats.lowStock}
          icon={AlertTriangle}
          color="bg-yellow-500"
        />
        <DashboardCard
          title="Stok Habis"
          value={mockData.stats.outOfStock}
          icon={XCircle}
          color="bg-red-500"
        />
        <DashboardCard
          title="Prediksi Kebutuhan"
          value={mockData.stats.prediction}
          icon={TrendingUp}
          color="bg-blue-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Tren Penggunaan Barang</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData.usageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="usage" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;