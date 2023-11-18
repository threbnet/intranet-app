import CourseCard from "./CourseCard"


const CourseCatalog = ({data}) => {
    
    return (
        <div className="w-full mt-12">
                <h2 className="p-3 text-2xl border-l-2 border-b-2 mb-4">{data.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3">
                {data?.courses.map((course)=>(
                    <CourseCard data={course}/>
                ))}
                </div>
        </div>
    )
}

export default CourseCatalog;