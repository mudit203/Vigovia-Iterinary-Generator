import { StyleSheet } from "@react-pdf/renderer";

// Color palette
export const colors = {
  primaryPurple: "#342766",
  darkPurple: "#321e5d",
  lightPurple: "#f9eeff",
  mediumPurple: "#e8d5ff",
  accentPurple: "#541c9c",
  white: "#ffffff",
  black: "#000000",
  gray: "#777777",
  lightGray: "#f9fafb",
  textGray: "#555555",
  blue: "#2f80ed",
};

// Common styles
export const commonStyles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: colors.black,
    position: 'relative',
  },
  
  pageContent: {
    flex: 1,
    paddingBottom: 100,
  },
  
  // Typography
  heading1: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heading2: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heading3: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
  },
  boldText: {
    fontWeight: "bold",
  },
  
  // Layout
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  
  // Borders and backgrounds
  border: {
    border: `1px solid ${colors.gray}`,
  },
  borderPurple: {
    border: `1px solid ${colors.accentPurple}`,
  },
  roundedBorder: {
    border: `1px solid ${colors.accentPurple}`,
    borderRadius: 30,
    padding: 15,
  },
  purpleBackground: {
    backgroundColor: colors.primaryPurple,
    color: colors.white,
  },
  lightPurpleBackground: {
    backgroundColor: colors.lightPurple,
  },
  
  // Spacing
  mb10: { marginBottom: 10 },
  mb20: { marginBottom: 20 },
  mb30: { marginBottom: 30 },
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  p10: { padding: 10 },
  p15: { padding: 15 },
  p20: { padding: 20 },
});

// Header styles
export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primaryPurple,
    marginBottom: 3,
  },
  logoVi: {
    color: colors.primaryPurple,
  },
  logoGo: {
    color: "#A855F7",
  },
  tagline: {
    fontSize: 10,
    color: colors.darkPurple,
    letterSpacing: 0.5,
  },
  divider: {
    width: 60,
    height: 1,
    backgroundColor: colors.darkPurple,
    marginTop: 3,
    borderStyle: "dashed",
  },
});

// Hero banner styles
export const heroStyles = StyleSheet.create({
  container: {
    backgroundColor: "#7B68EE",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  greeting: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 6,
  },
  destination: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 6,
  },
  duration: {
    fontSize: 22,
    color: colors.white,
    marginBottom: 8,
  },
  iconsRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
});

// Trip details card styles
export const tripDetailsStyles = StyleSheet.create({
  container: {
    border: `1px solid ${colors.accentPurple}`,
    borderRadius: 20,
    padding: 12,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  field: {
    flex: 1,
  },
  label: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 3,
  },
  value: {
    fontSize: 8,
  },
});

// Day card styles
export const dayCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 25,
    paddingBottom: 25,
    borderBottom: `1px solid ${colors.gray}`,
  },
  dayLabel: {
    backgroundColor: colors.primaryPurple,
    color: colors.white,
    padding: 10,
    borderRadius: 20,
    width: 50,
    minHeight: 180,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    flexShrink: 0,
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    transform: "rotate(-90deg)",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 12,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    minWidth: 0,
  },
  dateTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 10,
    lineHeight: 1.3,
  },
  timeline: {
    flexDirection: "row",
    minHeight: 150,
  },
  timelineBar: {
    width: 15,
    marginRight: 10,
    alignItems: "center",
    flexDirection: "column",
    flexShrink: 0,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primaryPurple,
    marginVertical: 0,
  },
  timelineLine: {
    width: 2,
    height: 45,
    backgroundColor: colors.primaryPurple,
    marginVertical: 3,
  },
  activities: {
    flex: 1,
    flexDirection: "column",
    minWidth: 0,
  },
  activity: {
    marginBottom: 18,
    minHeight: 45,
  },
  activityTime: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4,
  },
  activityText: {
    fontSize: 8,
    lineHeight: 1.5,
    marginBottom: 2,
  },
});

// Table styles
export const tableStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    backgroundColor: colors.primaryPurple,
    borderRadius: "30px",
    padding: 12,
  },
  headerCell: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: colors.lightPurple,
    padding: 12,
    borderBottom: `1px solid ${colors.white}`,
  },
  cell: {
    fontSize: 10,
    flex: 1,
    textAlign: "center",
  },
 
});

// Footer styles
export const footerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    paddingTop: 20,
    borderTop: `1px solid ${colors.gray}`,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  companyAddress: {
    fontSize: 10,
    lineHeight: 1.5,
  },
  contactInfo: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
  },
  logo: {
    alignItems: "center",
  },
  logoText: {
    fontSize: 34,
    fontWeight: "bold",
    color: colors.primaryPurple,
  },
  logoTagline: {
    fontSize: 12,
    color: colors.darkPurple,
  },
});

// Flight card styles
export const flightStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    border: `1px solid ${colors.accentPurple}`,
    borderRadius: 15,
    marginBottom: 10,
    overflow: "hidden",
  },
  dateSection: {
    backgroundColor: colors.lightPurple,
    padding: 15,
    width: 150,
    justifyContent: "center",
    position: "relative",
  },
  dateText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  arrow: {
    position: "absolute",
    right: -10,
    width: 0,
    height: 0,
    borderTop: "35px solid transparent",
    borderBottom: "35px solid transparent",
    borderLeft: `10px solid ${colors.lightPurple}`,
  },
  detailsSection: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  flightText: {
    fontSize: 12,
  },
});

// Payment plan styles
export const paymentStyles = StyleSheet.create({
  amountCard: {
    flexDirection: "row",
    border: `1px solid ${colors.accentPurple}`,
    borderRadius: 15,
    marginBottom: 10,
    overflow: "hidden",
  },
  labelSection: {
    backgroundColor: colors.lightPurple,
    padding: 15,
    width: 150,
  },
  valueSection: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
  },
});

// CTA styles
export const ctaStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.darkPurple,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primaryPurple,
    color: colors.white,
    padding: "15px 40px",
    borderRadius: 30,
    fontSize: 16,
    fontWeight: "bold",
  },
});