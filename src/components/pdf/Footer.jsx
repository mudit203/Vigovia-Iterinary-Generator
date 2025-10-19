import { View, Text } from "@react-pdf/renderer";
import { footerStyles } from "./styles";

export default function Footer() {
  return (
    <View style={footerStyles.container}>
      <View style={footerStyles.row}>
        <View style={footerStyles.companyInfo}>
          <Text style={footerStyles.companyName}>Vigovia Tech Pvt. Ltd</Text>
          <Text style={footerStyles.companyAddress}>
            Registered Office: Hd-109 Cinnabar Hills,{"\n"}
            Links Business Park, Karnataka, India.
          </Text>
        </View>
        
        <View style={footerStyles.contactInfo}>
          <Text>Phone: +91-9504061112</Text>
          <Text>Email ID: Utkarsh@Vigovia.Com</Text>
          <Text>CIN: U79110KA2024PTC191890</Text>
        </View>
        
        <View style={footerStyles.logo}>
          <Text style={footerStyles.logoText}>vigovia</Text>
          <Text style={footerStyles.logoTagline}>PLAN.PACK.GO</Text>
        </View>
      </View>
    </View>
  );
}