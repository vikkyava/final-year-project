import DownloadButton from "../components/DownloadButton";

function AboutPage() {
  return (
    <div className=" mx-auto">
      <h1 className="text-3xl text-dark-gray mb-10">Welcome from the Chair</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <img src="/assets/staff_img_1.jpg" alt="HOD" className="w-1/4" />
        <p className="leading-8">
          Welcome to the Department of Electrical and Computer Engineering at
          Kwara State University (KWASU), Malete. We are dedicated to providing
          a world-class education that equips students with the skills and
          knowledge needed for successful careers in electrical and computer
          engineering. Our comprehensive curriculum spans key areas such as
          power systems, control systems, communication systems, and computer
          hardware and software design. Our faculty comprises experienced
          professionals committed to excellence in teaching and research,
          ensuring our students receive a well-rounded education. With
          state-of-the-art facilities and cutting-edge research opportunities,
          we offer hands-on experience that bridges theoretical knowledge with
          practical applications. At KWASU, we emphasize community engagement
          and social responsibility, encouraging students to participate in
          community service and industrial projects. Whether you are a
          prospective student, an alumnus, or a visitor, we invite you to
          explore our programs and discover how our department can help you
          achieve your academic and professional goals. Thank you for your
          interest, and we look forward to welcoming you to our community.
          <br />
          <b>
            Abdulwaheed Musa, PhD
            <br /> Head, Department of Electrical and Computer Engineering{" "}
            <br />
            Kwara State University, Malete
          </b>
        </p>
      </div>
      <div className="mt-20 h-3 bg-gray-200 rounded-2xl"></div>
      <h2 className="text-3xl font-bold">Programme Overview</h2>
      <p className="mt-8 leading-7">
        The Electrical and Computer Engineering (ECE) program at Kwara State
        University (KWASU) is designed to provide a solid foundation in both
        electrical and computer engineering principles. With a curriculum that
        blends rigorous theoretical coursework with hands-on practical
        experience, the program equips students with the skills needed to excel
        in today’s rapidly evolving technological landscape. Our graduates are
        prepared to tackle complex challenges and contribute to advancements in
        industries ranging from telecommunications to energy systems.
      </p>
      <p className="mt-3 leading-7">
        Through rigorous coursework, hands-on projects, and research
        initiatives, our students develop solutions that address real-world
        challenges. The results of their work are reflected in groundbreaking
        advancements across various industries, including telecommunications,
        energy systems, healthcare, and beyond. Our graduates not only excel in
        their careers but also make significant contributions to global
        technological progress, driving innovation and creating sustainable
        solutions that positively impact society.
      </p>
      <p className="mt-5 pl-4">
        To get a more broad detail about the programme, click the download
        button below.
      </p>
      <DownloadButton
        fileUrl="/assets/downloads/ECE_HANDBOOK_(2023).docx"
        fileName="ECE_HANDBOOK_(2023).docx"
      />
      <h2 className="text-3xl mt-10">Undergraduate Studies</h2>
      <p className="mt-8 leading-7">
        The ECE undergraduate programs at Kwara State University are designed to
        cultivate the next generation of innovators and leaders. Our students
        receive a comprehensive education that not only strengthens their
        understanding of engineering and science fundamentals but also
        encourages their intellectual and personal growth.
      </p>
      <p className="mt-3 leading-7">
        From the start, ECE undergraduates are challenged to excel, rigorously
        tested and proven. By the time they graduate, they have moved beyond
        traditional problem-solving to mastering the art of
        engineering—envisioning, designing, and implementing solutions with
        confidence. Equipped with this expertise, our graduates are ready to
        apply their knowledge and make an immediate impact as they step into
        their careers. We believe that’s the mark of true preparation.
      </p>
      <h2 className="font-semibold mt-10 pl-8 bg-[#bb9457]">
        ECE UNDERGRADUATE DEGREES
      </h2>
      <div className="mt-6 pl-8">
        <p className="mt-6 leading-7">
          In October 2013, the Department of Electrical and Computer Engineering
          at Kwara State University received formal approval from the Nigerian
          University Commission to offer accredited programs leading to the
          following degrees:
        </p>
        <ul className="list-disc ml-10 mt-6 leading-7">
          <li>
            Bachelor of Engineering (B.Eng.) in Electrical and Electronics
            Engineering
          </li>
          <li>Bachelor of Engineering (B.Eng.) in Computer Engineering</li>
        </ul>
      </div>
      <h2 className="text-3xl mt-10">Graduate Studies</h2>
      <p className="mt-8 leading-7">
        For those driven by a passion for problem-solving and a desire to
        harness the power of technology, the School of Electrical and Computer
        Engineering at Kwara State University is the ideal place to thrive. Our
        graduate programs are built on a strong foundation of fundamental
        principles, while also advancing cutting-edge technical knowledge. Every
        day, our talented students and faculty engage in impactful projects,
        experiments, and research that address real-world challenges.
      </p>
      <h2 className="font-semibold mt-10 pl-8 bg-[#bb9457]">
        ECE GRADUATE ACADEMIC PROGRAMS
      </h2>
      <div className="mt-6 pl-8">
        <p className="mt-6 leading-7">
          Kwara State University offers a range of graduate degrees in
          Electrical and Computer Engineering, including the Master of Science
          in Electrical and Computer Engineering (M.S.E.C.E.) and the Ph.D. in
          various specializations. Students can pursue interdisciplinary degrees
          with concentrations in Communication Engineering, Control Engineering,
          or Power Systems and Electrical Machines. Our Ph.D. programs are also
          available in these specializations, providing opportunities for
          in-depth research and innovation in these critical fields.
        </p>
      </div>
      <h2 className="font-semibold mt-10 pl-8">
        Career Prospects for Graduates
      </h2>
      <div className="mt-6 pl-8">
        <p className="mt-6 leading-7">
          Graduates of the Department of Electrical and Computer Engineering at
          Kwara State University have diverse career opportunities across
          various industries. They can work as engineers specializing in
          research, design, construction, maintenance, management, and
          consultancy services in fields such as:
        </p>
        <ul className="list-disc ml-10 mt-6 leading-7">
          <li>Power Generation, Transmission, and Distribution</li>
          <li>Machine Design and Control Systems</li>
          <li>TV and Radio Broadcasting</li>
          <li>Mobile Telecommunications and Internet Service Providers</li>
          <li>Instrumentation and Control Engineering</li>
          <li>Research and Development</li>
          <li>Electrical and Telecommunications Services in Buildings</li>
          <li>Design and Construction of Electronic and Utility Gadgets</li>
          <li>Medical Instrumentation and Control</li>
          <li>Image and Speech Processing</li>
          <li>Oil and Gas Industry</li>
          <li>Regulatory and Enforcement Agencies</li>
          <li>Defense and Aviation</li>
        </ul>
      </div>
      <div className="mt-20 h-3 bg-gray-200 rounded-2xl"></div>
      <h2 className="text-3xl mt-10">About ECE</h2>
    </div>
  );
}

export default AboutPage;
