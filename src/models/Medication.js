const mongoose = require("mongoose");
// const QRCode = require("qrcode"); //need to implement QRCode into database as well

// --- The Schema Definition ---
const medicationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true, // Ensure each medication ID is unique in the DB
    },

    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, "Name must be less than 100 characters"],
    },

    dosage: {
      type: String,
      required: true,
      trim: true,
    },

    instructions: {
      type: String,
      required: false,
      trim: true,
    },

    // qrCode: {
    //   type: Object,
    //   required: true,
    //   data: {
    //     type: String,
    //     required: true,
    //   },
    //   imageBase64: {
    //     type: String,
    //     required: true,
    //   },
    // },

    // --- Inventory Configuration ---
    inventory: {
      type: Object,
      required: true,

      remaining: Number,
      Total: Number,

      // validate: {
      //   validator: validateInventory,
      //   message: "Invalid inventory data.",
      // },
    },

    schedule: {
      intervalHours: {
        type: Number,
        required: false,
      },
      startDateTime: {
        type: Date,
        required: true,
      },
      activeDays: {
        type: Array,
        required: true,
      },
      reminders: {
        type: Date,
        required: false,
      },
      // validate: {
      //   validator: validateSchedule,
      //   message: "Invalid schedule configuration.",
      // },
    },

    // --- Notification Configuration ---
    notificationConfig: {
      isCritical: {
        type: Boolean,
        default: false,
        trim: true,
      },
      snoozeIntervalMinutes: {
        type: Number,
        default: 20,
        min: 0,
      },
    },

    // --- Timestamps ---
    lastTaken: {
      type: Date,
      required: true,
      default: Date.now(),
    },

    nextScheduled: {
      type: Date,
      default: null,
    },

    icon: {
      type: String,
      enum: ["pill", "tablet", "capsule", "softgel", "inhaler"], // Based on your data colors/icons
      required: true,
    },
  },
  { timestamps: true },
);

// --- Create the Model ---
const Medication = mongoose.model("Medication", medicationSchema);

module.exports = Medication;
