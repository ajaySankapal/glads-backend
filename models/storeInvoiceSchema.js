const mongoose = require('mongoose')

const storeInvoiceSchema = mongoose.Schema(
  {
    supplierName: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfExportation: { type: Date, required: true },
    billNumber: { type: String, unique: true, required: true },
    receivedOnShop: { type: Object, required: true },
    selectProduct: { type: Object },
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const StoreInvoice = mongoose.model('StoreInvoice', storeInvoiceSchema)
module.exports = StoreInvoice
