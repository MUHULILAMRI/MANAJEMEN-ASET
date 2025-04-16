import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

const Reports = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

  const reportTypes = [
    {
      title: 'Laporan Penggunaan Barang',
      description: 'Ringkasan penggunaan barang bulanan termasuk jumlah dan tujuan penggunaan',
      type: 'usage'
    },
    {
      title: 'Laporan Stok',
      description: 'Status stok terkini semua barang termasuk barang yang perlu pengadaan',
      type: 'stock'
    },
    {
      title: 'Laporan Prediksi',
      description: 'Hasil prediksi kebutuhan barang untuk periode mendatang',
      type: 'prediction'
    },
    {
      title: 'Laporan Audit',
      description: 'Laporan audit penggunaan barang dan perubahan stok',
      type: 'audit'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Laporan</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-white">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report) => (
          <div key={report.type} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between">
              <div>
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <h2 className="text-lg font-semibold mb-2">{report.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{report.description}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200">
                <FileText className="w-5 h-5" />
                Preview
              </button>
              <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700">
                <Download className="w-5 h-5" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Riwayat Laporan</h2>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Nama Laporan</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Periode</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Dibuat Pada</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3">Laporan Penggunaan Barang</td>
              <td className="px-4 py-3">Maret 2024</td>
              <td className="px-4 py-3">15 Mar 2024</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  Selesai
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <Download className="w-4 h-4" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;