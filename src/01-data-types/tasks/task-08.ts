/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. 
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a 
 * single collection so they can easily calculate the highest, lowest, and average temperature later.
 * Today, the recorded temperatures are:
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information.
 * 2. Store the temperature data in a single collection.
 * 3. Display the temperature data using console.log.
 */

/**
 * Smart Greenhouse - Hourly Temperature Logger
 */

// 1. Define a proper type for the temperature information
interface SuhuReading {
  waktu: string;      // format "HH:mm", misal "08:00"
  suhu: number;        // dalam derajat Celcius
}

// 2. Store the temperature data in a single collection (array)
const dataSuhu: SuhuReading[] = [
  { waktu: "08:00", suhu: 24.5 },
  { waktu: "09:00", suhu: 25.1 },
  { waktu: "10:00", suhu: 26.8 },
  { waktu: "11:00", suhu: 28.4 },
  { waktu: "12:00", suhu: 30.2 },
  { waktu: "13:00", suhu: 31.1 },
  { waktu: "14:00", suhu: 30.7 },
  { waktu: "15:00", suhu: 29.3 },
];

// 3. Display the temperature data
console.log("=== Data Suhu Greenhouse Hari Ini ===");
dataSuhu.forEach((data: SuhuReading) => {
  console.log(`Jam ${data.waktu} : ${data.suhu}°C`);
});