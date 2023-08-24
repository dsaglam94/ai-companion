import prismadb from "@/lib/prismadb";
import CompanionForm from "./components/Companion-form";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  //   TODO: Check subscription

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm categories={categories} initialData={companion} />;
};

export default CompanionIdPage;
