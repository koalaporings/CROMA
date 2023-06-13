import { width } from "@mui/system";
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from "@react-pdf/renderer";
import { Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";

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
        height: "50vh",
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

    const [file, setFile] = useState();

    const getImagevalue = async () => {
        const response = await axios.get('http://ec2-3-26-146-89.ap-southeast-2.compute.amazonaws.com:5000/form_api/get/' + docdata.docData.transaction_id)
        console.log(response)
        setFile(Buffer.from(response.data[0].file.data))
      }
    
      useEffect(()=>{
        if(!file){
          getImagevalue()
        }
      },[])

    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.title}>Request for {docdata.docData.form_name}</Text>
                    <View style={styles.section}>
                        <View style={styles.row}>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Name:  </Text>{docdata.docData.last_name}, {docdata.docData.first_name} {docdata.docData.middle_initial}</Text>
                            
                        </View>
                        
                        <View style={styles.row}>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Student Number:  </Text>{docdata.docData.student_number}</Text>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Degree Program:  </Text>{docdata.docData.degree_program}</Text>
                        </View>
                        <Text style={styles.break}> </Text>
                        <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Email Address:  </Text>{docdata.docData.email}</Text>
                        
                        <View style={styles.row}>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Purpose:  </Text>{docdata.docData.purpose}</Text>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>No. of Copies:  </Text>{docdata.docData.num_copies}</Text>
                        </View>
                        {!file ? 
                        <View></View>
                        :
                        <View style={styles.section}>
                            <Text style={styles.break}> </Text>
                            <Text style={styles.info}><Text style={{ fontFamily: 'Helvetica-Bold' }}>Proof of Payment:  </Text></Text>
                            <Image src={`data:image/jpeg;base64,${file.toString('base64')}`}/>
                        </View>
                    }

                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default PDFdocument;