
 export const fetchSellerProducts = async (sellerAuthToken) => {
    const response = await fetch('http://localhost:4000/seller/product/fetchall', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
         headers: {
          "Content-Type": "application/json",
          "auth-token": sellerAuthToken
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
       });
      const allProducts = await response.json(); // parses JSON response into native JavaScript objects
    //   Not Using the redux toolkit 
      return allProducts
 }
 