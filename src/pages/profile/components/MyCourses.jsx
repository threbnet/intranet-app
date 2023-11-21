


const MyCourses = () => {


    return (
        <div className="w-full">
            <table className="w-full mt-3">
                <th className="py-2">Course</th>
                <th className="py-2">Role</th>
                <th className="py-2">Enrolled on</th>
                <th className="py-2">Completion date</th>
                <th className="py-2">Options</th>
                <tbody className="text-center">
                    <tr className="border-t py-3">
                        <td className="py-2">Welcome to Foundation School</td>
                        <td className="py-2"><span className="">Learner</span></td>
                        <td className="py-2">11/11/2023</td>
                        <td className="py-2">-</td>
                        <td className="py-2">...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyCourses;