import { useParams } from "next/navigation";
import enDict from "@/dictionaries/en.json";
import jaDict from "@/dictionaries/ja.json";
import npDict from "@/dictionaries/np.json";

export const useTranslation = () => {
  const lang = useParams().lang;

  if (lang === "np") {
    return npDict;
  } else if (lang === "ja") {
    return jaDict;
  } else {
    return enDict;
  }
};
