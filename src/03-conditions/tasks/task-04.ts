/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName: string = "Nadia Putri";
const isPremiumMember: boolean = true;
const isRoomAvailable: boolean = false;

// menentukan 
let resultMessage: string;

if (isRoomAvailable) {
    if (isPremiumMember) {
        resultMessage = `${customerName}, congratulations! As a Premium Member, you have received a free from upgrade. `;
    }   else {
        resultMessage = `${customerName}, your reserved room is ready for you. `;
    }
} else {
    if (isPremiumMember) {
        resultMessage = `${customerName}, no rooms are currently available.
            As a Premium Member, you have been placed on the priority waiting list.`;
    } else {
        resultMessage = `${customerName}, we're sorry, but no rooms are available at this time. `;
    }
}

// display
console.log("=== Hotel Reservation Result ===");
console.log(`Customer Name  : ${customerName}`);
console.log(`Premium Member : ${isPremiumMember ? "Yes" : "No"}`);
console.log(`Room Available : ${isRoomAvailable ? "Yes" : "No"}`);
console.log(`Message    : ${resultMessage}`);