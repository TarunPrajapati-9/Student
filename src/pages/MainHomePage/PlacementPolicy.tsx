import { Download } from "lucide-react";
import { HomeNavBar } from "@/pages/MainHomePage/SubComponent/HomeNavBar";
import HomePageFooter from "@/pages/MainHomePage/SubComponent/HomePageFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { rules } from "@/lib/mainHomepage";

export default function PlacementPolicy() {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Files/placement_cell_rules.pdf"; // URL to your PDF
    link.download = "placement_cell_rules_2024-25.pdf";
    link.click();
    toast({
      variant: "default",
      title: "Downloading rules...",
    });
  };

  return (
    <>
      <HomeNavBar />
      <div className="min-h-screen flex flex-col">
        <header className="py-7 border-b border-gray-300">
          <h1 className="text-3xl font-bold text-center">Placement Rules</h1>
        </header>

        <main className="flex-grow container mx-auto px-6 py-2">
          <Card className="border-none shadow-none">
            <CardContent className="pt-2 text-justify">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-lg mr-4">
                      {index + 1}.
                    </span>
                    <span className="text-base sm:text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6">
            <Button
              onClick={handleDownload}
              size="lg"
              className="gap-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-sm"
            >
              <Download className="w-5 h-5" />
              Download Rules
            </Button>
          </div>
        </main>
      </div>
      <HomePageFooter />
    </>
  );
}
