import { client } from "@/lib/contentful";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  const response = await client.getEntries({
    content_type: "projectPorfolio", 
    order: ["-sys.createdAt"], 
  });
  return response.items as unknown as Project[];
}