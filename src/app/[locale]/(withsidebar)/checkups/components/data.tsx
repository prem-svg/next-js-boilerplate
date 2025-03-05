import { ReportDetailCard } from "@/components";

export interface testforHealthProps {
  id: number;
  name: string;
  data: ReportDetailCard[];
}

export const testsforhealthConditionsList = [
  {
    id: 1,
    name: "STD",
  },
  {
    id: 2,
    name: "Cancer",
  },
  {
    id: 3,
    name: "Arthritis",
  },
  {
    id: 4,
    name: "Hypertension",
  },
  {
    id: 5,
    name: "Auto-Immune Disorders",
  },
];

export const testsforhealthConditions: testforHealthProps[] = [
  {
    id: 1,
    name: "STD",
    data: [
      {
        id: 1,
        title: "Chlamydia Trachomatis & Neisseria Gonorrhoeae Qual...",
        type: "test",
        report: "6 hours",
        test_include: 1,
        amount: 450,
        dis_percentage: 16,
        discount_amount: 534,
      },
      {
        id: 2,
        title: "Syphilis Antibodies (VDRL Test)",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
      {
        id: 3,
        title: "Hepatitis C Virus antibodies (Anti HCV) - Total",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
      {
        id: 4,
        title: "HIV 1&2 (Qualitative) (Rapid)",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
    ],
  },
  {
    id: 2,
    name: "Cancer",
    data: [
      {
        id: 1,
        title: "Prostate Specific Antigen (PSA)",
        type: "test",
        report: "6 hours",
        test_include: 1,
        amount: 450,
        dis_percentage: 16,
        discount_amount: 534,
      },
      {
        id: 2,
        title: "CA 15.3, Breast Cancer Marker",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
      {
        id: 3,
        title: "Cancer Antigen 125 (CA 125)",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
      {
        id: 4,
        title: "Carcinoembryonic Antigen (CEA)",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
    ],
  },
  {
    id: 3,
    name: "Arthritis",
    data: [
      {
        id: 1,
        title: "Anti-Cyclic Citrullinated Peptide (CCP)",
        type: "test",
        report: "6 hours",
        test_include: 1,
        amount: 450,
        dis_percentage: 16,
        discount_amount: 534,
      },
      {
        id: 2,
        title: "Rheumatoid Factor (RA) Quantitative",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
    ],
  },
  {
    id: 4,
    name: "Hypertension",
    data: [
      {
        id: 1,
        title: "Blood Urea Nitrogen (BUN)",
        type: "test",
        report: "6 hours",
        test_include: 1,
        amount: 450,
        dis_percentage: 16,
        discount_amount: 534,
      },
      {
        id: 2,
        title: "Lipid Profile",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
      {
        id: 3,
        title: "Cortisol (Random)",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
      {
        id: 4,
        title: "12 Lead Electrocardiogram (12 Lead ECG)",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
    ],
  },
  {
    id: 5,
    name: "Auto-Immune Disorders",
    data: [
      {
        id: 1,
        title: "Complete Blood Count (CBC) with ESR",
        type: "test",
        report: "6 hours",
        test_include: 1,
        amount: 450,
        dis_percentage: 16,
        discount_amount: 534,
      },
      {
        id: 2,
        title: "C-Reactive Protein (CRP)",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
      {
        id: 3,
        title: "ANA by ELISA, Anti Nuclear Antibody",
        type: "test",
        report: "6 hours",
        test_include: 25,
        amount: 450,
      },
    ],
  },
];
