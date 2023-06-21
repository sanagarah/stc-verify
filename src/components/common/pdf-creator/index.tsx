import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

interface PDFCreatorInterface {
  idNumber: string;
  referenceNumber: string;
}

// Create Document Component
export default function PDFCreator({
  idNumber,
  referenceNumber,
}: PDFCreatorInterface) {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>This is your certification from STC bank.</Text>
            <Text>We have verified your following data</Text>
          </View>
          <View style={styles.section}>
            <Text>Your id number is : {idNumber}</Text>
          </View>
          <View style={styles.section}>
            <Text>Your referenceNumber is : {referenceNumber}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
