import { View, Text, Image } from "@react-pdf/renderer";
import { headerStyles } from "./styles";

export default function Header() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.logo}>
        <Text style={headerStyles.logoVi}>vi</Text>
        <Text style={headerStyles.logoGo}>go</Text>
        <Text style={headerStyles.logoVi}>via</Text>
      </Text>
      <View style={headerStyles.divider} />
      <Text style={headerStyles.tagline}>PLAN.PACK.GO</Text>
    </View>
  );
}