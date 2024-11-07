import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const placementData = [
  { year: "2024", studentsSelected: 931, companiesVisited: 131 },
  { year: "2023", studentsSelected: 970, companiesVisited: 145 },
  { year: "2022", studentsSelected: 805, companiesVisited: 105 },
  { year: "2021", studentsSelected: 629, companiesVisited: 113 },
  { year: "2020", studentsSelected: 621, companiesVisited: 79 },
];

const totalStudentsSelected = placementData.reduce(
  (sum, year) => sum + year.studentsSelected,
  0
);
const totalCompaniesVisited = placementData.reduce(
  (sum, year) => sum + year.companiesVisited,
  0
);

export function AboutUsCardComponent() {
  return (
    <Card className="w-full shadow-none max-w-7xl mx-auto mt-6 px-4 md:px-10 lg:px-20 bg-white text-black border-none outline-none">
      {/* About Us Section */}
      <CardHeader className="text-left">
        <CardTitle className="text-2xl md:text-3xl font-extrabold">
          About Us
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-justify">
        <p className="text-base md:text-lg leading-relaxed">
          L. D. College of Engineering (LDCE), Ahmedabad is a premier government
          engineering institute in Gujarat State set with the objectives of
          imparting higher education, research and training in various fields of
          engineering & technology. The institute is affiliated with Gujarat
          Technological University, Ahmedabad and administrated by the
          Department of Technical Education, Government of Gujarat. LDCE was
          established on 20th June, 1948 as one of the first few engineering
          colleges in India.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          LDCE offer 16 different B.E. Program, 19 different specialization M.E.
          program and one MCA course. The curriculum of these programs are
          carefully designed in consultation with industry experts to ensure
          that they are relevant to industry and society. LDCE is also deeply
          committed to seeing its students as responsible citizens and its
          social science courses and the rural internship program are designed
          to give a strong sense of cultural roots and social questions to the
          students.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          The Placement Cell at LDCE works professionally with the Industry to
          explore opportunities for LDCE graduates for placements. The Cell
          makes its best efforts to reach out to all sub-sectors of the industry
          in order to ensure that LDCE graduates spread across the industry.
        </p>
      </CardContent>

      {/* Placement Highlights Section */}
      <CardHeader className="text-left">
        <CardTitle className="text-2xl md:text-3xl font-extrabold">
          Placement Highlights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="overflow-x-auto">
          <Table className="border rounded-xl p-2 mt-4 border-gray-300">
            <TableCaption>Placement statistics from 2020 to 2024</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center p-3 font-extrabold">
                  Year
                </TableHead>
                <TableHead className="text-center font-extrabold">
                  Total Students Selected
                </TableHead>
                <TableHead className="text-center font-extrabold">
                  Total Number Of Companies Visited
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placementData.map((year) => (
                <TableRow key={year.year}>
                  <TableCell className="font-medium text-center">
                    {year.year}
                  </TableCell>
                  <TableCell className="text-center">
                    {year.studentsSelected}
                  </TableCell>
                  <TableCell className="text-center">
                    {year.companiesVisited}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-bold text-center">Total</TableCell>
                <TableCell className="font-bold text-center">
                  {totalStudentsSelected}
                </TableCell>
                <TableCell className="font-bold text-center">
                  {totalCompaniesVisited}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Summary</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Total Offer given to Student: {totalStudentsSelected}</li>
            <li>Total Number Of Companies: {totalCompaniesVisited}</li>
          </ul>
        </div>

        <div className="text-base md:text-xl space-y-2">
          <li className="cursor-pointer">
            <Link
              target="_blank"
              to="https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2022.pdf"
              className="hover:text-gray-500"
            >
              Detailed information regarding Placement year - 2022
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2023.pdf"
              target="_blank"
              className="hover:text-gray-500"
            >
              Detailed information regarding Placement year - 2023
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              target="_blank"
              to="https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2024.pdf"
              className="hover:text-gray-500"
            >
              Detailed information regarding Placement year - 2024
            </Link>
          </li>
        </div>
      </CardContent>
    </Card>
  );
}
