import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { ConcernedConsent } from "@/utils/types";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

interface Option {
  value: string;
  label: string;
  range: string;
}

export function CompanyTableComponent({
  companies,
}: {
  companies: ConcernedConsent[];
}) {
  const handleCompanyDetailsClick = (id: string) => {
    Cookies.set(`consent_${id}`, "true"); // Set the cookie
  };
  return (
    <div className="w-full overflow-auto border border-gray-300 rounded-lg p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Selected Job Role</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => {
            const jobProfileArray = company?.job_role || "";
            const jobProfileOptions: Option[] = jobProfileArray
              .split(",") // Split by comma to get each role and range pair
              .filter(Boolean) // Filter out empty strings, if any
              .map((profile: string) => {
                // Split by the first colon (:) to get the role and the range
                const [role, range] = profile.split(":");

                return {
                  value: profile.trim(), // Full string (e.g., "AI/ML Engineer:6-9")
                  label: role.trim(), // Just the role (e.g., "AI/ML Engineer")
                  range: range ? range.trim() : "N/A", // Optional range (e.g., "6-9")
                };
              });

            // console.log(jobProfileOptions);

            return (
              <TableRow key={company.id}>
                <TableCell className="font-medium">
                  {company.company.c_name}
                </TableCell>
                <TableCell>
                  {jobProfileOptions.map((option, index) => (
                    <div key={index}>
                      {/* Display the job role and range */}
                      {/* Index starting from 1 */}
                      <strong>{index + 1}. </strong>
                      <span>{option.label}</span> {/* Display job role */}
                    </div>
                  ))}
                </TableCell>
                <TableCell className="hover:font-semibold">
                  <a
                    href={company.resume_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:underline font-medium transition-all duration-300"
                  >
                    View
                  </a>
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link
                          to={`/company/${company.recruitment.r_id}/${company.id}`}
                        >
                          <span
                            onClick={() =>
                              handleCompanyDetailsClick(company.id)
                            }
                          >
                            Company Details
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to={company.c_id + `/schedule/${company.id}`}>
                          Drive/Schedule
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to={company.c_id + `/notice/${company.id}`}>
                          Notice
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
