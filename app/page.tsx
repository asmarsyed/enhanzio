'use client'

import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/landingpage/header";
import Footer from "./components/landingpage/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const numbers = "3-4,7-8,11-12,15-16,19-20,23-24,27-28,31-32,35-36,39-40,43-44,47-48,51-52,55-56,59-60,63-64,67-68,71-72,75-76,79-80,83-84,87-88,91-92,95-96,99-100,103-104,107-108,111-112,115-116,119-120,123-124,127-128,131-132,135-136,139-140,143-144,147-148,151-152,155-156,159-160,163-164,167-168,171-172,175-176,179-180,183-184,187-188,191-192,195-196,199-200,203-204,207-208,211-212,215-216,219-220,223-224,227-228,231-232,235-236,239-240,243-244,247-248,251-252,255-256,259-260,263-264,267-268,271-272,275-276,279-280,283-284,287-288,291-292,295-296,299-300,303-304,307-308,311-312,315-316,319-320,323-324,327-328,331-332,335-336,339-340,343-344,347-348,351-352,355-356,359-360,363-364,367-368,371-372,375-376,379-380,383-384,387-388,391-392,395-396,399-400,403-404,407-408,411-412,415-416,419-420,423-424,427-428,431-432,435-436,439-440,443-444,447-448,451-452,455-456,459-460,463-464,467-468,471-472,475-476,479-480,483-484,487-488,491-492,495-496,499-500,503-504,507-508,511-512,515-516,519-520,523-524,527-528,531-532,535-536,539-540,543-544,547-548,551-552,555-556,559-560,563-564,567-568";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(numbers);
      alert('Copié !');
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
      alert('Erreur lors de la copie');
    }
  };

  return (
    <main className="bg-white">
      {/* <Header /> */}
      
      <div className="flex flex-col items-center gap-4 p-8">
        <div className="mt-[100px] text-xl font-mono text-center max-h-[80vh] overflow-y-auto whitespace-pre-wrap break-all">
          {numbers}
        </div>
        <Button 
          onClick={handleCopy}
          className="mt-4 sticky bottom-4"
        >
          Copier les nombres
        </Button>
      </div>

      {/* <Footer /> */}
    </main>
  );
}
