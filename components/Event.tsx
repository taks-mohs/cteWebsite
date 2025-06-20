import { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import Event from "../modules/google/events";
import { Link } from "expo-router";
import Colors from "./colors";

type EventCardProps = {
   event: Event;
   //location?: string; // Optional location prop
   //description?: string; // Optional description prop
};

export default function EventCard({ event }: EventCardProps): ReactElement {
   const timeString = event.endTime()
      ? `${event.startTime().toLocaleTimeString()} - ${event.endTime().toLocaleTimeString()}`
      : event.startTime().toLocaleTimeString();

   return (
      <>
         <Link href={event.link()} style={styles.card}>
            {/* The following view wraps around date and event information */}
            <View style={{ flexDirection: 'row', height: "100%", width: "100%", alignItems: 'center' }}>
               {/* The following view is the date portion of the event */}
               <View style={[styles.card, { justifyContent: "center", height: "100%", backgroundColor: Colors.secondary }]}>
                  <View style={styles.dateStyle}>
                     {/* <Text style={styles.itemTitle}>Date:</Text>
                     <Text style={styles.item}>{event.startTime().toDateString()}</Text> */}
                     <Text style={{ fontSize: 30, marginBottom: -15 }}>{event.startTime().toDateString().split(" ")[0]}</Text>
                     <View style={[styles.item, { flexDirection: 'row' }]}>
                        <Text style={{ fontSize: 40, fontFamily: "oswaldsemibold", color: Colors.primary }}>{event.startTime().toDateString().split(" ")[1]}</Text>
                        <Text style={{ fontSize: 40, fontFamily: "oswaldsemibold", color: Colors.primary }}>{event.startTime().toDateString().split(" ")[2]}</Text>
                     </View>

                     <Text style={{ fontSize: 30, marginTop: -10 }}>{event.startTime().toDateString().split(" ")[3]}</Text>
                  </View>
               </View>
               {/* The following View is the info part of the event */}
               <View style={[styles.card, { justifyContent: "flex-start", height: "100%" }]}>
                  <View style={styles.row}>
                     {/* <Text style={styles.itemTitle}>Event:   </Text> */}
                     <Text style={[styles.itemTitle, {fontSize: 20}]}>{event.summary()}</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.itemTitle}>Time: </Text>
                     <Text style={styles.item}>{timeString}</Text>
                  </View>
                   <View style={styles.row}>
                     <Text style={styles.itemTitle}>Location: </Text>
                     <Text style={styles.item}>{event.location()}</Text>
                  </View>
                        <Text> </Text>
                  <View>
                  </View>
                  <View style={styles.row}>
                     {/* <Text style={styles.itemTitle}>Details: </Text> */}
                     <Text style={styles.item}>{event.description()}</Text>
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
      paddingTop: 8,
      marginLeft: 4,
      marginRight: 4,
      borderRadius: 12,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 1,
      borderColor: "rgba(15, 1, 1, 0.4)",
      height: 210,
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
      marginRight: 5, // Add margin to the right for better spacing
      //height: 50,
   },

   /* Item text style */
   item: {
      fontSize: 16,
      fontFamily: "oswaldlight", // Light Oswald font family
      color: "#000", // Black text color
      //flexShrink: 1, // Make text flexible and shrinkable
      alignItems: "center",
      //marginBottom: 1,
      //height: 50,
   },

   /* Date block text style*/
   dateStyle: {
      fontSize: 16,
      fontFamily: "oswaldlight", // Light Oswald font family
      color: Colors.primary, // Black text color
      //flexShrink: 1, // Make text flexible and shrinkable
      alignItems: "center",
      //marginBottom: 1,
      //height: 50,
   },
});
