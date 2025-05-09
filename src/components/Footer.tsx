"use client";

import Image from "next/image";
import { useState } from "react";
import PolicyAndTermModal from "./ui/PolicyAndTermModal";

export default function Footer() {
  const footerParagraphsStyle = "opacity-70 ";
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  const privacyPolicyDetail =
    "The Young Webmaster Camp prioritizes the privacy of all participants and their legal guardians, processing personal data strictly in accordance with Thailand's Personal Data Protection Act (PDPA). We collect necessary information during registration and camp activities, including contact details, date of birth, and relevant medical information, solely for the purposes of managing the camp, ensuring participant safety, and facilitating communication. Our legal basis for this processing includes obtaining explicit consent, which for participants under 18 is secured from their parent or legal guardian in compliance with PDPA requirements for minors. We employ appropriate technical and organizational measures to safeguard this data against unauthorized access or disclosure. Personal data is retained only as long as required for camp administration and legal obligations, after which it is securely deleted. Participants and their guardians have specific rights under the PDPA, such as accessing, correcting, or requesting the deletion of their personal data, which can be exercised by contacting the camp organizers.";
  const TermsAndConditionDetail =
    "Participation in the Young Webmaster Camp in Thailand is subject to specific eligibility criteria, typically requiring participants to be students within a defined age range (e.g., 15-20 years old) with basic computer proficiency. The application process is conducted online, with selection based on criteria determined solely by the organizers; timely confirmation is mandatory for accepted participants. All attendees are expected to adhere to a strict code of conduct emphasizing respect for others, prohibition of disruptive or illegal behavior, and compliance with camp rules and schedules to ensure a positive and safe environment for everyone involved. Attendees acknowledge and accept that participation is at their own risk, and the camp organizers, staff, and venue are not liable for any personal injury, loss, or damage to property that may occur during the camp; a signed liability waiver, particularly for minor participants, is required. Full disclosure of medical conditions and allergies is necessary, and while emergency medical attention will be provided, associated costs are the participant's responsibility. Personal data collected during registration and the camp will be handled in accordance with Thailand's PDPA, used primarily for administrative and safety purposes, and generally not shared with external parties without consent. Intellectual property rights for projects created during the camp generally belong to the participants, though organizers reserve a limited license to use these projects for promotional and educational displays unless otherwise specified. By attending, participants and their guardians consent to the use of photographs and videos taken during the camp for promotional materials, with an option to opt-out in writing. The camp organizers retain the right to modify the program schedule, activities, or venue as needed and will notify participants in case of cancellation, outlining any applicable procedures. Crucially, participation by minors requires explicit written consent from a parent or legal guardian, who must also provide reliable emergency contact information and remain accessible throughout the camp duration.";

  const handleClick = (title: string, description: string) => {
    setTitle(title);
    setDescription(description);
    setShowModal(true);
  };

  return (
    <section className=" w-full h-fit py-5 flex max-sm:flex-col max-sm:gap-10 justify-between items-center text-sm ">
      <div>
        <Image
          src="/twa_sponsors.png"
          alt="twa-sponsor"
          width={150}
          height={150}
        />
      </div>
      <p
        onClick={() => handleClick("Privacy Policy", privacyPolicyDetail)}
        className={footerParagraphsStyle + "hover:underline cursor-pointer"}
      >
        Privacy Policy
      </p>
      <p
        onClick={() =>
          handleClick("Terms and Conditions", TermsAndConditionDetail)
        }
        className={footerParagraphsStyle + "hover:underline cursor-pointer"}
      >
        Terms and Conditions
      </p>
      <p
        className={`text-xs w-1/4 text-end max-sm:text-center max-sm:w-full  ${footerParagraphsStyle}`}
      >
        Copyright 2003 - 2025. Young Webmaster Camp, in association with Thai
        Webmaster and Online Media Association, all rights reserved.
      </p>

      {/* Policy Modal */}
      {showModal && (
        <PolicyAndTermModal
          title={title}
          description={description}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
