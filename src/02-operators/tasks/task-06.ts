/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const rate_per_hour = 8000;
const discount_treshold_hours = 5;
const discount_rate = 0.15;

//inpur
const hoursUsed = 7
const  minutesUsed = 35;

// total main nya berapa lama
const totalMinutes = hoursUsed * 60 + minutesUsed;

const remainingMinutes = totalMinutes % 60;

const billedHours = Math.ceil(totalMinutes / 60);

const paymentBeforeDiscount = billedHours * rate_per_hour;

const totalPlayingHours = totalMinutes / 60;
const isEligibleforDiscount = totalPlayingHours > discount_treshold_hours;
const discountAmount = isEligibleforDiscount ? paymentBeforeDiscount * discount_rate : 0;
const finalPayment = paymentBeforeDiscount - discountAmount;

// Output
console.log(`Total playing time      : ${totalMinutes} minutes`);
console.log(`Remaining minutes       : ${remainingMinutes} minutes`);
console.log(`Total billed hours      : ${billedHours} hours`);
console.log(`Payment before discount : Rp${paymentBeforeDiscount.toLocaleString('id-ID')}`);
console.log(`Discount amount         : Rp${discountAmount.toLocaleString('id-ID')}`);
console.log(`Final payment           : Rp${finalPayment.toLocaleString('id-ID')}`);
