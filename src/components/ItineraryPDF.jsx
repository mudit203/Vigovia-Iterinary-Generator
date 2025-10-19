import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { commonStyles, colors } from "./pdf/styles";
import Header from "./pdf/Header";
import HeroBanner from "./pdf/HeroBanner";
import TripDetailsCard from "./pdf/TripDetailsCard";
import DayCard from "./pdf/DayCard";
import Footer from "./pdf/Footer";
import TableSection from "./pdf/TableSection";
import FlightCard from "./pdf/FlightCard";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
  },
  sectionTitleHighlight: {
    color: "#A855F7",
  },
  noteText: {
    fontSize: 9,
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 1.5,
  },
  listItem: {
    fontSize: 10,
    marginBottom: 5,
    lineHeight: 1.5,
  },
  linkText: {
    fontSize: 12,
    color: colors.blue,
    textDecoration: "underline",
    marginBottom: 20,
  },
  visaCard: {
    border: `1px solid ${colors.accentPurple}`,
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },
  visaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  visaField: {
    flex: 1,
  },
  visaLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  visaValue: {
    fontSize: 10,
  },
  ctaContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  ctaHeading: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.darkPurple,
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: colors.primaryPurple,
    color: colors.white,
    padding: 15,
    borderRadius: 30,
    fontSize: 16,
    fontWeight: "bold",
  },
  paymentCard: {
    flexDirection: "row",
    border: `1px solid ${colors.accentPurple}`,
    borderRadius: 15,
    marginBottom: 10,
    overflow: "hidden",
  },
  paymentLabel: {
    backgroundColor: colors.lightPurple,
    padding: 15,
    width: 150,
    justifyContent: "center",
  },
  paymentValue: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  paymentText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default function ItineraryPDF({ data }) {
  // Transform form data to PDF format
  const pdfData = {
    greeting: `Hi ${data.travellerName}!`,
    destination: data.destination,
    duration: data.duration,
    tripDetails: {
      departureFrom: data.departure,
      departureDate: data.startDate,
      arrivalDate: data.endDate,
      destination: data.destination,
      travellers: data.numberOfTravellers,
    },
    days: data.days.map(day => ({
      number: day.number,
      date: new Date(day.date).toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'long' 
      }) || day.date,
      title: day.title,
      image: day.image,
      activities: day.activities.map(activity => ({
        time: activity.time,
        items: activity.items.filter(item => item.trim() !== "")
      })).filter(activity => activity.items.length > 0)
    })),
    flights: data.flights
      .filter(flight => flight && flight.details && flight.details.trim() !== "")
      .map(flight => ({
        date: flight.date ? new Date(flight.date).toLocaleDateString('en-GB', { 
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        }) : flight.date || "TBD",
        details: flight.details
      })),
    hotels: data.hotels
      .filter(hotel => hotel && (hotel.city || hotel.hotelName || hotel.checkIn || hotel.checkOut || hotel.nights))
      .map(hotel => [
        hotel.city || "",
        hotel.checkIn || "",
        hotel.checkOut || "",
        hotel.nights || "",
        hotel.hotelName || ""
      ]),
    activities: data.activities
      .filter(activity => activity && (activity.city || activity.activityName || activity.type || activity.duration))
      .map(activity => [
        activity.city || "",
        activity.activityName || "",
        activity.type || "",
        activity.duration || ""
      ]),
    paymentPlan: data.paymentPlan,
    inclusions: data.inclusions.filter(inclusion => inclusion && inclusion.trim() !== ""),
    exclusions: data.exclusions.filter(exclusion => exclusion && exclusion.trim() !== "")
  };

  // Calculate how many days can fit per page (roughly 2 days per page)
  const daysPerPage = 2;
  const firstPageDays = pdfData.days.slice(0, 1); // First day on page 1
  const remainingDays = pdfData.days.slice(1);
  
  const dayPages = [];
  for (let i = 0; i < remainingDays.length; i += daysPerPage) {
    dayPages.push(remainingDays.slice(i, i + daysPerPage));
  }

  return (
    <Document>
      {/* Page 1: Hero, Trip Overview & Day 1 */}
      <Page size="A4" style={commonStyles.page}>
        <View style={commonStyles.pageContent}>
          <Header />
          <HeroBanner 
            greeting={pdfData.greeting}
            destination={pdfData.destination}
            duration={pdfData.duration}
          />
          <TripDetailsCard details={pdfData.tripDetails} />
          
          {/* Include Day 1 on first page */}
          {firstPageDays.map((day) => (
            <DayCard key={day.number} day={day} />
          ))}
        </View>
        <Footer />
      </Page>

      Dynamic Day Pages for remaining days
      {dayPages.map((daysOnPage, pageIndex) => (
        <Page key={`day-page-${pageIndex}`} size="A4" style={commonStyles.page}>
          <View style={commonStyles.pageContent}>
            <Header />
            {daysOnPage.map((day) => (
              <DayCard key={day.number} day={day} />
            ))}
          </View>
          <Footer />
        </Page>
      ))}

      {/* Flight Summary Page (only if flights exist) */}
      {pdfData.flights.length > 0 && (
        <Page size="A4" style={commonStyles.page}>
          <View style={commonStyles.pageContent}>
            <Text style={styles.sectionTitle}>
              Flight <Text style={styles.sectionTitleHighlight}>Summary</Text>
            </Text>
            
            {pdfData.flights.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))}
            
            <Text style={styles.noteText}>
              Note: All flights include meals, seat choice (excluding XL), and 20kg/25Kg checked baggage.
            </Text>
          </View>
          <Footer />
        </Page>
      )}

      {/* Hotel Bookings Page (only if hotels exist) */}
      {pdfData.hotels.length > 0 && (
        <Page size="A4" style={commonStyles.page}>
          <View style={commonStyles.pageContent}>
            <TableSection
              title="Hotel Bookings"
              headers={["City", "Check In", "Check Out", "Nights", "Hotel Name"]}
              rows={pdfData.hotels}
              columnWidths={[1, 1, 1, 0.5, 2]}
            />
            
            <Text style={styles.listItem}>1. All hotels are tentative and can be replaced with similar.</Text>
            <Text style={styles.listItem}>2. Breakfast included for all hotel stays.</Text>
            <Text style={styles.listItem}>3. All Hotels will be 4* and above category</Text>
            <Text style={styles.listItem}>4. A maximum occupancy of 2 people/room is allowed in most hotels.</Text>
          </View>
          <Footer />
        </Page>
      )}

      {/* Activity Table Page (only if activities exist) */}
      {pdfData.activities.length > 0 && (
        <Page size="A4" style={commonStyles.page}>
          <View style={commonStyles.pageContent}>
            <Text style={styles.sectionTitle}>
              Activity <Text style={styles.sectionTitleHighlight}>Table</Text>
            </Text>
            
            <TableSection
              headers={["City", "Activity", "Type", "Time Required"]}
              rows={pdfData.activities}
              columnWidths={[1, 2, 1, 1]}
            />
          </View>
          <Footer />
        </Page>
      )}

      {/* Inclusions/Exclusions Page */}
      {(pdfData.inclusions.length > 0 || pdfData.exclusions.length > 0) && (
        <Page size="A4" style={commonStyles.page}>
          <View style={commonStyles.pageContent}>
            {pdfData.inclusions.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>
                  Inclusion <Text style={styles.sectionTitleHighlight}>Summary</Text>
                </Text>
                {pdfData.inclusions.map((inclusion, index) => (
                  <Text key={index} style={styles.listItem}>• {inclusion}</Text>
                ))}
              </>
            )}
            
            {pdfData.exclusions.length > 0 && (
              <>
                <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
                  <Text style={styles.sectionTitleHighlight}>Exclusions</Text>
                </Text>
                {pdfData.exclusions.map((exclusion, index) => (
                  <Text key={index} style={styles.listItem}>• {exclusion}</Text>
                ))}
              </>
            )}
          </View>
          <Footer />
        </Page>
      )}

      {/* Payment Plan Page */}
      <Page size="A4" style={commonStyles.page}>
        <View style={commonStyles.pageContent}>
          <Text style={styles.sectionTitle}>
            Payment <Text style={styles.sectionTitleHighlight}>Plan</Text>
          </Text>
          
          <View style={styles.paymentCard}>
            <View style={styles.paymentLabel}>
              <Text style={styles.paymentText}>Total Amount</Text>
            </View>
            <View style={styles.paymentValue}>
              <Text style={styles.paymentText}>
                {pdfData.paymentPlan.currency} {pdfData.paymentPlan.totalAmount} for {pdfData.tripDetails.travellers} pax
              </Text>
            </View>
          </View>
          
          {pdfData.paymentPlan.installments.length > 0 && (
            <TableSection
              headers={["Installment", "Amount", "Due Date"]}
              rows={pdfData.paymentPlan.installments.map(installment => [
                installment.name,
                `${pdfData.paymentPlan.currency}${installment.amount}`,
                installment.dueDate
              ])}
              columnWidths={[1, 1, 1.5]}
            />
          )}
        </View>
        <Footer />
      </Page>

      {/* Final CTA Page */}
      <Page size="A4" style={commonStyles.page}>
        <View style={commonStyles.pageContent}>
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaHeading}>PLAN.PACK.GO!</Text>
            <Text style={styles.ctaButton}>Book Now</Text>
          </View>
        </View>
        <Footer />
      </Page>
    </Document>
  );
}