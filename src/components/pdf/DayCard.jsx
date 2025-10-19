import { View, Text, Image } from "@react-pdf/renderer";
import { dayCardStyles } from "./styles";

export default function DayCard({ day }) {
  return (
    <View style={dayCardStyles.container} wrap={false}>
      <View style={dayCardStyles.dayLabel}>
        <Text style={dayCardStyles.dayText}>Day {day.number}</Text>
      </View>
      
      {/* Only render image if it exists and is a valid path */}
      {day.image && (
        <View style={dayCardStyles.imageContainer}>
          <Image src={day.image} style={dayCardStyles.image} />
        </View>
      )}
      
      <View style={dayCardStyles.content}>
        <Text style={dayCardStyles.dateTitle}>{day.date}</Text>
        <Text style={dayCardStyles.subtitle}>{day.title}</Text>
        
        <View style={dayCardStyles.timeline}>
          <View style={dayCardStyles.timelineBar}>
            {day.activities.map((_, index) => (
              <View key={index} style={{ alignItems: "center" }}>
                <View style={dayCardStyles.timelineDot} />
                {index < day.activities.length - 1 && (
                  <View style={dayCardStyles.timelineLine} />
                )}
              </View>
            ))}
          </View>
          
          <View style={dayCardStyles.activities}>
            {day.activities.map((activity, index) => (
              <View key={index} style={dayCardStyles.activity}>
                <Text style={dayCardStyles.activityTime}>{activity.time}</Text>
                {activity.items.map((item, i) => (
                  <Text key={i} style={dayCardStyles.activityText}>• {item}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}