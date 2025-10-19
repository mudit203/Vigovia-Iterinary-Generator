import { useState } from "react";
import ItineraryPDF from "./ItineraryPDF";
import { BlobProvider } from "@react-pdf/renderer";

export default function Form() {
  const [formData, setFormData] = useState({
    // Basic trip details
    travellerName: "Rahul",
    tripTitle: "Singapore Adventure",
    departure: "Mumbai",
    destination: "Singapore",
    startDate: "2025-10-31",
    endDate: "2025-11-01",
    duration: "4 Days 3 Nights",
    numberOfTravellers: "2",
    
    // Days itinerary
    days: [
      {
        number: 1,
        date: "2025-10-31",
        title: "Arrival in Singapore & City Exploration",
        activities: [
          { time: "Morning", items: ["Arrive at Singapore Changi Airport", "Transfer from airport to Marina Bay Sands hotel", "Check-in and freshen up"] },
          { time: "Afternoon", items: ["Visit Marina Bay Sands SkyPark Observation Deck", "Enjoy panoramic views of Singapore skyline", "Explore Marina Bay Waterfront Promenade", "Walk across the iconic Helix Bridge"] },
          { time: "Evening", items: ["Visit Gardens by the Bay", "Explore Cloud Forest and Flower Dome", "Watch the Garden Rhapsody light show at Supertree Grove", "Dinner at local hawker center"] }
        ],
        image: "/assets/day1-beach.jpg"
      },
      {
        number: 2,
        date: "2025-11-01",
        title: "Singapore Zoo & Cultural District",
        activities: [
          { time: "Morning", items: ["Breakfast at hotel", "Visit Singapore Zoo", "Explore various animal habitats and shows"] },
          { time: "Afternoon", items: ["Continue exploring Singapore Zoo", "Visit River Wonders (formerly River Safari)", "Experience Amazon Flooded Forest"] },
          { time: "Evening", items: ["Return to city center", "Explore Chinatown Heritage Centre", "Shop at Chinatown Street Market", "Traditional Chinese dinner"] }
        ],
        image: "/assets/day2-pool.jpg"
      },
      {
        number: 3,
        date: "2025-11-02",
        title: "Sentosa Island Adventure",
        activities: [
          { time: "Morning", items: ["Check out from Marina Bay Sands", "Check in to Raffles Hotel Singapore", "Take cable car to Sentosa Island"] },
          { time: "Afternoon", items: ["Full day at Universal Studios Singapore", "Experience thrilling rides and attractions", "Explore various themed zones"] },
          { time: "Evening", items: ["Visit Sentosa Beaches - Siloso Beach", "Watch Wings of Time light show", "Dinner at Sentosa"] }
        ],
        image: "/assets/day3-gardens.jpg"
      },
      {
        number: 4,
        date: "2025-11-03",
        title: "Cultural Heritage & Shopping",
        activities: [
          { time: "Morning", items: ["Visit Little India district", "Explore Sri Veeramakaliamman Temple", "Browse through Mustafa Centre"] },
          { time: "Afternoon", items: ["Explore Arab Quarter and Sultan Mosque", "Walk through Haji Lane for street art", "Visit National Museum of Singapore"] },
          { time: "Evening", items: ["Shopping at Orchard Road", "Visit ION Orchard and Takashimaya", "Farewell dinner at rooftop restaurant", "Prepare for departure next day"] }
        ],
        image: "/assets/day4-venice.jpg"
      },    ],
    
    // Hotels
    hotels: [
      {
        city: "Singapore",
        hotelName: "Marina Bay Sands",
        checkIn: "2025-10-31",
        checkOut: "2025-11-02",
        nights: "2"
      },
      {
        city: "Singapore",
        hotelName: "Raffles Hotel Singapore",
        checkIn: "2025-11-02",
        checkOut: "2025-11-04",
        nights: "2"
      },
       {
        city: "Singapore",
        hotelName: "Raffles Hotel Singapore",
        checkIn: "2025-11-02",
        checkOut: "2025-11-04",
        nights: "2"
      },
       {
        city: "Singapore",
        hotelName: "Raffles Hotel Singapore",
        checkIn: "2025-11-02",
        checkOut: "2025-11-04",
        nights: "2"
      },
       {
        city: "Singapore",
        hotelName: "Raffles Hotel Singapore",
        checkIn: "2025-11-02",
        checkOut: "2025-11-04",
        nights: "2"
      },
    ],
    
    // Flights
    flights: [
      {
        date: "2025-10-31",
        details: "Fly Air India Express (IX-223) from Mumbai (BOM) to Singapore (SIN) - Departure: 08:30 AM, Arrival: 04:15 PM"
      },
      {
        date: "2025-11-04",
        details: "Fly Singapore Airlines (SQ-424) from Singapore (SIN) to Mumbai (BOM) - Departure: 11:45 PM, Arrival: 05:30 AM+1"
      },
       {
        date: "2025-11-04",
        details: "Fly Singapore Airlines (SQ-424) from Singapore (SIN) to Mumbai (BOM) - Departure: 11:45 PM, Arrival: 05:30 AM+1"
      },
       {
        date: "2025-11-04",
        details: "Fly Singapore Airlines (SQ-424) from Singapore (SIN) to Mumbai (BOM) - Departure: 11:45 PM, Arrival: 05:30 AM+1"
      },
       {
        date: "2025-11-04",
        details: "Fly Singapore Airlines (SQ-424) from Singapore (SIN) to Mumbai (BOM) - Departure: 11:45 PM, Arrival: 05:30 AM+1"
      },
       {
        date: "2025-11-04",
        details: "Fly Singapore Airlines (SQ-424) from Singapore (SIN) to Mumbai (BOM) - Departure: 11:45 PM, Arrival: 05:30 AM+1"
      }
    ],
    
    // Activities
    activities: [
      {
        city: "Singapore",
        activityName: "Marina Bay Sands SkyPark Observation Deck",
        type: "Sightseeing",
        duration: "2-3 Hours"
      },
      {
        city: "Singapore",
        activityName: "Gardens by the Bay - Cloud Forest & Flower Dome",
        type: "Nature/Sightseeing",
        duration: "3-4 Hours"
      },
      {
        city: "Singapore",
        activityName: "Singapore Zoo & River Wonders",
        type: "Wildlife/Family",
        duration: "Full Day"
      },
      {
        city: "Singapore",
        activityName: "Sentosa Island - Universal Studios",
        type: "Theme Park/Entertainment",
        duration: "Full Day"
      },
       {
        city: "Singapore",
        activityName: "Sentosa Island - Universal Studios",
        type: "Theme Park/Entertainment",
        duration: "Full Day"
      },
       {
        city: "Singapore",
        activityName: "Sentosa Island - Universal Studios",
        type: "Theme Park/Entertainment",
        duration: "Full Day"
      },
    ],
    
    // Payment plan
    paymentPlan: {
      totalAmount: "125000",
      currency: "₹",
      installments: [
        { name: "Booking Amount", amount: "25000", dueDate: "Immediately upon booking" },
        { name: "Second Payment", amount: "50000", dueDate: "45 days before departure" },
        { name: "Final Payment", amount: "50000", dueDate: "15 days before departure" },
        { name: "Final Payment", amount: "50000", dueDate: "15 days before departure" },
        { name: "Final Payment", amount: "50000", dueDate: "15 days before departure" },
        { name: "Final Payment", amount: "50000", dueDate: "15 days before departure" }
      ]
    },
    
    // Inclusions and Exclusions
    inclusions: [
      "4-star hotel accommodation with daily breakfast",
      "Return economy class airfare (Mumbai - Singapore - Mumbai)",
      "Airport transfers in Singapore",
      "All applicable hotel taxes and service charges",
      "Marina Bay Sands SkyPark entry tickets",
      "Gardens by the Bay - Cloud Forest & Flower Dome tickets",
      "Travel insurance (up to 65 years)",
      "GST as applicable"
    ],
    exclusions: [
      "Singapore visa fees (approx ₹3,000 per person)",
      "Meals other than breakfast",
      "Personal expenses (shopping, laundry, telephone calls, etc.)",
      "Optional tours and activities not mentioned in inclusions",
      "Tips and gratuities",
      "Any increase in airfare, hotel tariff, or taxes",
      "Travel insurance for senior citizens above 65 years",
      "Any expenses arising due to unforeseen circumstances"
    ]
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (field, value) => {
    setFormData({
      ...formData,
      paymentPlan: { ...formData.paymentPlan, [field]: value }
    });
  };

  // Day management functions
  const addDay = () => {
    const newDay = {
      number: formData.days.length + 1,
      date: "",
      title: "",
      activities: [
        { time: "Morning", items: [""] },
        { time: "Afternoon", items: [""] },
        { time: "Evening", items: [""] }
      ],
      image: `/assets/day${formData.days.length + 1}-beach.jpg`
    };
    setFormData({ ...formData, days: [...formData.days, newDay] });
  };

  const removeDay = (dayIndex) => {
    const updatedDays = formData.days.filter((_, index) => index !== dayIndex)
      .map((day, index) => ({ ...day, number: index + 1 }));
    setFormData({ ...formData, days: updatedDays });
  };

  const updateDay = (dayIndex, field, value) => {
    const updatedDays = formData.days.map((day, index) => 
      index === dayIndex ? { ...day, [field]: value } : day
    );
    setFormData({ ...formData, days: updatedDays });
  };

  const updateDayActivity = (dayIndex, timeIndex, itemIndex, value) => {
    const updatedDays = formData.days.map((day, dIndex) => {
      if (dIndex === dayIndex) {
        const updatedActivities = day.activities.map((activity, tIndex) => {
          if (tIndex === timeIndex) {
            const updatedItems = [...activity.items];
            updatedItems[itemIndex] = value;
            return { ...activity, items: updatedItems };
          }
          return activity;
        });
        return { ...day, activities: updatedActivities };
      }
      return day;
    });
    setFormData({ ...formData, days: updatedDays });
  };

  const addActivityItem = (dayIndex, timeIndex) => {
    const updatedDays = formData.days.map((day, dIndex) => {
      if (dIndex === dayIndex) {
        const updatedActivities = day.activities.map((activity, tIndex) => {
          if (tIndex === timeIndex) {
            return { ...activity, items: [...activity.items, ""] };
          }
          return activity;
        });
        return { ...day, activities: updatedActivities };
      }
      return day;
    });
    setFormData({ ...formData, days: updatedDays });
  };

  // Hotel management functions
  const addHotel = () => {
    const newHotel = { city: "", hotelName: "", checkIn: "", checkOut: "", nights: "" };
    setFormData({ ...formData, hotels: [...formData.hotels, newHotel] });
  };

  const removeHotel = (index) => {
    const updatedHotels = formData.hotels.filter((_, i) => i !== index);
    setFormData({ ...formData, hotels: updatedHotels });
  };

  const updateHotel = (index, field, value) => {
    const updatedHotels = formData.hotels.map((hotel, i) => 
      i === index ? { ...hotel, [field]: value } : hotel
    );
    setFormData({ ...formData, hotels: updatedHotels });
  };

  // Flight management functions
  const addFlight = () => {
    const newFlight = { date: "", details: "" };
    setFormData({ ...formData, flights: [...formData.flights, newFlight] });
  };

  const removeFlight = (index) => {
    const updatedFlights = formData.flights.filter((_, i) => i !== index);
    setFormData({ ...formData, flights: updatedFlights });
  };

  const updateFlight = (index, field, value) => {
    const updatedFlights = formData.flights.map((flight, i) => 
      i === index ? { ...flight, [field]: value } : flight
    );
    setFormData({ ...formData, flights: updatedFlights });
  };

  // Activity management functions
  const addActivity = () => {
    const newActivity = { city: "", activityName: "", type: "", duration: "" };
    setFormData({ ...formData, activities: [...formData.activities, newActivity] });
  };

  const removeActivity = (index) => {
    const updatedActivities = formData.activities.filter((_, i) => i !== index);
    setFormData({ ...formData, activities: updatedActivities });
  };

  const updateActivity = (index, field, value) => {
    const updatedActivities = formData.activities.map((activity, i) => 
      i === index ? { ...activity, [field]: value } : activity
    );
    setFormData({ ...formData, activities: updatedActivities });
  };

  // Installment management functions
  const addInstallment = () => {
    const newInstallment = { name: "", amount: "", dueDate: "" };
    setFormData({
      ...formData,
      paymentPlan: {
        ...formData.paymentPlan,
        installments: [...formData.paymentPlan.installments, newInstallment]
      }
    });
  };

  const removeInstallment = (index) => {
    const updatedInstallments = formData.paymentPlan.installments.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      paymentPlan: { ...formData.paymentPlan, installments: updatedInstallments }
    });
  };

  const updateInstallment = (index, field, value) => {
    const updatedInstallments = formData.paymentPlan.installments.map((installment, i) => 
      i === index ? { ...installment, [field]: value } : installment
    );
    setFormData({
      ...formData,
      paymentPlan: { ...formData.paymentPlan, installments: updatedInstallments }
    });
  };

  // Inclusions/Exclusions management
  const addInclusion = () => {
    setFormData({ ...formData, inclusions: [...formData.inclusions, ""] });
  };

  const removeInclusion = (index) => {
    const updatedInclusions = formData.inclusions.filter((_, i) => i !== index);
    setFormData({ ...formData, inclusions: updatedInclusions });
  };

  const updateInclusion = (index, value) => {
    const updatedInclusions = formData.inclusions.map((inclusion, i) => 
      i === index ? value : inclusion
    );
    setFormData({ ...formData, inclusions: updatedInclusions });
  };

  const addExclusion = () => {
    setFormData({ ...formData, exclusions: [...formData.exclusions, ""] });
  };

  const removeExclusion = (index) => {
    const updatedExclusions = formData.exclusions.filter((_, i) => i !== index);
    setFormData({ ...formData, exclusions: updatedExclusions });
  };

  const updateExclusion = (index, value) => {
    const updatedExclusions = formData.exclusions.map((exclusion, i) => 
      i === index ? value : exclusion
    );
    setFormData({ ...formData, exclusions: updatedExclusions });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Vigovia Travel Itinerary Builder</h1>
      
      {/* Basic Trip Details */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Trip Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            name="travellerName" 
            placeholder="Traveller Name" 
            value={formData.travellerName}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <input 
            name="tripTitle" 
            placeholder="Trip Title" 
            value={formData.tripTitle}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <input 
            name="departure" 
            placeholder="Departure City" 
            value={formData.departure}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <input 
            name="destination" 
            placeholder="Destination" 
            value={formData.destination}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <input 
            type="date" 
            name="startDate" 
            value={formData.startDate}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <input 
            type="date" 
            name="endDate" 
            value={formData.endDate}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <input 
            name="duration" 
            placeholder="Duration (e.g., 4 Days 3 Nights)" 
            value={formData.duration}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <input 
            name="numberOfTravellers" 
            placeholder="Number of Travellers" 
            value={formData.numberOfTravellers}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Day-wise Itinerary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Day-wise Itinerary</h2>
          <button onClick={addDay} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Day
          </button>
        </div>
        
        {formData.days.map((day, dayIndex) => (
          <div key={dayIndex} className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Day {day.number}</h3>
              {formData.days.length > 1 && (
                <button onClick={() => removeDay(dayIndex)} className="text-red-500 hover:text-red-700">
                  Remove Day
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input 
                placeholder="Date"
                type="date"
                value={day.date}
                onChange={(e) => updateDay(dayIndex, 'date', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Day Title"
                value={day.title}
                onChange={(e) => updateDay(dayIndex, 'title', e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
            
            {/* Activities for each time period */}
            {day.activities.map((activity, timeIndex) => (
              <div key={timeIndex} className="mb-3">
                <h4 className="font-medium mb-2">{activity.time}</h4>
                {activity.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-2 mb-2">
                    <input 
                      placeholder={`${activity.time} activity`}
                      value={item}
                      onChange={(e) => updateDayActivity(dayIndex, timeIndex, itemIndex, e.target.value)}
                      className="border rounded px-3 py-2 flex-1"
                    />
                  </div>
                ))}
                <button 
                  onClick={() => addActivityItem(dayIndex, timeIndex)}
                  className="text-blue-500 text-sm hover:text-blue-700"
                >
                  + Add {activity.time} Activity
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Hotels */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Hotel Details</h2>
          <button onClick={addHotel} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Hotel
          </button>
        </div>
        
        {formData.hotels.map((hotel, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Hotel {index + 1}</h3>
              {formData.hotels.length > 1 && (
                <button onClick={() => removeHotel(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <input 
                placeholder="City"
                value={hotel.city}
                onChange={(e) => updateHotel(index, 'city', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Hotel Name"
                value={hotel.hotelName}
                onChange={(e) => updateHotel(index, 'hotelName', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Check-in Date"
                type="date"
                value={hotel.checkIn}
                onChange={(e) => updateHotel(index, 'checkIn', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Check-out Date"
                type="date"
                value={hotel.checkOut}
                onChange={(e) => updateHotel(index, 'checkOut', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Number of Nights"
                value={hotel.nights}
                onChange={(e) => updateHotel(index, 'nights', e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Flights */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Flight Details</h2>
          <button onClick={addFlight} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Flight
          </button>
        </div>
        
        {formData.flights.map((flight, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Flight {index + 1}</h3>
              {formData.flights.length > 1 && (
                <button onClick={() => removeFlight(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input 
                placeholder="Flight Date"
                type="date"
                value={flight.date}
                onChange={(e) => updateFlight(index, 'date', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Flight Details"
                value={flight.details}
                onChange={(e) => updateFlight(index, 'details', e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Activities */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Activities</h2>
          <button onClick={addActivity} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Activity
          </button>
        </div>
        
        {formData.activities.map((activity, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Activity {index + 1}</h3>
              {formData.activities.length > 1 && (
                <button onClick={() => removeActivity(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <input 
                placeholder="City"
                value={activity.city}
                onChange={(e) => updateActivity(index, 'city', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Activity Name"
                value={activity.activityName}
                onChange={(e) => updateActivity(index, 'activityName', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Type"
                value={activity.type}
                onChange={(e) => updateActivity(index, 'type', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Duration"
                value={activity.duration}
                onChange={(e) => updateActivity(index, 'duration', e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Payment Plan */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Payment Plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input 
            placeholder="Total Amount"
            value={formData.paymentPlan.totalAmount}
            onChange={(e) => handlePaymentChange('totalAmount', e.target.value)}
            className="border rounded px-3 py-2"
          />
          <select 
            value={formData.paymentPlan.currency}
            onChange={(e) => handlePaymentChange('currency', e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="₹">₹ (INR)</option>
            <option value="$">$ (USD)</option>
            <option value="€">€ (EUR)</option>
          </select>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Installments</h3>
          <button onClick={addInstallment} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Installment
          </button>
        </div>
        
        {formData.paymentPlan.installments.map((installment, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium">Installment {index + 1}</h4>
              {formData.paymentPlan.installments.length > 1 && (
                <button onClick={() => removeInstallment(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input 
                placeholder="Installment Name"
                value={installment.name}
                onChange={(e) => updateInstallment(index, 'name', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Amount"
                value={installment.amount}
                onChange={(e) => updateInstallment(index, 'amount', e.target.value)}
                className="border rounded px-3 py-2"
              />
              <input 
                placeholder="Due Date"
                value={installment.dueDate}
                onChange={(e) => updateInstallment(index, 'dueDate', e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Inclusions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Inclusions</h2>
          <button onClick={addInclusion} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Inclusion
          </button>
        </div>
        
        {formData.inclusions.map((inclusion, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input 
              placeholder="Inclusion item"
              value={inclusion}
              onChange={(e) => updateInclusion(index, e.target.value)}
              className="border rounded px-3 py-2 flex-1"
            />
            {formData.inclusions.length > 1 && (
              <button onClick={() => removeInclusion(index)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Exclusions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Exclusions</h2>
          <button onClick={addExclusion} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Exclusion
          </button>
        </div>
        
        {formData.exclusions.map((exclusion, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input 
              placeholder="Exclusion item"
              value={exclusion}
              onChange={(e) => updateExclusion(index, e.target.value)}
              className="border rounded px-3 py-2 flex-1"
            />
            {formData.exclusions.length > 1 && (
              <button onClick={() => removeExclusion(index)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {/* PDF Generation */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <BlobProvider document={<ItineraryPDF data={formData} />}>
          {({ blob, url, loading, error }) => {
            if (error) {
              console.error('PDF Error:', error);
              return <div className="text-red-500">Error generating PDF: {error.message}</div>;
            }
            
            return loading ? (
              <button className="bg-purple-700 text-white px-6 py-3 rounded-lg w-full" disabled>
                Generating PDF...
              </button>
            ) : (
              <a
                href={url}
                download={`${formData.travellerName || "itinerary"}_itinerary.pdf`}
                className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition text-center block w-full"
              >
                Download Itinerary PDF
              </a>
            );
          }}
        </BlobProvider>
      </div>
    </div>
  );
}