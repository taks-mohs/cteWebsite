import { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import Event from "../modules/google/events";

type EventCardProps = {
   event: Event
};
export default function EventCard({ event }: EventCardProps): ReactElement {
   return (
      <>
         <View style={styles.card}>
            <View style={styles.row}>
               <Text style={styles.itemTitle}>Event:</Text>
               <Text style={styles.item}>hello world</Text>
            </View>
         </View>
      </>
   );
}
const styles = StyleSheet.create({
   card: {
      backgroundColor: 'rgba(128, 128, 128, 0.3)', // semi-transparent gray
      padding: 16,
      borderRadius: 12,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 1,
      borderColor: 'rgba(128, 128, 128, 0.4)',
   },
   row: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   itemTitle: {
      fontSize: 16,
      fontFamily: 'oswaldsemibold',
      color: '#333',
      marginRight: 8,
   },
   item: {
      fontFamily: 'oswaldlight',
      fontSize: 16,
      color: '#000',
      flexShrink: 1,
   },
});

