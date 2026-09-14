/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class Notification {
    constructor(
        public message: string
    ){}

    send(): void {
        console.log(`Sending notification...`);
    }
}

class EmailNotification extends Notification {
    constructor(
        message: string,
        public email: string
    ){
        super(message);
    }
    send(): void{
    console.log(`To: ${this.email}`);
    console.log(`Message: ${this.message}`);
    }
}

class SMSNotification extends Notification {
    constructor(
        message: string,
        public phoneNumber: string
    ){
        super(message);
    }
    send(): void{
        console.log(`To this ${this.phoneNumber}`);
        console.log(`Message ${this.message}`);
    }
}

class PushNotification extends Notification {
    constructor(
        message: string,
        public deviceID: string
    ){
        super(message);
    }

    send(): void {
    console.log(`Device: ${this.deviceID}`);
    console.log(`Message: ${this.message}`);
    }
}

const emailNotification = new EmailNotification(
  "Your assignment has been graded.",
  "student@example.com"
);

const smsNotification = new SMSNotification(
  "Your assignment has been graded.",
  "+628123456789"
);

const pushNotification = new PushNotification(
  "Your assignment has been graded.",
  "ST001"
);

const notifications: Notification[] = [
    emailNotification,
    smsNotification,
    pushNotification
];

for (const notification of notifications) {
    notification.send();
    console.log();
}