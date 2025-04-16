import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { RefreshCw, Download } from 'lucide-react';

const mockPredictionData = [
  { month: 'Jan', actual: 65, predicted: 68 },
  { month: 'Feb', actual: 59, predicted: 62 },
  { month: 'Mar', actual: 80, predicted: 75 },
  { month: 'Apr', actual: 81, predicted: 85 },
  { month: 'May', actual: 56, predicted: 58 },
  { month: 'Jun', actual: 55, predicted: 52 },
  { month: 'Jul', predicted: 60 },
  { month: 'Aug', predicted: 65 },
  { month: 'Sep', predicted: 70 },
];

const Predictions = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Prediksi Kebutuhan</h1>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            <RefreshCw className="w-5 h-5" />
            Update Prediksi
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700">
            <Download className="w-5 h-5" />
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Grafik Prediksi vs Aktual</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockPredictionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#4F46E5" name="Aktual" strokeWidth={2} />
                <Line type="monotone" dataKey="predicted" stroke="#EF4444" name="Prediksi" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Metrik Prediksi</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Mean Absolute Error (MAE)</p>
              <p className="text-2xl font-semibold">3.45</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Root Mean Square Error (RMSE)</p>
              <p className="text-2xl font-semibold">4.12</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">R² Score</p>
              <p className="text-2xl font-semibold">0.89</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Rekomendasi</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></span>
                <span>Perkiraan kebutuhan bulan depan meningkat 15%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5"></span>
                <span>Stok ATK perlu ditambah untuk mengantisipasi kenaikan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5"></span>
                <span>Akurasi prediksi meningkat dibanding bulan lalu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictions;