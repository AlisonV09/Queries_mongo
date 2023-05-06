use ("sample_airbnb");
// PUNTO 1
// db.listingsAndReviews.aggregate([
//     {
//         $unwind: "$amenities"
//     },{
//         $group: {
//             _id: "$_id", "nroAmenities":{$sum : 1}
//         }
//     },{
//         $sort : {
//             "nroAmenities": -1}
//     },{
//         $limit: 1
//     }
// ])

// PUNTO 2
// db.listingsAndReviews.aggregate([
//     {
//         $match: { "amenities" : {
//             $in : ["Wifi", "Ethernet"]}
//         }
//     },{
//         $count : "nroPropiedadesInternet"
//     }
// ])

// PUNTO 3
// db.listingsAndReviews.aggregate([
//     {
//         $match: {"address.country" : "Brazil"}
//     },{
//         $match: { "amenities" : {
//             $in : ["Wifi", "Ethernet"]}
//         }
//     },{
//         $match : {"number_of_reviews" : {$gte: 50}}
//     },{
//         $match : {"review_scores.review_scores_rating" : {$gte: 80}}
//     },{
//         $project : {
//             "name" : true,
//             "address.country" : true,
//             "amenities" : true,
//             "number_of_reviews" : true,
//             "review_scores.review_scores_rating" : true,
//         }
//     }
// ])

// PUNTO 4
// db.listingsAndReviews.aggregate([
//     {
//         $match : {"room_type" : "Entire home/apt"}
//     },{
//         $match: {
//           "bedrooms" : {$gt : 0}
//         }
//     },{
//         $group: {
//             _id: "$address.country","avg_price_per_room" : {
//                 $avg : {$divide : ["$price", "$bedrooms"]}
//             }
//         }
//     },{
//         $sort : {
//             "_id" : 1
//         }
//     }
// ])