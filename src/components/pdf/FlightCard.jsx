import { View, Text } from "@react-pdf/renderer";
import { flightStyles } from "./styles";

export default function FlightCard({ flight }) {
  return (
    <View style={flightStyles.card}>
      <View style={flightStyles.dateSection}>
        <Text style={flightStyles.dateText}>{flight.date}</Text>
      </View>
      <View style={flightStyles.detailsSection}>
        <Text style={flightStyles.flightText}>{flight.details}</Text>
      </View>
    </View>
  );
}