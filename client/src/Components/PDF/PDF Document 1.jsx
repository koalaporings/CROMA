import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        color: "black",
        flexDirection: "row",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: window.innerWidth,
        height: window.innerHeight,
    }
})

function PDFdocument(data){
    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Name: {data.last_name}, {data.first_name} {data.middle_initial}</Text>

                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}