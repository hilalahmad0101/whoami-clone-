import { useEffect, useState } from 'react'

function App() {
  const [websiteData, setWebsiteData] = useState([])
  const [websiteUrl, setWebsiteUrl] = useState("")

  const getData=async()=>{
    const res=await (await fetch('https://api.whoisfreaks.com/v1.0/whois?apiKey=API_KEY&whois=live&domainName='+websiteUrl)).json();
    setWebsiteData(res)
    console.log(res);
  }

  const showData=()=>{
    getData()

  }


  return (
    <>
      <div className=' container mx-auto max-w-xl'>
        <div className="my-14 flex items-center">
          <input type="text" onChange={(e)=>{setWebsiteUrl(e.target.value)}} value={websiteUrl} className='w-full outline-none py-2 px-3 border-2 rounded-tl-md rounded-bl-md text-lg border-purple-500' />
          <button className='py-2 px-5 border-2 text-white border-purple-500 rounded-tr-md rounded-br-md bg-purple-500 text-lg ' onClick={showData}>Search</button>
        </div>
      </div>
      <div className='container mx-auto max-w-xl'>
        <div className="flex items-center justify-between">
          <h2 className='text-xl'>Domain Name  </h2>:
          <h2 className="text-xl text-bold"> {websiteData && websiteData.domain_name}</h2>
          
        </div>
        {/* <div className="flex items-center justify-between">
        <h2 className='text-xl'>City  </h2>:
          <h2 className="text-xl text-bold"> {websiteData.status == true ?  websiteData.administrative_contact.city != null ? websiteData.administrative_contact.city :'' :''}</h2>
        </div>
        <div className="flex items-center justify-between">
        <h2 className='text-xl'>Phone  </h2>:
          <h2 className="text-xl text-bold"> {websiteData.status == true ?  websiteData.administrative_contact.phone  != null ? websiteData.administrative_contact.phone :'':''}</h2>
        </div> */}
       
      </div>
    </>

  )
}

export default App
