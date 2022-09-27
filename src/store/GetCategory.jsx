import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { ALL_CATEGORIES } from "../utils/Category";
import styles from "./category.module.css";

// const GetCategory = () => {
//   const { data } = useQuery(ALL_CATEGORIES);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//   return (
//     <div className="container">
//       <h2> category name {data?.categories?.name}</h2>
//       <div className={styles.products}>
//         {data ? (
//           data?.categories?.map((cat) => {
//             return (
//               cat.name === "all" &&
//               cat.products?.map((prod) => {
//                 return (
//                   <div key={prod.id}>
//                     <div className={styles.card_Box}>
//                       <img src={prod.gallery[0]} alt="" />
//                       <div className={styles.card_des}>
//                         <p key={Math.random()}>{prod.name} </p>
//                         <p>
//                           <span>{prod.prices[0].amount}</span>
//                           <span>{prod.prices[0].currency?.label}</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })
//             );
//           })
//         ) : (
//           <h3>Loading....</h3>
//         )}
//       </div>
//     </div>
//   );
// };
// export default GetCategory;
