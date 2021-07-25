const nextJobCard = async (jobCards:any,index:number) => {
    try{
      await jobCards[index].click()
    }catch (error){
        console.log(error)
    }
  
}

export default nextJobCard