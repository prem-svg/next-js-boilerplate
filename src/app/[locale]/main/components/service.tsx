"use client";

import { ServiceCard, TeamMemberCard, TestimonialCard } from "@/components";

export const ServiceProvide = () => {
  const data = [
    {
      id: 1,
      name: "Dental treatments",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvl8fH6yM2xh8tYCXEDQNpTdmtE9Rg33KiQ&s",
      des: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
    {
      id: 2,
      name: "Bones treatments",
      img: "https://media.istockphoto.com/id/1314644938/photo/cropped-shot-of-an-attractive-young-female-chiropractor-explaining-her-diagnosis-to-a-male.jpg?s=612x612&w=0&k=20&c=UGNPfASMG0PAaal0K1dvPGyt2Wtxe4_XQYztJZ7LUC0=",
      des: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
    {
      id: 3,
      name: "Diagnosis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabDqAVXO4qHwhkJbV2VSyjGQn87vpcKDKHg&s",
      des: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
    {
      id: 5,
      name: "Surgery",
      img: "https://media.istockphoto.com/id/1332985409/photo/doctor-and-nurse-medical-team-are-performing-surgical-operation-at-emergency-room-in-hospital.jpg?s=612x612&w=0&k=20&c=P3xsG4PsfEQMqYQN8OwEymuMM6IE0-Us7bJvQQ-HTr4=",
      des: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
    },
  ];
  const teams = [
    {
      id: 1,
      name: "John Carter",
      position: "CEO & Co-Founder",
      img: "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg  ",
    },
    {
      id: 2,
      name: "Sophie Moore",
      position: "dental specialist",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      id: 3,
      name: "Matt Cannon",
      position: "orthopedic",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe9NZZk7nUE_anJir2Scf7tsqMHRdEpCbJg&s",
    },
    {
      id: 4,
      name: "Matt Cannon",
      position: "orthopedic",
      img: "https://t4.ftcdn.net/jpg/03/03/11/75/360_F_303117590_NNmo6BS2fOBEmDp8uKs2maYmt03t8fSL.jpg",
    },
  ];
  const testimonials = [
    {
      id: 1,
      title: "An amazing service",
      name: "John Carter",
      des: "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
      img: "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg  ",
    },
    {
      id: 2,
      title: "One of a kind service",
      name: "Sophie Moore",
      des: "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      id: 3,
      title: "The best service",
      name: "Andy Smith",
      des: "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe9NZZk7nUE_anJir2Scf7tsqMHRdEpCbJg&s",
    },
    {
      id: 4,
      title: "The best service",
      name: "Andy Smith",
      des: "Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas.",
      img: "https://t4.ftcdn.net/jpg/03/03/11/75/360_F_303117590_NNmo6BS2fOBEmDp8uKs2maYmt03t8fSL.jpg",
    },
  ];

  return (
    <>
      {/* Services */}
      <div className="mt-10 px-8">
        <div className="text-center">
          <p className="font-source font-semibold md:text-h5 text-h5 leading-tight">
            Service
            <span className="text-primary"> We Provided</span>
          </p>
          <div className="mt-2">
            <p className="font-source text-body4 leading-normal text-secondary-200">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 justify-around mt-5">
          {data?.map((val) => {
            return (
              <div
                key={val?.id}
                className="col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3"
              >
                <ServiceCard {...val} />
              </div>
            );
          })}
        </div>
      </div>
      {/* Team member */}
      <div className="mt-10 px-8">
        <div className="text-center">
          <p className="font-source font-semibold md:text-h5 text-h5 leading-tight">
            Meet our
            <span className="text-primary"> team members</span>
          </p>
          <div className="mt-2">
            <p className="font-source text-body4 leading-normal text-secondary-200">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 justify-around mt-5">
          {teams?.map((val) => {
            return (
              <div
                key={val?.id}
                className="col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3"
              >
                <TeamMemberCard {...val} />
              </div>
            );
          })}
        </div>
      </div>
      {/* Testimonials*/}
      <div className="mt-10 px-8">
        <div className="text-center">
          <p className="font-source text-primary font-semibold md:text-h5 text-h5 leading-tight">
            Testimonial
          </p>
          <div className="mt-2">
            <p className="font-source text-body4 leading-normal text-secondary-200">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 justify-around mt-5">
          {testimonials?.map((val) => {
            return (
              <div
                key={val?.id}
                className="col-span-12  sm:col-span-6 md:col-span-4 lg:col-span-3"
              >
                <TestimonialCard {...val} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
