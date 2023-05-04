import { width } from "@mui/system";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        color: "black",
        flexDirection: "column",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: 850,
        height: 650,
    },
    title:{
        marginTop: 40,
        textAlign: "center",
        fontSize: "20px",
        color: "",
        fontWeight: "black"
    },
    info: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 20,
        textAlign: "left",
        fontSize: "14px",
    }
})

function PDFdocument(docData){
    console.log(docData)
    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.title}>True Copy of Grades</Text>
                    <View style={styles.section}>
                        <Text style={styles.info}>Name: {docData.docData.last_name}, {docData.docData.first_name} {docData.docData.middle_initial}</Text>
                        <Text style={styles.info}>Student Number: {docData.docData.student_number}</Text>

                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default PDFdocument;