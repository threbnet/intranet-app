import banner from '../../../assets/logo.png'

const Overview = () =>{

    return (
        <div className="">
            <div className="bg- rounded-md p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">🔍 Bug Bounty Hunt 🐛</h2>
      <p className="text-gray-100 mb-4">
        Greetings, skilled rebels! We need your expertise to enhance the stability of our systems.
        Embark on this Bug Bounty Hunt to identify and squash those elusive bugs that might be
        lurking in the code. Your keen eyes and problem-solving skills are crucial to maintaining
        the integrity of our network.
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">🎯 Quest Objectives</h3>
        <ul className="list-disc pl-6">
          <li>Investigate the network infrastructure for potential vulnerabilities.</li>
          <li>Examine the codebase to identify and report any bugs or glitches.</li>
          <li>Prioritize and categorize the bugs based on severity and potential impact.</li>
          <li>Collaborate with fellow rebels to discuss findings and share insights.</li>
          <li>Submit detailed bug reports, including steps to reproduce and possible solutions.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">🎁Quest Rewards</h3>
        <ul className="list-disc pl-6">
          <li>🏅Points based on the severity and complexity of discovered bugs.</li>
          <li>💼Recognition in the Hall of Bug Hunters.</li>
          <li>🚀Skill advancement in debugging and system analysis.</li>
        </ul>
      </div>
      <p className="text-gray-100 mb-4">
        This quest is open to rebels with a knack for debugging and a minimum rank of Intermediate.
        Bug reports should be submitted via the designated channels within the specified timeframe.
        Collaboration and knowledge-sharing are encouraged for a more comprehensive bug hunt.
      </p>
      <div className="flex justify-between items-center">
        <p className="text-gray-100">Required Rank: Intermediate</p>
        <p className="text-gray-100">Required Member Party: Solo or form a party</p>
      </div>
    </div>
        </div>
    )
}

export default Overview;