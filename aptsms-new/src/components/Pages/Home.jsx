import React from "react";
import { Button } from "../ui/button.jsx";
import { Link } from "react-router-dom";
import Id from "../Id.jsx";
import Membership from "./Membership.jsx";

function Home() {
  return (
    <div>
      <div
        id="Hero"
        className="flex flex-col items-center justify-center text-center py-8 w-full"
      >
        <div className="flex flex-col items-center w-full max-w-4xl">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="logo"
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto mx-auto mb-4"
          />
          <h1 className="text-green-800 text-[6vw] lg:text-[2vw] md:text-[4vw] font-bold leading-tight mb-2 font-sans">
            <b>Andhra Pradesh & Telangana Society for Mathematical Sciences</b>
          </h1>
          <p className="px-6">
            A forum for research workers, young and old, to present their
            finding and for reviewing the state of the art in their specialized
            areas of <b>mathematical sciences</b> besides bringing together
            academics for camaraderie and intellectual interaction.
          </p>
          <Button variant="outline" className="mt-[2.5vh]">
            <Link to="/">
              <b>Learn More</b>
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-6 mt-[10vh] items-center">
        <div className="flex items-center justify-center px-6 md:h-full md:w-full row-span-1">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="maths-pic"
            className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
          />
        </div>
        <div className="lg:row-span-1 md:row-span-2 row-span-3">
          <h1 className="text-green-800 text-[8vw] md:text-[6vw] lg:text-[4vw] px-6 font-bold mb-2">
            <b>About Us</b>
          </h1>
          <p className=" px-6 md:pr-6 lg:text-[1vw] md:text-[2vw] text-[4vw]pb-4">
            The <b>Andhra Pradesh Society for Mathematical Sciences (APSMS)</b>{" "}
            was established in the year <b>1986</b> with its headquarters at
            Department of Mathematics, Osmania University, Hyderabad. APSMS was
            formed with the pioneering efforts of Late Prof. N.Ch. Pattabhi
            Ramacharyulu, the then Professor of Mathematics, Regional
            Engineering College, Warangal (Now National Institute of Technology
            Warangal), and Late Prof. P.V. Arunachalam, the then Professor of
            Mathematics, Sri Venkateshwara University, Tirupati, & Former Vice
            Chancellor, Dravidian University. Since its inception, it has been
            consistently and successfully organising its annual congresses,
            providing a common platform for scientists, researchers (young and
            old), technologists, and engineers to present and discuss the
            current research work conducted by them individually or in groups in
            their specialised areas of <b>mathematical sciences</b>. It has been
            attracting a large number of researchers not only from our country
            but also from abroad. The society has made significant progress in
            encouraging inter-disciplinary research in the mathematical
            sciences. Young researchers / scientists are encouraged by the
            Society through awards, which are specifically designed for that
            purpose. APSMS has been renamed as{" "}
            <b>
              Andhra Pradesh and Telangana Society for Mathematical Sciences
              (APTSMS)
            </b>{" "}
            in 2018 in consequence of the separation of the Andhra Pradesh state
            as Andhra Pradesh and Telangana states.
            <br />
            <br />
            <Button variant="outline">
              <Link to="/about">
                <b>Read More</b>
              </Link>
            </Button>
          </p>
        </div>
      </div>

      <div
        id="objectives"
        className="w-full flex flex-col items-center justify-center py-12 bg-green-50 dark:bg-gray-900 mt-[10vh]"
      >
        <div className="max-w-4xl w-full px-6">
          <h1 className="text-green-800 text-[7vw] md:text-[4vw] lg:text-[3vw] font-bold mb-4 text-center font-sans">
            <b>Objectives</b>
          </h1>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 lg:text-[1.1vw] md:text-[1.5vw] text-[3.5vw] space-y-4">
            <li>
              To promote and advance the cause of <b>mathematical sciences</b>{" "}
              in <b>Andhra Pradesh</b> and <b>Telangana</b>.
            </li>
            <li>
              To provide a platform for <b>researchers</b>, <b>educators</b>,
              and <b>students</b> to exchange ideas and present their work.
            </li>
            <li>
              To organize <b>annual congresses</b>, <b>seminars</b>,{" "}
              <b>workshops</b>, and <b>lectures</b> for the dissemination of
              mathematical knowledge.
            </li>
            <li>
              To encourage <b>interdisciplinary research</b> and{" "}
              <b>collaboration</b> among mathematical scientists.
            </li>
            <li>
              To recognize and reward <b>outstanding contributions</b> and{" "}
              <b>young talent</b> in mathematical sciences.
            </li>
            <li>
              To foster <b>camaraderie</b> and <b>intellectual interaction</b>{" "}
              among academics and professionals in the field.
            </li>
          </ul>
        </div>
      </div>

      <div
        id="president"
        className="w-full flex flex-col items-center justify-center py-12 bg-white dark:bg-gray-800 mt-[10vh]"
      >
        <div className="max-w-3xl w-full px-6 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://aptsms.org/assets/images/Srinivasacharya.jpg"
            alt="Prof. D Srinivasacharya"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-green-200 mb-6 md:mb-0"
          />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-green-800 text-[7vw] md:text-[4vw] lg:text-[3vw] font-bold mb-2 font-sans text-center md:text-left">
              <b>President's Message</b>
            </h2>
            <p className="text-gray-800 dark:text-gray-200 text-[4vw] md:text-[1.5vw] lg:text-[1.1vw] mb-2 text-center md:text-left">
              <b>Prof. D Srinivasacharya</b>
              <br />
              President <br /> Department of Mathematics <br />
              NIT Warangal
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-[3.5vw] md:text-[2vw] lg:text-[1vw] text-center md:text-left pb-4">
              Welcome to the Andhra Pradesh & Telangana Society for Mathematical
              Sciences. Our mission is to foster excellence in mathematical
              research and education, and to build a vibrant community of
              scholars and students. We invite you to participate in our
              activities and contribute to the advancement of mathematical
              sciences in our region.
              <br />
              <br />
              <Button variant="outline">
                <Link to="/president-message">
                  <b>Read More</b>
                </Link>
              </Button>
            </p>
          </div>
        </div>
      </div>

      <Membership />

      <div className="flex flex-col items-center">
        <h2 className="text-green-800 text-[7vw] md:text-[4vw] lg:text-[3vw] font-bold mb-2 font-sans text-center md:text-left">
          <b>Executive Council</b>
        </h2>
        <div className="flex gap-20 justify-center flex-wrap">
          <Id
            name="D Srinivasacharya"
            designation="Prof."
            role="President"
            assigned="Department of Mathematics"
            college="NIT, Warangal"
            mail=""
            number=""
            src="images/Srinivasacharya.jpg"
          />
          <Id
            name="A Chandulal"
            designation="Dr."
            role="Vice President"
            assigned="Assistant Professor"
            college="National Sanskrit University, Tirupati"
            mail=""
            number=""
            src="images/chandulal.jpg"
          />
          <Id
            name="A Benerji Babu"
            designation="Prof."
            role="Vice President"
            assigned="Department of Mathematics"
            college="NIT, Warangal"
            mail=""
            number=""
            src="images/benerji_babu.jpg"
          />
          <Id
            name="N. Ramakrishna"
            designation="Prof."
            role="General Secretary"
            assigned="Department of Mathematics"
            college="Andhra University, Visakhapatnam"
            mail="captdrnrk@gmail.com"
            number="+91 9440442737"
            src="images/NRamakrishna.jpg"
          />
          <Id
            name="P Narasimha Swamy"
            designation="Dr."
            role="Office Secretary"
            assigned="Department of Mathematics"
            college="GITAM University, Hyderabad Campus"
            mail="swamy.pasham@gmail.com"
            number="+91 9948525133"
            src="images/narasimha_swamy.jpeg"
          />
          <Id
            name="Maddileti Pasupula"
            designation="Dr."
            role="Treasurer"
            assigned="Department of Mathematics"
            college="University College of Science, Mahatma Gandhi University, Nalgonda"
            mail="madhu.june5@gmail.com"
            number="+91 6281897948"
            src="images/maddileti_pasupula.jpeg"
          />

        </div>
        <Button variant="outline">
          <Link to="/executive-council">
            <b>See More</b>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
