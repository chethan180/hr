export const config = {
    appId : '8dfdca62-7ae2-4a48-a8e4-72568ecafd53',
    redirectUrl: 'http://localhost:3000',
    scopes :[
        'user.read'
    ],
    authority:'https://login.microsoftonline.com/mechyd.ac.in' 
};


// export const msalConfig = {
//     auth: {
//       clientId: "8dfdca62-7ae2-4a48-a8e4-72568ecafd53",
//       authority: "https://login.microsoftonline.com/mechyd.ac.in", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
//       redirectUri: "Enter_the_Redirect_Uri_Here",
//     },
//     cache: {
//       cacheLocation: "sessionStorage", // This configures where your cache will be stored
//       storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//     }
//   };
  
//   // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
//   export const loginRequest = {
//    scopes: ["User.Read"]
//   };
  
//   // Add the endpoints here for Microsoft Graph API services you'd like to use.
//   export const graphConfig = {
//       graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
//   };