// Code your solution here



function findMatching(array, string){
const filtered = array.filter(function(driver){
    return (driver.toLowerCase() ===string.toLowerCase())
   

}
)
return filtered;}



//     for (let user in array)
//     if (array.toLowerCase() === string.toLowerCase()){
//         return true
//     }
//     else {return false}
//     return filtered;
    
    
// })}

    function fuzzyMatch(drivers, string){
        const match = drivers.filter(function(drivers){

            if( string === drivers.slice(0,2)){
                return drivers
            }
            else return drivers === string
            })
            return match
    }

    function matchName (drivers, string){
        const match = drivers.filter(function(string){
            for (let user in drivers){
                if (string === drivers[0]){
                    return drivers
                }
                else return string === drivers[4]
            }
        })
        return match
    }
