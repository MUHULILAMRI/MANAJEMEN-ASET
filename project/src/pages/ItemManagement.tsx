import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';
import type { Item } from '../types';

const mockItems: Item[] = [
  {
    id: '1',
    name: 'Kertas A4',
    type: 'consumable',
    unit: 'rim',
    location: 'Gudang Utama',
    currentStock: 50,
    initialStock: 100,
    price: 45000,
    category: 'ATK',
    minimumStock: 20,
  },
  {
    id: '2',
    name: 'Tinta Printer',
    type: 'consumable',
    unit: 'botol',
    location: 'Gudang ATK',
    currentStock: 15,
    initialStock: 30,
    price: 75000,
    category: 'ATK',
    minimumStock: 5,
  },
];

const ItemManagement = () => {
  const [items] = useState<Item[]>(mockItems);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manajemen Barang</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Tambah Barang
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari barang..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="border rounded-lg px-4 py-2">
            <option value="">Semua Kategori</option>
            <option value="ATK">ATK</option>
            <option value="Bahan Bangunan">Bahan Bangunan</option>
            <option value="Alat Teknis">Alat Teknis</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Nama Barang</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Kategori</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Stok</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Satuan</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Lokasi</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Harga</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      item.currentStock <= item.minimumStock
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.currentStock}
                    </span>
                  </td>
                  <td className="px-4 py-3">{item.unit}</td>
                  <td className="px-4 py-3">{item.location}</td>
                  <td className="px-4 py-3">Rp {item.price.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemManagement;