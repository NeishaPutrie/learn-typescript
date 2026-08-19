/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const passengerName: string = "Fajar Nugroho";
const hasOnlineCheckIn: boolean = true;
const cabinClass: string = "Economy";
const baggageWeight: number = 25; //kilogram

let resultMessage: string;

if (!hasOnlineCheckIn) {
    resultMessage = "Please complete online check-in first.";
} else {
    if (baggageWeight > 20) {
        if (cabinClass === "Business") {
            resultMessage = "Extra Baggage allowed.";
        } else {
            resultMessage = "Additional baggage fee required.";
        } 
    } else {
        resultMessage = "Proceed to boarding pass printing.";
    }
}

console.log("=== Airline Check-in Result ===");
console.log(`Passenger        : ${passengerName}`);
console.log(`Online Check-in  : ${hasOnlineCheckIn ? "Yes" : "No"}`);
console.log(`Cabin Class      : ${cabinClass}`);
console.log(`Baggage Weight   : ${baggageWeight} kg`);
console.log(`Result           : ${resultMessage}`);