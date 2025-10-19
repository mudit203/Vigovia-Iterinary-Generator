import { View, Text } from "@react-pdf/renderer";
import { heroStyles } from "./styles";

export default function HeroBanner({ greeting, destination, duration }) {
  return (
    <View style={heroStyles.container}>
      <Text style={heroStyles.greeting}>{greeting}</Text>
      <Text style={heroStyles.destination}>{destination}</Text>
      <Text style={heroStyles.duration}>{duration}</Text>
    </View>
  );
}