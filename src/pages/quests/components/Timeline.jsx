import banner from '../../../assets/logo.png'

const Timeline = () =>{

    return (
        <div className="w-full">
             <div className="max-w-2xl mx-auto mt-8">
      <div className="relative wrap overflow-hidden p-10 h-full">
        {/* Timeline item 1 */}
        <div className="mb-8 flex justify-between items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
          </div>
          <div className="order-1 bg-blue-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-lg">Project Kickoff</h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              The project officially started with a kickoff meeting. Goals, scope, and team
              assignments were discussed.
            </p>
          </div>
        </div>

        {/* Timeline item 2 */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-green-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-lg">Development Phase</h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              The team started the development phase, working on various features and functionalities
              outlined in the project plan.
            </p>
          </div>
        </div>

        {/* Add more timeline items as needed */}
      </div>
    </div>

        </div>
    )
}

export default Timeline;