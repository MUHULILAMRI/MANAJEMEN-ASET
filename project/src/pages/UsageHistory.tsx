import React, { useState } from 'react';
import { Search, Download, Calendar } from 'lucide-react';
import type { ItemLog } from '../types';

const mockLogs: ItemLog[] = [
  {
    id: '1',
    itemId: '1',
    quantity: 5,
    userId: 'user1',
    purpose: 'Penggunaan Rutin Kantor',
    timestamp: new Date('2024-03-15T09:00:00'),
    type: 'out'
  },
  {
    id: '2',
    itemId: '2',
    quantity: 10,
    userId: 'user2',
    purpose: 'Pengadaan Baru',
    timestamp: new Date('2024-03-14T14:30:00'),
    type: 'in'
  }
];

const UsageHistory = () => {
  const [logs] = useState<ItemLog[]>(mockLogs);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Riwayat Penggunaan</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700">
          <Download className="w-5 h-5" />
          Export Data
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari riwayat..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 border rounded-lg px-4 py-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input type="date" className="outline-none" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Tanggal</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Tipe</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Jumlah</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Pengguna</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Keperluan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    {log.timestamp.toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      log.type === 'in'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {log.type === 'in' ? 'Masuk' : 'Keluar'}
                    </span>
                  </td>
                  <td className="px-4 py-3">{log.quantity}</td>
                  <td className="px-4 py-3">{log.userId}</td>
                  <td className="px-4 py-3">{log.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsageHistory;