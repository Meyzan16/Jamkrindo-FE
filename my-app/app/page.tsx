"use client";

import Image from "next/image";
import Carousel from '@/components/UI/Carousel/page';
import { useEffect, useState } from "react";

interface DataItem {
  NameLob: string;
  PenyebabKlaim: string;
  JumlahTerjamin: number;
  NilaiBebanKlaim: number;
}

interface CountItem {
  NameLob: string;
  JumlahTerjamin: number;
  NilaiBebanKlaim: number;
}

interface ApiResponse {
  message: string;
  data: {
    data: DataItem[];
    count: CountItem[];
  }[];
}

export default function Home() {
  const [data, setData] = useState<(DataItem | CountItem)[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7032/api/v1/ViewData", {
          method: 'GET',
          cache: 'no-store'
        });

        const result: ApiResponse = await response.json();

        if (result && result.message === "success") {
          const apiData = result.data[0]; // Mengambil data pertama

          // Mengelompokkan data berdasarkan NameLob
          const groupedData = apiData.data.reduce((acc, item) => {
            if (!acc[item.NameLob]) {
              acc[item.NameLob] = [];
            }
            acc[item.NameLob].push(item);
            return acc;
          }, {} as Record<string, DataItem[]>);


          // Mapping count for hasil akhir 
          const finalData: (DataItem | CountItem)[] = [];
          for (const [lob, items] of Object.entries(groupedData)) {
            finalData.push(...items);
            //mencari data count yang sama dengan nama lob, maka push
            const countItem = apiData.count.find(c => c.NameLob === lob);
            if (countItem) {
              finalData.push(countItem);
            }
          }

          console.log('final data', finalData);

          setData(finalData); 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Memanggil fungsi fetchData
  }, []); // Efek dijalankan sekali ketika komponen di-mount

  return (
    <>
      <Carousel />

      <div className="w-full overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="basic">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">LOB</th>
              <th scope="col">Penyebab Klaim</th>
              <th scope="col">Jumlah Nasabah</th>
              <th scope="col">Beban Klaim</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={` ${!('PenyebabKlaim' in item) ? 'bg-primary text-white' : ''} `}>
                <td className="font-medium whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="font-medium whitespace-nowrap">
                  {item.NameLob}
                </td>
                <td className="font-medium whitespace-nowrap">
                  {'PenyebabKlaim' in item ? item.PenyebabKlaim : ''}
                </td>
                <td className="font-medium whitespace-nowrap">
                  {item.JumlahTerjamin}
                </td>
                <td className="font-medium whitespace-nowrap">
                  {item.NilaiBebanKlaim}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
