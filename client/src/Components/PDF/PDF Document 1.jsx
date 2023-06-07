import { width } from "@mui/system";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { Row } from "react-bootstrap";

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
        width: "75vw",
        height: "25vh",
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
    },
    break: {
        marginTop: 10,
        fontSize: "10px",
    },
    row: {
        flexDirection: "row",
    },
    bold: {

    }
})

function PDFdocument(docdata){
    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.title}>Request for</Text>
                    <View style={styles.section}>
                        {/* <View style={styles.row}>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Name:  </Text>{docdata.docdata.last_name}, {docdata.docdata.first_name} {docdata.docdata.middle_initial}</Text>
                            
                        </View>
                        
                        <View style={styles.row}>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Student Number:  </Text>{docdata.docdata.student_number}</Text>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Degree Program:  </Text>{docdata.docdata.degree_program}</Text>
                        </View>
                        <Text style={styles.break}> </Text>
                        <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Email Address:  </Text>{docdata.docdata.email}</Text>
                        
                        <View style={styles.row}>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Purpose:  </Text>{docdata.docdata.purpose}</Text>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>No. of Copies:  </Text>{docdata.docdata.num_copies}</Text>
                        </View> */}

                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default PDFdocument;