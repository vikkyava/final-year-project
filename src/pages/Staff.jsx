import StaffCard from "../components/StaffInfoCard";
import { departmentalLecturers, visitingLecturers, technicalStaffs, administrativeStaffs } from "../content/staff";

function StaffPage() {
    return <div className="bg-gray-100 px-5 py-10 mx-auto flex flex-col items-center gap-10">
        <section className="w-full">
            <h1 className="capitalize font-bold text-2xl text-center mb-5">Departmental Lecturers</h1>
            <div className="flex flex-wrap gap-5 items-center justify-center">
            {departmentalLecturers.map(staffMember =>  <StaffCard
                key={staffMember.name}
                profilePicture={staffMember.profilePicture}
                name={staffMember.name}
                position={staffMember.position}
                rank={staffMember.rank}
                qualification={staffMember.qualification}
                />)}
            </div>
        </section>
        <section className="w-full">
            <h1 className="capitalize font-bold text-2xl text-center mb-5">Visiting Lecturers</h1>
            <div className="flex flex-wrap gap-5 items-center justify-center">
            {visitingLecturers.map(staffMember =>  <StaffCard
                key={staffMember.name}
                profilePicture={staffMember.profilePicture}
                name={staffMember.name}
                position={staffMember.position}
                rank={staffMember.rank}
                qualification={staffMember.qualification}
                />)}
            </div>
        </section>
        <section className="w-full">
            <h1 className="capitalize font-bold text-2xl text-center mb-5">Technical Staffs</h1>
            <div className="flex flex-wrap gap-5 items-center justify-center">
            {technicalStaffs.map(staffMember =>  <StaffCard
                key={staffMember.name}
                profilePicture={staffMember.profilePicture}
                name={staffMember.name}
                position={staffMember.position}
                rank={staffMember.rank}
                qualification={staffMember.qualification}
                />)}
            </div>
        </section>
        <section className="w-full">
            <h1 className="capitalize font-bold text-2xl text-center mb-5">Administrative Staffs</h1>
            <div className="flex flex-wrap gap-5 items-center justify-center">
            {administrativeStaffs.map(staffMember =>  <StaffCard
                key={staffMember.name}
                profilePicture={staffMember.profilePicture}
                name={staffMember.name}
                position={staffMember.position}
                rank={staffMember.rank}
                qualification={staffMember.qualification}
                />)}
            </div>
        </section>
    </div>
}

export default StaffPage;