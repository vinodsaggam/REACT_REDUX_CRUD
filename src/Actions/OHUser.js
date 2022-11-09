export const saveOHUser = (data) => {
   return (
    {
        type: 'SAVE_OHUSER',
        payload: data
    }
   )
}

export const getOHUser = () => {
    return (
     {
         type: 'GET_OHUSER'
     }
    )
 }

 export const saveDRDetails = (data) => {
    return (
     {
         type: 'SAVE_DRDETAILS',
         payload: data
     }
    )
 }
 
 export const getDRDetails = () => {
     return (
      {
          type: 'GET_DRDETAILS'
      }
     )
  }

