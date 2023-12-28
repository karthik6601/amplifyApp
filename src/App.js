// import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Routing from "./Routes/routes";

// function App() {
//   const [data, setData] = useState({
//     status: false,
//     products: [],
//     categories: [],
//     meta: {},
//   });

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.slingacademy.com/v1/sample-data/products?offset=0&limit=100"
//       )
//       .then((res) => {
//         const categories = res.data.products.reduce((cat, items) => {
//           !cat.includes(items.category) && cat.push(items.category);
//           return cat;
//         }, []);
//         setData({
//           status: res.data.success,
//           products: res.data.products,
//           categories: categories,
//           meta: {
//             total: res.data.total_products,
//             loaded: res.data.limit,
//           },
//         });
//       });
//   }, []);
//   return (
//     <div>
//       <Routing />
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);