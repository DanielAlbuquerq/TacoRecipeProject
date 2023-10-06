export const time = async () => {
   
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric", 
      };
    
      var today = await new Date();
      let dayVariable = today.toLocaleDateString("en-US", options);
  }