import StaffCard from "../components/StaffInfoCard";

function StaffPage() {
    const staffMember = {
        profilePicture: 'https://via.placeholder.com/150',
        name: 'John Doe',
        position: 'HOD Electrical',
        socialLinks: {
          twitter: 'https://twitter.com/johndoe',
          linkedin: 'https://linkedin.com/in/johndoe',
          facebook: 'https://facebook.com/johndoe',
        },
    };
    return <div className="h-screen bg-gray-100">
        <div className="flex justify-center items-center">
            <StaffCard
            profilePicture={staffMember.profilePicture}
            name={staffMember.name}
            position={staffMember.position}
            socialLinks={staffMember.socialLinks}
            />
        </div>
    </div>
}

export default StaffPage;