// import React from "react";
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   Image,
//   Font,
// } from "@react-pdf/renderer";
// import logo from "../assets/logo.png"; // Update path if needed

// const styles = StyleSheet.create({
//   page: {
//     padding: 20,
//     fontSize: 10,
//     fontFamily: "Helvetica",
//   },
//   centerText: {
//     textAlign: "center",
//   },
//   companyName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 2,
//   },
//   invoiceTitle: {
//     fontSize: 12,
//     marginBottom: 10,
//   },
//   topRow: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     marginBottom: 10,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//   },
//   middleRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   section: {
//     width: "48%",
//   },
//   sectionTitle: {
//     fontSize: 11,
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   rightText: {
//     textAlign: "right",
//   },
//   tableContainer: {
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     backgroundColor: "#f9f9f9",
//     padding: 2,
//   },
//   table: {
//     display: "table",
//     width: "100%",
//     borderStyle: "solid",
//     borderWidth: 1,
//   },
//   tableRow: {
//     flexDirection: "row",
//   },
//   tableColHeader: {
//     width: "12.5%",
//     padding: 4,
//     backgroundColor: "#e0e0e0",
//     fontWeight: "bold",
//     borderStyle: "solid",
//     borderWidth: 1,
//   },
//   tableCol: {
//     width: "12.5%",
//     padding: 4,
//     borderStyle: "solid",
//     borderWidth: 1,
//   },
//   gstSummaryBox: {
//     marginTop: 10,
//     alignSelf: "flex-end",
//     width: "50%",
//     padding: 6,
//     backgroundColor: "#f8f8f8",
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   totalText: {
//     fontWeight: "bold",
//     marginTop: 4,
//   },
// });

// const InvoicePDF = ({
//   profile,
//   shippingAddress,
//   invoiceNumber,
//   currentDate,
//   processItems,
//   gstGroupSummary,
//   gstTotal,
//   grandTotal,
// }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       {/* Header */}
//       <View style={styles.centerText}>
//         <Text style={styles.companyName}>Herbs & Spices</Text>
//         <Text style={styles.invoiceTitle}>Tax Invoice</Text>
//       </View>

//       {/* Logo Row */}
//       <View style={styles.topRow}>
//         <Image style={styles.logo} src={logo} />
//       </View>

//       {/* Middle Row: Customer Left | Invoice Info Right */}
//       <View style={styles.middleRow}>
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Customer Details</Text>
//           <Text>Name: {profile?.name}</Text>
//           <Text>Phone: {profile?.phone}</Text>
//           <Text>Shipping Address: {shippingAddress}</Text>
//         </View>
//         <View style={[styles.section, styles.rightText]}>
//           <Text style={styles.sectionTitle}>Invoice Info</Text>
//           <Text>Invoice No: {invoiceNumber}</Text>
//           <Text>Date: {currentDate}</Text>
//           <Text>GSTIN: 29ABCDE1JJKDS</Text>
//         </View>
//       </View>

//       {/* Invoice Table */}
//       <View style={styles.tableContainer}>
//         <View style={styles.table}>
//           {/* Header */}
//           <View style={styles.tableRow}>
//             <Text style={styles.tableColHeader}>S.NO</Text>
//             <Text style={styles.tableColHeader}>Products</Text>
//             <Text style={styles.tableColHeader}>Quantity</Text>
//             <Text style={styles.tableColHeader}>Size</Text>
//             <Text style={styles.tableColHeader}>Unit Price</Text>
//             <Text style={styles.tableColHeader}>Taxable Value</Text>
//             <Text style={styles.tableColHeader}>Tax Amount</Text>
//             <Text style={styles.tableColHeader}>Total Price</Text>
//           </View>

//           {/* Items */}
//           {processItems.map((item, index) => (
//             <View style={styles.tableRow} key={index}>
//               <Text style={styles.tableCol}>{index + 1}</Text>
//               <Text style={styles.tableCol}>{item.name}</Text>
//               <Text style={styles.tableCol}>{item.quantity}</Text>
//               <Text style={styles.tableCol}>{item.selectedSize}g</Text>
//               <Text style={styles.tableCol}>₹{item.unitPrice.toFixed(2)}</Text>
//               <Text style={styles.tableCol}>
//                 ₹{item.taxableAmount.toFixed(2)}
//               </Text>
//               <Text style={styles.tableCol}>
//                 ₹{item.taxAmount.toFixed(2)} ({item.gst}%)
//               </Text>
//               <Text style={styles.tableCol}>₹{item.total.toFixed(2)}</Text>
//             </View>
//           ))}
//         </View>
//       </View>

//       {/* GST Summary on Right */}
//       <View style={styles.gstSummaryBox}>
//         <Text style={styles.sectionTitle}>GST Summary:</Text>
//         {Object.values(gstGroupSummary)?.map((group, index) => (
//           <Text key={index}>
//             {group.gstRate}% GST: ₹{group.gstTotal.toFixed(2)}
//           </Text>
//         ))}
//         <Text style={styles.totalText}>Total GST: ₹{gstTotal.toFixed(2)}</Text>
//         <Text style={styles.totalText}>
//           Grand Total: ₹{grandTotal.toFixed(2)}
//         </Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default InvoicePDF;
