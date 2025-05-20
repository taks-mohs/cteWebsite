import { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import Event from "../modules/google/events";
import { Link } from "expo-router";

type EventCardProps = {
   event: Event;
};

export default function EventCard({ event }: EventCardProps): ReactElement {
   const timeString = event.endTime()
      ? `${event.startTime().toLocaleTimeString()} - ${event.endTime().toLocaleTimeString()}`
      : event.startTime().toLocaleTimeString();

   return (
      <>
         <Link href={event.link()} style={styles.card}>
            <View style={{ flexDirection: 'row', height: "100%", width: "100%", alignItems: 'center' }}>
               <View style={[styles.card, { justifyContent: "center", height: "100%" }]}>
                  <View style={styles.row}>
                     <Text style={styles.itemTitle}>Date:</Text>
                     <Text style={styles.item}>{event.startTime().toDateString()}</Text>
                  </View>
               </View>
               <View style={styles.card}>
                  <View style={styles.row}>
                     <Text style={styles.itemTitle}>Event:</Text>
                     <Text style={styles.item}>{event.summary()}</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.itemTitle}>Details:</Text>
                     <Text style={styles.item}>{event.description()}</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.itemTitle}>Time:</Text>
                     <Text style={styles.item}>{timeString}</Text>
                  </View>
               </View>
            </View>

         </Link >
      </>
   );
}

const styles = StyleSheet.create({
   /* Card container style */
   card: {
      backgroundColor: "rgba(128, 128, 128, 0.3)",
      padding: 16,
      borderRadius: 12,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 1,
      borderColor: "rgba(128, 128, 128, 0.4)",
   },

   /* Horizontal row container style */
   row: {
      flexDirection: "row",
      alignItems: "center",
   },

   /* Title text style */
   itemTitle: {
      fontSize: 16,
      fontFamily: "oswaldsemibold", // Bold Oswald font family
      color: "#333", // Dark gray text color
      marginRight: 8, // Add margin to the right for better spacing
   },

   /* Item text style */
   item: {
      fontSize: 16,
      fontFamily: "oswaldlight", // Light Oswald font family
      color: "#000", // Black text color
      flexShrink: 1, // Make text flexible and shrinkable
   },
});
