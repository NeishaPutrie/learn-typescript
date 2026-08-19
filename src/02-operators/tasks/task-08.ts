/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

// === data ===
const previousMeter: number = 25640;
const currentMeter: number = 25892;
const pricePerKWh: number = 1650;
const solarPanelInstalled: boolean = true;
const energySavingMode: boolean = false;

//=== syarat / batas Green Energy Program ===
const maxGreenConsumption: number = 300;

//=== diskon ===
const solarDiscountRate: number = 0.20;   // 20%
const energySavingDiscountRate: number = 0.05; // 5%

//=== hitung pemakaian energi ===
const energyUsage: number = currentMeter - previousMeter;

//=== hitung tagihan sebelum diskon ===
const electricityBill: number = energyUsage * pricePerKWh;

//=== evaluasi diskon pakai ternary operator ===
const solarDiscount: number = solarPanelInstalled ? solarDiscountRate : 0;
const savingDiscount: number = energySavingMode ? energySavingDiscountRate : 0;

//=== gabungkan total persentase diskon ===
const totalDiscountRate: number = solarDiscount + savingDiscount;
const discountAmount: number = electricityBill * totalDiscountRate;

//=== hitung tagihan akhir ===
const finalBill: number = electricityBill - discountAmount;

//=== evaluasi syarat Green Energy Program pakai comparison operator ===
const isSolarInstalled: boolean = solarPanelInstalled;
const isConsumptionLow: boolean = energyUsage < maxGreenConsumption;
const isEnergySavingOn: boolean = energySavingMode;

//=== gabungkan kondisi pakai logical operator && ===
const isGreenEligible: boolean =
    isSolarInstalled &&
    isConsumptionLow &&
    isEnergySavingOn;

//=== tampilkan hasil ===
const checks = [
    { label: "Pemakaian Energi (< 300 kWh)", value: `${energyUsage} kWh`, pass: isConsumptionLow },
    { label: "Panel Surya Terpasang", value: solarPanelInstalled, pass: isSolarInstalled },
    { label: "Mode Hemat Energi Aktif", value: energySavingMode, pass: isEnergySavingOn },
];

console.log("=== Hasil Monitoring Listrik Rumah ===");
console.log(`Meter Sebelumnya        : ${previousMeter}`);
console.log(`Meter Sekarang          : ${currentMeter}`);
console.log(`Total Pemakaian Energi  : ${energyUsage} kWh`);
console.log("-------------------------------");
checks.forEach(({ label, value, pass }) =>
    console.log(`${label.padEnd(30)}: ${value} -> ${pass}`)
);
console.log("-------------------------------");
console.log(`Tagihan Sebelum Diskon  : Rp${electricityBill}`);
console.log(`Diskon Panel Surya      : ${solarDiscount * 100}%`);
console.log(`Diskon Hemat Energi     : ${savingDiscount * 100}%`);
console.log(`Total Diskon            : Rp${discountAmount}`);
console.log(`Tagihan Akhir           : Rp${finalBill}`);
console.log(`Status Green Energy     : ${isGreenEligible ? "MEMENUHI SYARAT" : "TIDAK MEMENUHI SYARAT"}`);