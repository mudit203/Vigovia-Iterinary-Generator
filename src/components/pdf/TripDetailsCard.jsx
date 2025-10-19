import { View, Text } from "@react-pdf/renderer";
import { tripDetailsStyles } from "./styles";

export default function TripDetailsCard({ details }) {
  return (
    <View style={tripDetailsStyles.container}>
      <View style={tripDetailsStyles.row}>
        <View style={tripDetailsStyles.field}>
          <Text style={tripDetailsStyles.label}>Departure From :</Text>
          <Text style={tripDetailsStyles.value}>{details.departureFrom}</Text>
        </View>
        <View style={tripDetailsStyles.field}>
          <Text style={tripDetailsStyles.label}>Departure :</Text>
          <Text style={tripDetailsStyles.value}>{details.departureDate}</Text>
        </View>
        <View style={tripDetailsStyles.field}>
          <Text style={tripDetailsStyles.label}>Arrival :</Text>
          <Text style={tripDetailsStyles.value}>{details.arrivalDate}</Text>
        </View>
        <View style={tripDetailsStyles.field}>
          <Text style={tripDetailsStyles.label}>Destination :</Text>
          <Text style={tripDetailsStyles.value}>{details.destination}</Text>
        </View>
        <View style={tripDetailsStyles.field}>
          <Text style={tripDetailsStyles.label}>No. Of Travellers :</Text>
          <Text style={tripDetailsStyles.value}>{details.travellers}</Text>
        </View>
      </View>
    </View>
  );
}