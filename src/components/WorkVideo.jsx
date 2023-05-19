 const WorkVideo = ({url}) => {
  return (
    <>
    <video className="bg-gray-200 w-full h-full bg-black rounded-3xl relative overflow-hidden" autoPlay muted controls loop>
        <source src={url}/>
        <div className="absolutew-full h-full top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#787878" className="w-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" fill="#787878" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
            </span>
        </div>
    </video>
    </>
  )
}

export default WorkVideo