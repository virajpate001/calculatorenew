import React, { useState } from 'react'

const Gstcal = () => {
    // State variables for inputs
    const [wholesalePrice, setWholesalePrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [gstRate, setGstRate] = useState(18);
    const [sellingPrice, setSellingPrice] = useState('');
    const [result, setResult] = useState(null);


  // Calculation function
  const calculateGST = () => {
    // Convert input strings to numbers
    const price = parseFloat(wholesalePrice);
    const qty = parseFloat(quantity);
    const rate = parseFloat(gstRate);
    const sellPrice = parseFloat(sellingPrice);

    // Ensure inputs are valid numbers
    if (isNaN(price) || isNaN(qty) || isNaN(rate) || isNaN(sellPrice)) {
      alert('Please enter valid numbers in all fields.');
      return;
    }

    // Calculate purchase details
    const totalCostBeforeGST = price * qty;
    const gstAmountPurchase = (totalCostBeforeGST * rate) / 100;
    const totalPurchaseAmount = totalCostBeforeGST + gstAmountPurchase;

    // Calculate selling details
    const gstPerUnitSelling = (sellPrice * rate) / 100;
    const totalGSTSelling = gstPerUnitSelling * qty;
    const totalSalesWithoutGST = sellPrice * qty;
    const totalSalesWithGST = totalSalesWithoutGST + totalGSTSelling;

    // Calculate final GST payable to govt (GST collected - ITC)
    const finalGSTPayable = totalGSTSelling - gstAmountPurchase;

    // Update result state
    setResult({
      totalCostBeforeGST,
      gstAmountPurchase,
      totalPurchaseAmount,
      totalGSTSelling,
      totalSalesWithGST,
      finalGSTPayable
    });
  };

  return (
    <>
       <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>GST Calculator for Wholesale Purchase</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Wholesale Price per Unit (₹): </label>
        <input
          type="number"
          value={wholesalePrice}
          onChange={(e) => setWholesalePrice(e.target.value)}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>GST Rate (%): </label>
        <input
          type="number"
          value={gstRate}
          onChange={(e) => setGstRate(e.target.value)}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Selling Price per Unit (₹): </label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
      </div>
      
      <button onClick={calculateGST}>Calculate GST</button>

      {result && (
        <div style={{ marginTop: '20px', backgroundColor: '#f4f4f4', padding: '15px' }}>
          <h3>Results:</h3>
          <p>
            <strong>Total Cost Before GST:</strong> ₹{result.totalCostBeforeGST.toFixed(2)}
          </p>
          <p>
            <strong>GST Amount on Purchase:</strong> ₹{result.gstAmountPurchase.toFixed(2)}
          </p>
          <p>
            <strong>Total Purchase Amount (with GST):</strong> ₹{result.totalPurchaseAmount.toFixed(2)}
          </p>
          <p>
            <strong>Total GST Collected on Sales:</strong> ₹{result.totalGSTSelling.toFixed(2)}
          </p>
          <p>
            <strong>Total Sales Revenue (with GST):</strong> ₹{result.totalSalesWithGST.toFixed(2)}
          </p>
          <p>
            <strong>Final GST Payable to Govt:</strong> ₹{result.finalGSTPayable.toFixed(2)}
          </p>
        </div>
      )}
    </div>
    </>
  )
}

export default Gstcal
