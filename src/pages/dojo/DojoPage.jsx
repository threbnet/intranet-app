import CourseCatalog from "./components/CourseCatalog";


const DojoPage =()=>{
    const catalogs = [
        {
            name:'Foundation School',
            courses:[
                {
                    id:1,
                    unlocked:true
                },
                {
                    id:1,
                    unlocked:false
                },
                {
                    id:1,
                    unlocked:false
                },
                {
                    id:1,
                    unlocked:false
                }

            ],
            
        },
        {
            name:'Recruit Bootcamp',
            courses:[
                {
                    id:1,
                    unlocked:false
                },
                {
                    id:1,
                    unlocked:false
                },
                {
                    id:1,
                    unlocked:false
                },
                {
                    id:1,
                    unlocked:false
                }

            ],
            
        },
    ]
    return(
        <div className="text-white w-full">
            <div className="mx-auto lg:w-1/2">
            <h2 className="text-2xl text-center flex gap-3 font-bold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
</svg>
Welcome to the Trebnet Dojo <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z" clipRule="evenodd" />
</svg>
</h2>
            </div>

            <div>
                {catalogs.map((catalog)=>(
                    <CourseCatalog data={catalog} />
                ))}
            </div>
        </div>
    )
}

export default DojoPage;