import React, { useState } from 'react';
import { Truck, MapPin, Navigation } from 'lucide-react';

// Mock driver data
const mockDrivers = [
  { 
    id: 1, 
    name: 'John Smith', 
    vehicle: 'White Van', 
    location: { lat: 40.7128, lng: -74.0060 } 
  },
  { 
    id: 2, 
    name: 'Emily Rodriguez', 
    vehicle: 'Blue Pickup', 
    location: { lat: 40.7282, lng: -73.7949 } 
  }
];

const ParcelDeliveryApp = () => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    senderAddress: '',
    recipientAddress: '',
    status: 'pending',
    assignedDriver: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitDelivery = () => {
    // Simulate driver assignment
    const randomDriver = mockDrivers[Math.floor(Math.random() * mockDrivers.length)];
    
    setDeliveryDetails(prev => ({
      ...prev,
      status: 'confirmed',
      assignedDriver: randomDriver
    }));
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Truck className="mr-2" /> Quick Parcel Delivery
        </h2>
        
        <div className="space-y-4">
          {/* Sender Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center">
              <MapPin className="mr-2 h-4 w-4" /> Pickup Address
            </label>
            <input 
              name="senderAddress"
              placeholder="Enter full pickup address"
              value={deliveryDetails.senderAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>

          {/* Recipient Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center">
              <MapPin className="mr-2 h-4 w-4" /> Delivery Address
            </label>
            <input 
              name="recipientAddress"
              placeholder="Enter full delivery address"
              value={deliveryDetails.recipientAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>

          {/* Delivery Information */}
          <div className="text-sm text-gray-600 mt-2">
            <p>
              • Standard package delivery (up to 20kg)
              • Typical package size: Small box or envelope
              • Delivery within city limits
            </p>
          </div>

          {/* Submit Button */}
          <button 
            onClick={submitDelivery}
            disabled={!deliveryDetails.senderAddress || !deliveryDetails.recipientAddress}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300 flex items-center justify-center"
          >
            Request Delivery <Navigation className="ml-2" />
          </button>

          {/* Delivery Confirmation */}
          {deliveryDetails.status === 'confirmed' && (
            <div className="mt-4 p-3 bg-green-50 rounded">
              <h3 className="font-bold text-green-700">Delivery Confirmed!</h3>
              <div className="mt-2">
                <p>
                  <strong>Driver Assigned:</strong> {deliveryDetails.assignedDriver.name}
                </p>
                <p>
                  <strong>Vehicle:</strong> {deliveryDetails.assignedDriver.vehicle}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParcelDeliveryApp;
